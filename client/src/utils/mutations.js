import { gql } from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }`;
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
          
          token
          user {
            _id
            username
            email
            bookCount
            savedBooks {
              authors
              bookId
              image
              link
              title
              description
            }
        }
        }
      }`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: SavedBookInput!) {
        saveBook (book: $input)
            {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    authors
                    image
                    link
                    title
                    description
                }
            }
        }`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }`;
