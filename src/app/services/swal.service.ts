import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  test(){
    swal.fire('Any fool can use a computer');
  }

  ok(msg){
    swal.fire({title: '<h1>OK!</h1>', text: msg, icon: 'success'});
  }

  err(msg){
    swal.fire({title: "<h1 class='font-popup-ucitavanje'>Greška!</h1>", html: "<p>" + msg + "</p>", icon: "error"});
  }

  warning(msg){
    swal.fire({title: "<h1 class='font-popup-ucitavanje'>Upozorenje!</h1>", text: msg, icon: "warning"});
  }

  showLoading(msg, allowOutsideClick){
    swal.fire({html: "<h1 class='font-popup-ucitavanje'>" + msg + "</h1>", allowOutsideClick: allowOutsideClick});
    swal.showLoading();
  }

  hideLoading(){
    swal.hideLoading();
    swal.close();
  }


  confirmDelete(fnSuccess, fnError){
    swal.fire({
      title: 'Jeste li sigurni?',
      text: 'Podatak će biti trajno obrisan iz sustava!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Da, nastavi!',
      cancelButtonText: 'Ne, odustani!'
    }).then((result) => {
      if (result.value) {
        fnSuccess();
      } else if (result.dismiss === swal.DismissReason.cancel) {
        fnError();
      }
    });
  }

  confirmUpdate(fnSuccess, fnError){
    swal.fire({
      title: 'Spremi?',
      text: "Želite li spremiti izmjenu?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Da, nastavi!',
      cancelButtonText: 'Ne, odustani!'
    }).then((result) => {
      if (result.value) {
        fnSuccess();
      } else if (result.dismiss === swal.DismissReason.cancel) {
        fnError();
      }
    });
  }

}
