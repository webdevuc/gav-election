import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { SwalService } from './../../../../shared/services/swal.service';
import { SubuserService } from './../service/subuser.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { subUser } from '../service/subuser.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<subUser>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pageSize: number;
  pageSizeOptions: number[];

  public users: Array<subUser> = [];

  constructor(private _subUserService: SubuserService, private _swalService: SwalService, private _router: Router) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._subUserService.getUsersList().subscribe((response) => {
      if (response.statusCode == 200) {
        this.users = response.data;
        this.setDataSource();
      }
    });
  }

  setDataSource() {
    this.dataSource = new MatTableDataSource(this.users);
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
    this._router.navigate(['/users/' + type + '-user', id]);
  }

  deleteRecord(id, index) { 
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

  confirmDelete(id, index){
    this._subUserService.deleteUserById(id).subscribe(response => {
      if (response.statusCode == 200) {
        this._swalService.swalSUccess('', 'वापरकर्ता तपशील यादीतून हटवले');
        this.users.splice(index, 1);
        this.setDataSource();
      }
    }, error => { this._swalService.swalError('क्षमस्व!', 'कृपया पुन्हा प्रयत्न करा'); });
  }
}
