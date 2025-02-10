import { Component, signal } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { GET_SEARCH_VALIDATE_EMAIL_QUERY } from '../../graphql/search.graphql';

@Component({
  selector: 'app-email-verifier',
  templateUrl: './email-verifier.component.html',
  styleUrl: './email-verifier.component.scss'
})
export class EmailVerifierComponent {
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
      this.isLoading.set(false)
      this.errorMessage = "server not responding properly try again"
    },
    complete : ()=> {
      console.log("is stoping")
      this.isLoading.set(false)
    },


    });
  }


  verifyEmail(){
    this.errorMessage = '';
    const email = this.emailForm.value.email;
    this.validateEmail(email)


  }
}
