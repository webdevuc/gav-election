import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, UntypedFormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommanService, roles } from './../../../../shared/services/comman.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SubuserService } from '../service/subuser.service';
import { SwalService } from 'app/shared/services/swal.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('userNgForm') voterNgForm: NgForm;
  userForm: UntypedFormGroup;
  public roles: Array<roles> = [];
  public isSubmited: boolean = false;
  public readonly: boolean = false;

  constructor(private _commanService: CommanService,
    public _formBuilder: FormBuilder,
    private _subUsersService: SubuserService,
    private _swalService: SwalService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoles();
    this.createAddUserForm();
    this.checkRouterValue();

  }

  checkRouterValue() {
    let routeId;
    this._route.params.subscribe(response => {
      if (response.id) {
        routeId = response.id;
        this.getUserDetailsById(Number(routeId));
      }
    });
    if (this._router.url.includes('view-user')) {
      this.readonly = true;
      this.userForm.disable();
    }
  }


  getRoles() {
    this._commanService.getRolesList().subscribe(response => {
      if (response.statusCode == 200) {
        if (response.data) {
          this.roles = response.data
        }
      }
    }, error => { })
  }

  createAddUserForm() {
    this.userForm = this._formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      role: [null, Validators.required],
      password: ['', Validators.required],
      status: [null, Validators.required]
    })
  }

  getUserDetailsById(id) {
    this._subUsersService.getUserById(id).subscribe(response => {
      if (response.data) {
        this.patchValues(response.data);
      }
    }, error => { })
  }

  patchValues(data: { [key: string]: any }, { onlySelf, emitEvent }: { onlySelf?: boolean, emitEvent?: boolean } = {}): void {
    Object.keys(data).forEach(name => {
      if (this.userForm.controls[name]) {
        this.userForm.controls[name].patchValue(data[name], { onlySelf: true, emitEvent });
      }
    });
    this.userForm.updateValueAndValidity({ onlySelf, emitEvent });
  }


  saveDetails() {
    this.isSubmited = true;

    if (this.userForm.invalid) {
      return
    }

    this.userForm.disable();

    this.userForm.value.status = Number(this.userForm.value.status);
    if (!this.userForm.value.id) {
      let params = this.userForm.value;
      this.postValues(params);
    } else {
      this.updateValues();
    }

  }

  postValues(params) {
    delete params.id;
    this._subUsersService.postUser(params).subscribe(response => {
      if (response.statusCode == 201) {
        this.userForm.enable();
        this._swalService.swalSUccess('अभिनंदन!', 'वापरकर्ते तपशील यशस्वीरित्या जोडले!');
        this.navigateToList();
      }
    }, error => {
      this.userForm.enable();
      this._swalService.swalError('क्षमस्व!', error.error.message);
    });
    this.isSubmited = false;
  }

  updateValues() {
    this._subUsersService.postUser(this.userForm.value).subscribe(response => {
      if (response.statusCode == 201) {
        this.userForm.enable();
        this._swalService.swalSUccess('अभिनंदन!', 'वापरकर्ते तपशील यशस्वीरित्या संपादित केले!');
        this.navigateToList();
      }
    }, error => {
      this.userForm.enable();
      this._swalService.swalError('क्षमस्व!', error.error.message);
    });
    this.isSubmited = false;
  }

  navigateToList() {
    // Navigate to the redirect url
    this._router.navigateByUrl('/users/list');
  }
}
