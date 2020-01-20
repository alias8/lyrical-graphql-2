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

export type RegisterMutationMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RegisterMutationMutation = (
  { __typename?: 'Mutation' }
  & { register: Maybe<Array<(
    { __typename?: 'Error' }
    & Pick<Error, 'path' | 'message'>
  )>> }
);


export const RegisterMutationDocument = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    path
    message
  }
}
    `;
export type RegisterMutationMutationFn = ApolloReactCommon.MutationFunction<RegisterMutationMutation, RegisterMutationMutationVariables>;
export type RegisterMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutationMutation, RegisterMutationMutationVariables>, 'mutation'>;

    export const RegisterMutationComponent = (props: RegisterMutationComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutationMutation, RegisterMutationMutationVariables> mutation={RegisterMutationDocument} {...props} />
    );
    
export type RegisterMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RegisterMutationMutation, RegisterMutationMutationVariables> & TChildProps;
export function withRegisterMutation<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutationMutation,
  RegisterMutationMutationVariables,
  RegisterMutationProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutationMutation, RegisterMutationMutationVariables, RegisterMutationProps<TChildProps>>(RegisterMutationDocument, {
      alias: 'registerMutation',
      ...operationOptions
    });
};
export type RegisterMutationMutationResult = ApolloReactCommon.MutationResult<RegisterMutationMutation>;
export type RegisterMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutationMutation, RegisterMutationMutationVariables>;