import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  userIsAuthenticated: boolean = false;
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    //this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProcess()
  {
    if(this.formGroup.valid)
    {
      let username = this.formGroup.get("username")?.value;
      let password = this.formGroup.get("password")?.value;;  
      this._loginService.login(username, password);    
    }
  }

}
