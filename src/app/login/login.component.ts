import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "andrick";
  password = "1234567";
  message:boolean = false;

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(f:any): void {

    console.log(f.username);

    if(f.username == this.username && f.password == this.password){
      this.authService.isAdmin = true;
      this.router.navigate(['/boardmoderator'])

    }
    else {
      this.message = true;
    }

    if(f.username != this.username && f.password != this.password){
      this.authService.isAdmin = false;
      this.router.navigate(['/boardPlayer'])

    }else {
      this.message = true;
    }


    // const { username, password } = this.form;

    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
