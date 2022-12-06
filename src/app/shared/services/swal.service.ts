import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  swalSUccess(title?: string, message?: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      showCancelButton: false
    });
  }

  swalError(title?: string, message?: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      showCancelButton: false
    });
  }


}
