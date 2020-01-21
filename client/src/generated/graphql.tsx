/* tslint:disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Error = {
   __typename?: 'Error',
  path: Scalars['String'],
  message: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  sendForgotPasswordEmail?: Maybe<Scalars['Boolean']>,
  forgotPasswordChange?: Maybe<Array<Error>>,
  login?: Maybe<Array<Error>>,
  logout?: Maybe<Scalars['Boolean']>,
  register?: Maybe<Array<Error>>,
};


export type MutationSendForgotPasswordEmailArgs = {
  email: Scalars['String']
};


export type MutationForgotPasswordChangeArgs = {
  newPassword: Scalars['String'],
  key: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationRegisterArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
   __typename?: 'Query',
  me?: Maybe<User>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
};

export type RegisterMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: Maybe<Array<(
    { __typename?: 'Error' }
    & Pick<Error, 'path' | 'message'>
  )>> }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type GetMeQueryVariables = {};


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);


export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    path
    message
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RegisterMutation, RegisterMutationVariables> & TChildProps;
export function withRegister<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    
export type LogoutProps<TChildProps = {}> = ApolloReactHoc.MutateProps<LogoutMutation, LogoutMutationVariables> & TChildProps;
export function withLogout<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps>>(LogoutDocument, {
      alias: 'logout',
      ...operationOptions
    });
};
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    email
  }
}
    `;
export type GetMeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMeQuery, GetMeQueryVariables>, 'query'>;

    export const GetMeComponent = (props: GetMeComponentProps) => (
      <ApolloReactComponents.Query<GetMeQuery, GetMeQueryVariables> query={GetMeDocument} {...props} />
    );
    
export type GetMeProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetMeQuery, GetMeQueryVariables> & TChildProps;
export function withGetMe<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetMeQuery,
  GetMeQueryVariables,
  GetMeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetMeQuery, GetMeQueryVariables, GetMeProps<TChildProps>>(GetMeDocument, {
      alias: 'getMe',
      ...operationOptions
    });
};
export type GetMeQueryResult = ApolloReactCommon.QueryResult<GetMeQuery, GetMeQueryVariables>;