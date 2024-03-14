
import { User } from "./modules/users/user.model";
import { Component, OnInit, } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  currentUser?: User;
  isLecturer?: boolean;
  ngOnInit(): void {
   
  }

  constructor(private _router: Router) { }

  existsUser() {
    const storedData = sessionStorage.getItem('userData');
    if (storedData) {
      this.currentUser = JSON.parse(storedData);
    }
    const storedIsLecturer = sessionStorage.getItem('isLecturer');
    if (storedIsLecturer) {
      this.isLecturer = JSON.parse(storedIsLecturer);
    }
    if (this.isLecturer == false || this.currentUser == null) {

      this._router.navigate(['/login']);
      Swal.fire('Login again!', 'You are not lecturer in the site', 'error');
    }
    else {
      this._router.navigate(['/addCourse']);
    }
  }


}