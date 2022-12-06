import { SwalService } from './../../../../shared/services/swal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VoterService } from './../service/voter.service';
import { CommanService, party, assignedPerson, ageCheck } from './../../../../shared/services/comman.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('voterNgForm') voterNgForm: NgForm;
  voterForm: UntypedFormGroup;
  public parties: party[] = [];
  public assignee: assignedPerson[] = [];
  public readonly: boolean = false;

  genders: Array<{ id: number, name: string }> = [];
  votingFor: Array<{ id: number, name: string, isDeleted: boolean }> = [];


  constructor(public _formBuilder: FormBuilder,
    private _coommanService: CommanService,
    private _voterService: VoterService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _swalService: SwalService) { }

  ngOnInit(): void {
    this.getParties();
    this.getAssignee();
    this.getVotingFor();
    this.genders = this._coommanService.getGenders();
    this.createAddVoterForm();
    this.checkRouterValue();


  }

  checkRouterValue() {
    let routeId;
    this._route.params.subscribe(response => {
      if (response.id) {
        routeId = response.id;
        this.getVotrDetailsById(Number(routeId));
      }
    });
    if (this._router.url.includes('view-voter')) {
      this.readonly = true;
      this.voterForm.disable();
    }
  }

  getParties() {
    this._coommanService.getPartiesList().subscribe((response) => {
      if (response.statusCode == 200) {
        this.parties = response.data;
      }
    }, (error) => { })
  }

  getAssignee() {
    this._coommanService.getAssigneeList().subscribe((response) => {
      if (response.statusCode == 200) {
        this.assignee = response.data;
      }
    }, (error) => { })
  }

  getVotingFor() {
    this._coommanService.getVotingList().subscribe((response) => {
      if (response.statusCode == 200) {
        this.votingFor = response.data;
      }
    }, (error) => { })
  }


  createAddVoterForm() {
    // Create the form
    this.voterForm = this._formBuilder.group({
      id: [null],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      age: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      gender: ['', Validators.required],
      ward: ['', Validators.required],
      village: ['', Validators.required],
      address: ['', Validators.required],
      voterId: ['', Validators.pattern('^([a-zA-Z]){3}([0-9]){7}?$')],
      adharId: [null, Validators.pattern('^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)')],
      panId: ['', Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')],
      votingForId: ['', Validators.required],
      partiesId: ['', Validators.required],
      assignedPersonId: ['', Validators.required],
      comments: this._formBuilder.array([])
    }, { validator: ageCheck('age') });
  }

  getVotrDetailsById(id: number) {
    this._voterService.getVoterById(id).subscribe((response) => {
      if (response.statusCode == 200) {
        this.patchValue(response.data);
      }
    }, error => { })
  }

  patchValue(data: { [key: string]: any }, { onlySelf, emitEvent }: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    Object.keys(data).forEach(name => {
      if (this.voterForm.controls[name]) {
        this.voterForm.controls[name].patchValue(data[name], { onlySelf: true, emitEvent });
      }
    });
    this.voterForm.updateValueAndValidity({ onlySelf, emitEvent });
    if (data.comments.length) {
      this.voterForm.setControl('comments', this.setExistingCommetns(data.comments))
    }

  }

  setExistingCommetns(commetns): FormArray {
    const formArray = new FormArray([]);
    commetns.forEach(element => {
      formArray.push(this._formBuilder.group({
        id: element.id,
        description: element.description
      }));
    });
    if (this.readonly) {
      formArray.disable();
    }
    return formArray;
  }

  public getCommentsArray() {
    return this.voterForm.get('comments') as FormArray;
  }

  private createComments(): FormGroup {
    return new FormGroup({
      id: new FormControl(0),
      description: new FormControl('')
    });
  }

  public addComment(): void {
    const comments = this.voterForm.get('comments') as FormArray;
    comments.push(this.createComments());
  }

  public deleteCommentItem(index) {
    let invoiceItems = this.getCommentsArray();

    invoiceItems.removeAt(index);

  }

  saveDetails() {
    // Return if the form is invalid
    if (this.voterForm.invalid) {
      return;
    }

    this.voterForm.disable();

    if (!this.voterForm.value.id) {
      let param = this.voterForm.value;
      this.postDetails(param);
    } else {
      this.putDetails();
    }

  }

  postDetails(param) {
    delete param.id;
    this._voterService.postVoter(param).subscribe(response => {
      if (response.statusCode == 201) {
        this.voterForm.enable();
        this._swalService.swalSUccess('अभिनंदन!', 'मतदार तपशील यशस्वीरित्या जोडले!');
        this.navigateToList()
      }
    }, error => {
      this.voterForm.enable();
      this._swalService.swalError('क्षमस्व!', error.error.message);
    });
  }

  putDetails() {
    this._voterService.putVoter(this.voterForm.value).subscribe(response => {
      if (response.statusCode == 200) {
        this.voterForm.enable();
        this._swalService.swalSUccess('अभिनंदन!', 'मतदार तपशील यशस्वीरित्या संपादित केले!');
        this.navigateToList()
      }
    }, error => {
      this.voterForm.enable();
      this._swalService.swalError('क्षमस्व!', error.error.message);
    });
  }


  navigateToList() {
    // Navigate to the redirect url
    this._router.navigateByUrl('/voters/list');
  }

}
