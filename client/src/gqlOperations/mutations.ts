import gql from "graphql-tag";

const registerMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            path
            message
        }
    }
`;
