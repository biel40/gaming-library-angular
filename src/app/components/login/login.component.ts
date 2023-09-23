import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  public displayErrorMessage: boolean = false;
  public user: any;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new ErrorStateMatcher();

  public signInForm = this.formBuilder.group({
    email: '',
    password: ''
  })

  constructor(
    // private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async handleLogin(): Promise<void> {
    try {
      const email = this.signInForm.value.email as string;
      const password = this.signInForm.value.password as string;

      //TODO: Implement Login
      this.router.navigate(['main']);

    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
    }
  }
}
