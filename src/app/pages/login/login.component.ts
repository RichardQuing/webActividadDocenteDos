import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;

  constructor(private userService: UsersService , private formBuilder: FormBuilder,
    private router: Router) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    })
  }


  onClickLogin(): void {
    if (this.form.valid) {
      this.userService.login(this.form.value)
        .then(() => {
          this.router.navigate(['/gorras']);
        })
        .catch(error => console.error('Login error:', error));
    } else {
      console.error('Form is invalid');
    }
  }

  onClickLogout(): void {
    this.userService.logout()
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  onClickLoginWithGoogle(): void {
    this.userService.loginWithGoogle()
    .then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

}
 