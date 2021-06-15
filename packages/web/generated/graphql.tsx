import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CodeReview = {
  __typename?: 'CodeReview';
  id: Scalars['ID'];
  numDays?: Maybe<Scalars['Int']>;
  codeUrl: Scalars['String'];
  techTags: Array<Scalars['String']>;
  notes: Scalars['String'];
  ownerId: Scalars['String'];
  owner: User;
};

export type CreateCodeReviewInput = {
  numDays?: Maybe<Scalars['Int']>;
  codeUrl: Scalars['String'];
  techTags: Array<Scalars['String']>;
  notes: Scalars['String'];
};

export type CreateCodeReviewResponse = {
  __typename?: 'CreateCodeReviewResponse';
  errors?: Maybe<Array<Error>>;
  codeReview?: Maybe<CodeReview>;
};

export type CreateOfferInput = {
  userId: Scalars['String'];
  codeReviewId: Scalars['String'];
};

export type CreateOfferResponse = {
  __typename?: 'CreateOfferResponse';
  ok: Scalars['Boolean'];
};

export type Error = {
  __typename?: 'Error';
  path: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCodeReview: CreateCodeReviewResponse;
  createOffer: CreateOfferResponse;
  updateOfferStatus: UpdateOfferStatusResponse;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: RegisterResponse;
};


export type MutationCreateCodeReviewArgs = {
  input: CreateCodeReviewInput;
};


export type MutationCreateOfferArgs = {
  input: CreateOfferInput;
};


export type MutationUpdateOfferStatusArgs = {
  input: UpdateOfferStatusInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type Offer = {
  __typename?: 'Offer';
  codeReviewId: Scalars['String'];
  userId: Scalars['String'];
  codeReview: CodeReview;
  sender: User;
  status: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  listCodeReviews: Array<CodeReview>;
  myOffers: Array<Offer>;
  receivedOffers: Array<Offer>;
  me?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  errors?: Maybe<Array<Error>>;
};

export type UpdateOfferStatusInput = {
  userId: Scalars['String'];
  codeReviewId: Scalars['String'];
  status: Scalars['String'];
};

export type UpdateOfferStatusResponse = {
  __typename?: 'UpdateOfferStatusResponse';
  offer?: Maybe<Offer>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type CodeReviewInfoFragment = (
  { __typename?: 'CodeReview' }
  & Pick<CodeReview, 'id' | 'numDays' | 'codeUrl' | 'techTags' | 'notes'>
);

export type ErrorInfoFragment = (
  { __typename?: 'Error' }
  & Pick<Error, 'path' | 'message'>
);

export type OfferFragmentFragment = (
  { __typename?: 'Offer' }
  & Pick<Offer, 'userId' | 'status' | 'codeReviewId'>
  & { codeReview: (
    { __typename?: 'CodeReview' }
    & CodeReviewInfoFragment
  ), sender: (
    { __typename?: 'User' }
    & UserInfoFragment
  ) }
);

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email'>
);

export type CreateCodeReviewMutationVariables = Exact<{
  input: CreateCodeReviewInput;
}>;


export type CreateCodeReviewMutation = (
  { __typename?: 'Mutation' }
  & { createCodeReview: (
    { __typename?: 'CreateCodeReviewResponse' }
    & { codeReview?: Maybe<(
      { __typename?: 'CodeReview' }
      & CodeReviewInfoFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorInfoFragment
    )>> }
  ) }
);

export type CreateOfferMutationVariables = Exact<{
  input: CreateOfferInput;
}>;


export type CreateOfferMutation = (
  { __typename?: 'Mutation' }
  & { createOffer: (
    { __typename?: 'CreateOfferResponse' }
    & Pick<CreateOfferResponse, 'ok'>
  ) }
);

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserInfoFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorInfoFragment
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'Error' }
      & ErrorInfoFragment
    )>> }
  ) }
);

export type UpdateOfferStatusMutationVariables = Exact<{
  input: UpdateOfferStatusInput;
}>;


export type UpdateOfferStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateOfferStatus: (
    { __typename?: 'UpdateOfferStatusResponse' }
    & { offer?: Maybe<(
      { __typename?: 'Offer' }
      & OfferFragmentFragment
    )> }
  ) }
);

export type ListCodeReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCodeReviewsQuery = (
  { __typename?: 'Query' }
  & { listCodeReviews: Array<(
    { __typename?: 'CodeReview' }
    & Pick<CodeReview, 'ownerId'>
    & { owner: (
      { __typename?: 'User' }
      & UserInfoFragment
    ) }
    & CodeReviewInfoFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserInfoFragment
  )> }
);

export type ReceivedOffersQueryVariables = Exact<{ [key: string]: never; }>;


export type ReceivedOffersQuery = (
  { __typename?: 'Query' }
  & { receivedOffers: Array<(
    { __typename?: 'Offer' }
    & OfferFragmentFragment
  )>, myOffers: Array<(
    { __typename?: 'Offer' }
    & OfferFragmentFragment
  )> }
);

export const ErrorInfoFragmentDoc = gql`
    fragment ErrorInfo on Error {
  path
  message
}
    `;
export const CodeReviewInfoFragmentDoc = gql`
    fragment CodeReviewInfo on CodeReview {
  id
  numDays
  codeUrl
  techTags
  notes
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  username
  email
}
    `;
export const OfferFragmentFragmentDoc = gql`
    fragment OfferFragment on Offer {
  codeReview {
    ...CodeReviewInfo
  }
  sender {
    ...UserInfo
  }
  userId
  status
  codeReviewId
}
    ${CodeReviewInfoFragmentDoc}
${UserInfoFragmentDoc}`;
export const CreateCodeReviewDocument = gql`
    mutation CreateCodeReview($input: CreateCodeReviewInput!) {
  createCodeReview(input: $input) {
    codeReview {
      ...CodeReviewInfo
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${CodeReviewInfoFragmentDoc}
${ErrorInfoFragmentDoc}`;
export type CreateCodeReviewMutationFn = Apollo.MutationFunction<CreateCodeReviewMutation, CreateCodeReviewMutationVariables>;

/**
 * __useCreateCodeReviewMutation__
 *
 * To run a mutation, you first call `useCreateCodeReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCodeReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCodeReviewMutation, { data, loading, error }] = useCreateCodeReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCodeReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateCodeReviewMutation, CreateCodeReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCodeReviewMutation, CreateCodeReviewMutationVariables>(CreateCodeReviewDocument, options);
      }
export type CreateCodeReviewMutationHookResult = ReturnType<typeof useCreateCodeReviewMutation>;
export type CreateCodeReviewMutationResult = Apollo.MutationResult<CreateCodeReviewMutation>;
export type CreateCodeReviewMutationOptions = Apollo.BaseMutationOptions<CreateCodeReviewMutation, CreateCodeReviewMutationVariables>;
export const CreateOfferDocument = gql`
    mutation CreateOffer($input: CreateOfferInput!) {
  createOffer(input: $input) {
    ok
  }
}
    `;
export type CreateOfferMutationFn = Apollo.MutationFunction<CreateOfferMutation, CreateOfferMutationVariables>;

/**
 * __useCreateOfferMutation__
 *
 * To run a mutation, you first call `useCreateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfferMutation, { data, loading, error }] = useCreateOfferMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOfferMutation(baseOptions?: Apollo.MutationHookOptions<CreateOfferMutation, CreateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOfferMutation, CreateOfferMutationVariables>(CreateOfferDocument, options);
      }
export type CreateOfferMutationHookResult = ReturnType<typeof useCreateOfferMutation>;
export type CreateOfferMutationResult = Apollo.MutationResult<CreateOfferMutation>;
export type CreateOfferMutationOptions = Apollo.BaseMutationOptions<CreateOfferMutation, CreateOfferMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    user {
      ...UserInfo
    }
    errors {
      ...ErrorInfo
    }
  }
}
    ${UserInfoFragmentDoc}
${ErrorInfoFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    errors {
      ...ErrorInfo
    }
  }
}
    ${ErrorInfoFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateOfferStatusDocument = gql`
    mutation UpdateOfferStatus($input: UpdateOfferStatusInput!) {
  updateOfferStatus(input: $input) {
    offer {
      ...OfferFragment
    }
  }
}
    ${OfferFragmentFragmentDoc}`;
export type UpdateOfferStatusMutationFn = Apollo.MutationFunction<UpdateOfferStatusMutation, UpdateOfferStatusMutationVariables>;

/**
 * __useUpdateOfferStatusMutation__
 *
 * To run a mutation, you first call `useUpdateOfferStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOfferStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOfferStatusMutation, { data, loading, error }] = useUpdateOfferStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOfferStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOfferStatusMutation, UpdateOfferStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOfferStatusMutation, UpdateOfferStatusMutationVariables>(UpdateOfferStatusDocument, options);
      }
export type UpdateOfferStatusMutationHookResult = ReturnType<typeof useUpdateOfferStatusMutation>;
export type UpdateOfferStatusMutationResult = Apollo.MutationResult<UpdateOfferStatusMutation>;
export type UpdateOfferStatusMutationOptions = Apollo.BaseMutationOptions<UpdateOfferStatusMutation, UpdateOfferStatusMutationVariables>;
export const ListCodeReviewsDocument = gql`
    query ListCodeReviews {
  listCodeReviews {
    ...CodeReviewInfo
    ownerId
    owner {
      ...UserInfo
    }
  }
}
    ${CodeReviewInfoFragmentDoc}
${UserInfoFragmentDoc}`;

/**
 * __useListCodeReviewsQuery__
 *
 * To run a query within a React component, call `useListCodeReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCodeReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCodeReviewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCodeReviewsQuery(baseOptions?: Apollo.QueryHookOptions<ListCodeReviewsQuery, ListCodeReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCodeReviewsQuery, ListCodeReviewsQueryVariables>(ListCodeReviewsDocument, options);
      }
export function useListCodeReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCodeReviewsQuery, ListCodeReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCodeReviewsQuery, ListCodeReviewsQueryVariables>(ListCodeReviewsDocument, options);
        }
export type ListCodeReviewsQueryHookResult = ReturnType<typeof useListCodeReviewsQuery>;
export type ListCodeReviewsLazyQueryHookResult = ReturnType<typeof useListCodeReviewsLazyQuery>;
export type ListCodeReviewsQueryResult = Apollo.QueryResult<ListCodeReviewsQuery, ListCodeReviewsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ReceivedOffersDocument = gql`
    query ReceivedOffers {
  receivedOffers {
    ...OfferFragment
  }
  myOffers {
    ...OfferFragment
  }
}
    ${OfferFragmentFragmentDoc}`;

/**
 * __useReceivedOffersQuery__
 *
 * To run a query within a React component, call `useReceivedOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useReceivedOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReceivedOffersQuery({
 *   variables: {
 *   },
 * });
 */
export function useReceivedOffersQuery(baseOptions?: Apollo.QueryHookOptions<ReceivedOffersQuery, ReceivedOffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReceivedOffersQuery, ReceivedOffersQueryVariables>(ReceivedOffersDocument, options);
      }
export function useReceivedOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReceivedOffersQuery, ReceivedOffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReceivedOffersQuery, ReceivedOffersQueryVariables>(ReceivedOffersDocument, options);
        }
export type ReceivedOffersQueryHookResult = ReturnType<typeof useReceivedOffersQuery>;
export type ReceivedOffersLazyQueryHookResult = ReturnType<typeof useReceivedOffersLazyQuery>;
export type ReceivedOffersQueryResult = Apollo.QueryResult<ReceivedOffersQuery, ReceivedOffersQueryVariables>;