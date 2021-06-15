import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../../src/context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CodeReview: ResolverTypeWrapper<CodeReview>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateCodeReviewInput: CreateCodeReviewInput;
  CreateCodeReviewResponse: ResolverTypeWrapper<CreateCodeReviewResponse>;
  CreateOfferInput: CreateOfferInput;
  CreateOfferResponse: ResolverTypeWrapper<CreateOfferResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Error: ResolverTypeWrapper<Error>;
  LoginInput: LoginInput;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Offer: ResolverTypeWrapper<Offer>;
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
  UpdateOfferStatusInput: UpdateOfferStatusInput;
  UpdateOfferStatusResponse: ResolverTypeWrapper<UpdateOfferStatusResponse>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CodeReview: CodeReview;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  String: Scalars['String'];
  CreateCodeReviewInput: CreateCodeReviewInput;
  CreateCodeReviewResponse: CreateCodeReviewResponse;
  CreateOfferInput: CreateOfferInput;
  CreateOfferResponse: CreateOfferResponse;
  Boolean: Scalars['Boolean'];
  Error: Error;
  LoginInput: LoginInput;
  LoginResponse: LoginResponse;
  Mutation: {};
  Offer: Offer;
  Query: {};
  RegisterInput: RegisterInput;
  RegisterResponse: RegisterResponse;
  UpdateOfferStatusInput: UpdateOfferStatusInput;
  UpdateOfferStatusResponse: UpdateOfferStatusResponse;
  User: User;
};

export type CodeReviewResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CodeReview'] = ResolversParentTypes['CodeReview']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numDays?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  codeUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  techTags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  notes?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCodeReviewResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CreateCodeReviewResponse'] = ResolversParentTypes['CreateCodeReviewResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  codeReview?: Resolver<Maybe<ResolversTypes['CodeReview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOfferResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['CreateOfferResponse'] = ResolversParentTypes['CreateOfferResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCodeReview?: Resolver<ResolversTypes['CreateCodeReviewResponse'], ParentType, ContextType, RequireFields<MutationCreateCodeReviewArgs, 'input'>>;
  createOffer?: Resolver<ResolversTypes['CreateOfferResponse'], ParentType, ContextType, RequireFields<MutationCreateOfferArgs, 'input'>>;
  updateOfferStatus?: Resolver<ResolversTypes['UpdateOfferStatusResponse'], ParentType, ContextType, RequireFields<MutationUpdateOfferStatusArgs, 'input'>>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  register?: Resolver<ResolversTypes['RegisterResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
};

export type OfferResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = {
  codeReviewId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  codeReview?: Resolver<ResolversTypes['CodeReview'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  listCodeReviews?: Resolver<Array<ResolversTypes['CodeReview']>, ParentType, ContextType>;
  myOffers?: Resolver<Array<ResolversTypes['Offer']>, ParentType, ContextType>;
  receivedOffers?: Resolver<Array<ResolversTypes['Offer']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
};

export type RegisterResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOfferStatusResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UpdateOfferStatusResponse'] = ResolversParentTypes['UpdateOfferStatusResponse']> = {
  offer?: Resolver<Maybe<ResolversTypes['Offer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = MyContext> = {
  CodeReview?: CodeReviewResolvers<ContextType>;
  CreateCodeReviewResponse?: CreateCodeReviewResponseResolvers<ContextType>;
  CreateOfferResponse?: CreateOfferResponseResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Offer?: OfferResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  UpdateOfferStatusResponse?: UpdateOfferStatusResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
