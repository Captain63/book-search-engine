import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login($username: String!, $email: String!, $password: String!) {
        login(username: $username, email: $email, password: $password) {
            token
        }
    }  
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($saveBook: BookInput!) {
        saveBook(saveBook: $saveBook) {
            bookCount
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            bookCount
        }
    }
`;