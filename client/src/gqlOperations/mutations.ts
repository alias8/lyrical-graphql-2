import gql from "graphql-tag";

const registerMutation = gql`
    mutation Register($email: String!, $password: String!) {
        register(email: $email, password: $password) {
            path
            message
        }
    }
`;

const logoutMutation = gql`
    mutation Logout {
        logout
    }
`;

