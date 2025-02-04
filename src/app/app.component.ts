import { Component, signal } from '@angular/core';
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
  isLoading = signal(false);


  constructor(public apollo: Apollo, private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  validateEmail(email : string) {
  this.isLoading.set(true)
    this.apollo.query({
      query: GET_SEARCH_VALIDATE_EMAIL_QUERY,
      variables: {email}
    }).subscribe({  next : (res)=> {
      const response = res.data as any;
      const data = Object.values(response)[0] as any;
      if(!data?.error){
        this.response = of(data?.data);
        return ;
      }
      this.errorMessage = data?.response?.message || 'An error occurred while validating the email';

    },
    error : (err) => {
      console.log(err);
      this.errorMessage = err.message || 'An error occurred while validating the email';
    },
    complete : ()=> {
      this.isLoading.set(false)
    }


    });
  }


  verifyEmail(){
    const email = this.emailForm.value.email;
    this.validateEmail(email)


  }
}
