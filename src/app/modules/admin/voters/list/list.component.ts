import Swal from 'sweetalert2';
import { SwalService } from './../../../../shared/services/swal.service';
import { CommanService, party, voter, assignedPerson } from './../../../../shared/services/comman.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { VoterService } from '../service/voter.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from '@angular/router';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'village', 'ward', 'actions'];
  dataSource: MatTableDataSource<voter>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public voters: voter[] = [];
  public parties: party[] = [];
  public assignee: assignedPerson[] = [];
  pageSize: number;
  pageSizeOptions: number[];

  public searchedName: string;
  public searchedWard: number;
  public searchedParty: number;
  public searchedAssignedPersion: number;

  constructor(private _votersService: VoterService,
    private _coommanService: CommanService, private _router: Router, private _swalService: SwalService) { }

  ngOnInit(): void {
    this.getParties();
    this.getAssignee();
    this.getVoters();

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

  private getVoters(param?: any) {
    console.log('param', param);
    this._votersService.getVotersList(param).subscribe((response) => {
      if (response.statusCode == 200) {
        this.voters = response.data;
        this.setDataSource();
      }
    }, error => {
      this._swalService.swalError(error.error.message);
      this.voters = [];
      this.setDataSource();
    });
  }


  setDataSource() {
    this.dataSource = new MatTableDataSource(this.voters);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return this.nestedFilterCheck(currentTerm, data, key);
      };
      const dataStr = Object.keys(data)
        .reduce(accumulator, "")
        .toLowerCase();
      // Transform the filter by converting it to lowercase and removing whitespace.
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
  }

  public nestedFilterCheck(search, data, key) {
    if (typeof data[key] === "object") {
      for (const k in data[key]) {
        if (data[key][k] !== null) {
          search = this.nestedFilterCheck(search, data[key], k);
        }
      }
    } else {
      search += data[key];
    }
    return search;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDetails(id: number, type: string) {
    this._router.navigate(['/voters/' + type + '-voter', id]);
  }

  deleteRecord(id: number, index: number) {
    Swal.fire({
      title: 'तुम्हाला तपशील हटवायची खात्री आहे?',
      showDenyButton: true,
      confirmButtonText: 'होय हटवा',
      denyButtonText: `नाही, ठीक आहे`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.confirmDelete(id, index)
      } else if (result.isDenied) {
        this._swalService.swalSUccess('अभिनंदन!', 'मतदारांचा तपशील सुरक्षित आहे');
      }

    });

  }

  confirmDelete(id, index) {
    this._votersService.deleteVoterById(id).subscribe(response => {
      if (response.statusCode == 200) {
        this._swalService.swalSUccess('', 'मतदारांचे तपशील यादीतून हटवले');
        this.voters.splice(index, 1);
        this.setDataSource();
      }
    }, error => { this._swalService.swalError('क्षमस्व!', 'कृपया पुन्हा प्रयत्न करा'); });
  }


  SelectionAssignedPersion(event) {
    this.searchedAssignedPersion = event;
    this.callFilterApi(this.searchedWard, this.searchedParty?.['id'], this.searchedAssignedPersion?.['id']);
  }
  SelectionParty(event) {
    this.searchedParty = event;
    this.callFilterApi(this.searchedWard, this.searchedParty?.['id'], this.searchedAssignedPersion?.['id']);
  }
  SelectionWard(event) {
    this.searchedWard = event;
    this.callFilterApi(this.searchedWard, this.searchedParty?.['id'], this.searchedAssignedPersion?.['id']);
  }


  callFilterApi(wardId?: number, party?: number, assignee?: number) {
    let param = {
      wardId: wardId,
      party: party,
      assignee: assignee
    }
    this.getVoters(param);
  }

  clearFilter() {

    let param = {
      wardId: this.searchedWard || null,
      party: this.searchedParty?.['id'] || null,
      assignee: this.searchedAssignedPersion?.['id'] || null
    }
    this.getVoters(param);

  }

}
