import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_SEARCH_VALIDATE_EMAIL_QUERY } from './graphql/search.graphql';
import { Observable , of} from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'email-verifier';
  email = '';
  response!: Observable<any>
  errorMessage = '';
  emailForm: FormGroup;


  constructor(public apollo: Apollo, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  validateEmail(email : string) {
    this.apollo.query({
      query: GET_SEARCH_VALIDATE_EMAIL_QUERY,
      variables: { email }
    }).subscribe((res) => {
      const response = res.data as any;
      const data = Object.values(response.data) as any;
      if(!data?.response.error){
        this.response = of(data?.data);
        return ;
      }
      this.errorMessage = data?.response?.message || 'An error occurred while validating the email';


    });
  }


  verifyEmail(){
    if (this.emailForm.invalid) return;
    const email = this.emailForm.value.email;
    this.validateEmail(email)


  }
}
