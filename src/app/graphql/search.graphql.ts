import { gql } from "apollo-angular"

export const GET_SEARCH_VALIDATE_EMAIL_QUERY = gql`
query SearchIsEmailValid(email:string){
  searchIsEmailValid(email: $email){
    code
        error
        message
        data {
            accept_all
            did_you_mean
            disposable
            domain
            email
            free
            reason
            result
            role
            sendex
            success
            user
        }
  }
}
`
