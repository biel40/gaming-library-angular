import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { SupabaseService } from 'src/app/services/supabase/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading = false;
  public displayErrorMessage: boolean = false;
  public user: any;
 
  public email: string = "";
  public password: string = "";
 
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly formBuilder: FormBuilder,
    private router: Router,
    private loaderService: LoaderService
  ) {
    
  }

  ngOnInit(): void {
  
  }

  async handleLogin(): Promise<void> {
    try {
      const email = this.email;
      const password = this.password;

      console.log("Email: " + email);
      console.log("Password: " + password);

      this.loaderService.setLoading(true);

      let response = await this.supabaseService.signInWithPassword(email, password);

      if (response.error) {
        throw new Error(response.error.message);
      } else {
        this.router.navigate(['main']);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loaderService.setLoading(false);
    }
  }

  async handleSignUp(): Promise<void> {
    try {
      const email = this.email;
      const password = this.password;

      this.loaderService.setLoading(true);

      let response = await this.supabaseService.signUp(email, password);
      
      alert("User created successfully! Try to login.");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally{
      this.loaderService.setLoading(false);
    }
  }
}
