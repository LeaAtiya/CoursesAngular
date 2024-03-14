import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html'
})
export class LogOutComponent implements OnInit {
  name?:string;
  constructor() { }
  ngOnInit(): void {
    this.name=JSON.parse(sessionStorage.getItem('userData')!)?.name;
  }
  logOut() {
    sessionStorage.removeItem('userData');
    Swal.fire("Success","You logged out successfully!!!","success");
  }
}
