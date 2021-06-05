import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CodeReview = {
  __typename?: "CodeReview";
  id: Scalars["ID"];
  numDays?: Maybe<Scalars["Int"]>;
  codeUrl: Scalars["String"];
  techTags: Array<Scalars["String"]>;
  notes: Scalars["String"];
  ownerId: Scalars["String"];
  owner: User;
};

export type CreateCodeReviewInput = {
  numDays?: Maybe<Scalars["Int"]>;
  codeUrl: Scalars["String"];
  techTags: Array<Scalars["String"]>;
  notes: Scalars["String"];
};

export type CreateCodeReviewResponse = {
  __typename?: "CreateCodeReviewResponse";
  errors?: Maybe<Array<Error>>;
  codeReview?: Maybe<CodeReview>;
};

export type CreateOfferInput = {
  userId: Scalars["String"];
  codeReviewId: Scalars["String"];
};

export type CreateOfferResponse = {
  __typename?: "CreateOfferResponse";
  ok: Scalars["Boolean"];
};

export type Error = {
  __typename?: "Error";
  path: Scalars["String"];
  message: Scalars["String"];
};

export type LoginInput = {
  usernameOrEmail: Scalars["String"];
  password: Scalars["String"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  errors?: Maybe<Array<Error>>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  createCodeReview: CreateCodeReviewResponse;
  createOffer: CreateOfferResponse;
  login: LoginResponse;
  register: RegisterResponse;
};

export type MutationCreateCodeReviewArgs = {
  input: CreateCodeReviewInput;
};

export type MutationCreateOfferArgs = {
  input: CreateOfferInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type Query = {
  __typename?: "Query";
  listCodeReviews: Array<CodeReview>;
  me?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RegisterInput = {
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  errors?: Maybe<Array<Error>>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Scalars["String"];
  email: Scalars["String"];
};

export type CodeReviewInfoFragment = { __typename?: "CodeReview" } & Pick<
  CodeReview,
  "id" | "numDays" | "codeUrl" | "techTags" | "notes"
>;

export type CreateCodeReviewMutationVariables = Exact<{
  input: CreateCodeReviewInput;
}>;

export type CreateCodeReviewMutation = { __typename?: "Mutation" } & {
  createCodeReview: { __typename?: "CreateCodeReviewResponse" } & {
    codeReview?: Maybe<{ __typename?: "CodeReview" } & CodeReviewInfoFragment>;
    errors?: Maybe<
      Array<{ __typename?: "Error" } & Pick<Error, "path" | "message">>
    >;
  };
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "LoginResponse" } & {
    user?: Maybe<
      { __typename?: "User" } & Pick<User, "username" | "email" | "id">
    >;
    errors?: Maybe<
      Array<{ __typename?: "Error" } & Pick<Error, "path" | "message">>
    >;
  };
};

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "RegisterResponse" } & {
    errors?: Maybe<
      Array<{ __typename?: "Error" } & Pick<Error, "path" | "message">>
    >;
  };
};

export type ListCodeReviewsQueryVariables = Exact<{ [key: string]: never }>;

export type ListCodeReviewsQuery = { __typename?: "Query" } & {
  listCodeReviews: Array<
    { __typename?: "CodeReview" } & {
      owner: { __typename?: "User" } & Pick<User, "id" | "email" | "username">;
    } & CodeReviewInfoFragment
  >;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: "Query" } & {
  me?: Maybe<{ __typename?: "User" } & Pick<User, "id" | "username" | "email">>;
};

export const CodeReviewInfoFragmentDoc = gql`
  fragment CodeReviewInfo on CodeReview {
    id
    numDays
    codeUrl
    techTags
    notes
  }
`;
export const CreateCodeReviewDocument = gql`
  mutation CreateCodeReview($input: CreateCodeReviewInput!) {
    createCodeReview(input: $input) {
      codeReview {
        ...CodeReviewInfo
      }
      errors {
        path
        message
      }
    }
  }
  ${CodeReviewInfoFragmentDoc}
`;
export type CreateCodeReviewMutationFn = Apollo.MutationFunction<
  CreateCodeReviewMutation,
  CreateCodeReviewMutationVariables
>;

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
export function useCreateCodeReviewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCodeReviewMutation,
    CreateCodeReviewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCodeReviewMutation,
    CreateCodeReviewMutationVariables
  >(CreateCodeReviewDocument, options);
}
export type CreateCodeReviewMutationHookResult = ReturnType<
  typeof useCreateCodeReviewMutation
>;
export type CreateCodeReviewMutationResult =
  Apollo.MutationResult<CreateCodeReviewMutation>;
export type CreateCodeReviewMutationOptions = Apollo.BaseMutationOptions<
  CreateCodeReviewMutation,
  CreateCodeReviewMutationVariables
>;
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      user {
        username
        email
        id
      }
      errors {
        path
        message
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

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
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      errors {
        path
        message
      }
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

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
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const ListCodeReviewsDocument = gql`
  query ListCodeReviews {
    listCodeReviews {
      ...CodeReviewInfo
      owner {
        id
        email
        username
      }
    }
  }
  ${CodeReviewInfoFragmentDoc}
`;

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
export function useListCodeReviewsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListCodeReviewsQuery,
    ListCodeReviewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ListCodeReviewsQuery, ListCodeReviewsQueryVariables>(
    ListCodeReviewsDocument,
    options
  );
}
export function useListCodeReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListCodeReviewsQuery,
    ListCodeReviewsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    ListCodeReviewsQuery,
    ListCodeReviewsQueryVariables
  >(ListCodeReviewsDocument, options);
}
export type ListCodeReviewsQueryHookResult = ReturnType<
  typeof useListCodeReviewsQuery
>;
export type ListCodeReviewsLazyQueryHookResult = ReturnType<
  typeof useListCodeReviewsLazyQuery
>;
export type ListCodeReviewsQueryResult = Apollo.QueryResult<
  ListCodeReviewsQuery,
  ListCodeReviewsQueryVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      id
      username
      email
    }
  }
`;

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
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
