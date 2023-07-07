
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = {
  id: string
  localId: string | null
  chatIds: string[]
  claimedItemIds: string[]
  postedItemIds: string[]
  name: string
  email: string
  bio: string | null
  profilePic: string | null
  address: string | null
  itemsClaimed: number
  itemsSuccessClaimed: number
  blocked: string[]
}

/**
 * Model Chat
 * 
 */
export type Chat = {
  id: string
  userIds: string[]
}

/**
 * Model Message
 * 
 */
export type Message = {
  id: string
  chatId: string
  content: string
  photo: string | null
  sentAt: Date
  sender: string
}

/**
 * Model Item
 * 
 */
export type Item = {
  id: string
  name: string
  category: string | null
  description: string
  timeOwned: Date | null
  features: string[]
  postedAt: Date
  photos: string[]
  address: string
  lat: number | null
  lng: number | null
  pickup: boolean
  shipping: boolean
  status: string
  posterId: string
  claimerId: string | null
}

/**
 * Model ph
 * 
 */
export type ph = {
  id: string
  name: string
}

/**
 * Model Test
 * 
 */
export type Test = {
  id: string
  content: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number }): Promise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<GlobalReject>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<GlobalReject>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<GlobalReject>;

  /**
   * `prisma.ph`: Exposes CRUD operations for the **ph** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phs
    * const phs = await prisma.ph.findMany()
    * ```
    */
  get ph(): Prisma.phDelegate<GlobalReject>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Chat: 'Chat',
    Message: 'Message',
    Item: 'Item',
    ph: 'ph',
    Test: 'Test'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    chats: number
    postedItems: number
    claimedItems: number
  }

  export type UserCountOutputTypeSelect = {
    chats?: boolean | UserCountOutputTypeCountChatsArgs
    postedItems?: boolean | UserCountOutputTypeCountPostedItemsArgs
    claimedItems?: boolean | UserCountOutputTypeCountClaimedItemsArgs
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatsArgs = {
    where?: ChatWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostedItemsArgs = {
    where?: ItemWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClaimedItemsArgs = {
    where?: ItemWhereInput
  }



  /**
   * Count Type ChatCountOutputType
   */


  export type ChatCountOutputType = {
    users: number
    messages: number
  }

  export type ChatCountOutputTypeSelect = {
    users?: boolean | ChatCountOutputTypeCountUsersArgs
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  export type ChatCountOutputTypeGetPayload<S extends boolean | null | undefined | ChatCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ChatCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ChatCountOutputTypeArgs)
    ? ChatCountOutputType 
    : S extends { select: any } & (ChatCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ChatCountOutputType ? ChatCountOutputType[P] : never
  } 
      : ChatCountOutputType




  // Custom InputTypes

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect | null
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountUsersArgs = {
    where?: UserWhereInput
  }


  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs = {
    where?: MessageWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    itemsClaimed: number | null
    itemsSuccessClaimed: number | null
  }

  export type UserSumAggregateOutputType = {
    itemsClaimed: number | null
    itemsSuccessClaimed: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    localId: string | null
    name: string | null
    email: string | null
    bio: string | null
    profilePic: string | null
    address: string | null
    itemsClaimed: number | null
    itemsSuccessClaimed: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    localId: string | null
    name: string | null
    email: string | null
    bio: string | null
    profilePic: string | null
    address: string | null
    itemsClaimed: number | null
    itemsSuccessClaimed: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    localId: number
    chatIds: number
    claimedItemIds: number
    postedItemIds: number
    name: number
    email: number
    bio: number
    profilePic: number
    address: number
    itemsClaimed: number
    itemsSuccessClaimed: number
    blocked: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    itemsClaimed?: true
    itemsSuccessClaimed?: true
  }

  export type UserSumAggregateInputType = {
    itemsClaimed?: true
    itemsSuccessClaimed?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    localId?: true
    name?: true
    email?: true
    bio?: true
    profilePic?: true
    address?: true
    itemsClaimed?: true
    itemsSuccessClaimed?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    localId?: true
    name?: true
    email?: true
    bio?: true
    profilePic?: true
    address?: true
    itemsClaimed?: true
    itemsSuccessClaimed?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    localId?: true
    chatIds?: true
    claimedItemIds?: true
    postedItemIds?: true
    name?: true
    email?: true
    bio?: true
    profilePic?: true
    address?: true
    itemsClaimed?: true
    itemsSuccessClaimed?: true
    blocked?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    localId: string | null
    chatIds: string[]
    claimedItemIds: string[]
    postedItemIds: string[]
    name: string
    email: string
    bio: string | null
    profilePic: string | null
    address: string | null
    itemsClaimed: number
    itemsSuccessClaimed: number
    blocked: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    localId?: boolean
    chatIds?: boolean
    claimedItemIds?: boolean
    postedItemIds?: boolean
    name?: boolean
    email?: boolean
    bio?: boolean
    profilePic?: boolean
    address?: boolean
    itemsClaimed?: boolean
    itemsSuccessClaimed?: boolean
    blocked?: boolean
    chats?: boolean | User$chatsArgs
    postedItems?: boolean | User$postedItemsArgs
    claimedItems?: boolean | User$claimedItemsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    chats?: boolean | User$chatsArgs
    postedItems?: boolean | User$postedItemsArgs
    claimedItems?: boolean | User$claimedItemsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chats' ? Array < ChatGetPayload<S['include'][P]>>  :
        P extends 'postedItems' ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends 'claimedItems' ? Array < ItemGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chats' ? Array < ChatGetPayload<S['select'][P]>>  :
        P extends 'postedItems' ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends 'claimedItems' ? Array < ItemGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    chats<T extends User$chatsArgs= {}>(args?: Subset<T, User$chatsArgs>): Prisma.PrismaPromise<Array<ChatGetPayload<T>>| Null>;

    postedItems<T extends User$postedItemsArgs= {}>(args?: Subset<T, User$postedItemsArgs>): Prisma.PrismaPromise<Array<ItemGetPayload<T>>| Null>;

    claimedItems<T extends User$claimedItemsArgs= {}>(args?: Subset<T, User$claimedItemsArgs>): Prisma.PrismaPromise<Array<ItemGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.chats
   */
  export type User$chatsArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    where?: ChatWhereInput
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChatScalarFieldEnum>
  }


  /**
   * User.postedItems
   */
  export type User$postedItemsArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    where?: ItemWhereInput
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * User.claimedItems
   */
  export type User$claimedItemsArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    where?: ItemWhereInput
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Chat
   */


  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userIds: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userIds?: true
    _all?: true
  }

  export type ChatAggregateArgs = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs = {
    where?: ChatWhereInput
    orderBy?: Enumerable<ChatOrderByWithAggregationInput>
    by: ChatScalarFieldEnum[]
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }


  export type ChatGroupByOutputType = {
    id: string
    userIds: string[]
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect = {
    id?: boolean
    userIds?: boolean
    users?: boolean | Chat$usersArgs
    messages?: boolean | Chat$messagesArgs
    _count?: boolean | ChatCountOutputTypeArgs
  }


  export type ChatInclude = {
    users?: boolean | Chat$usersArgs
    messages?: boolean | Chat$messagesArgs
    _count?: boolean | ChatCountOutputTypeArgs
  }

  export type ChatGetPayload<S extends boolean | null | undefined | ChatArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Chat :
    S extends undefined ? never :
    S extends { include: any } & (ChatArgs | ChatFindManyArgs)
    ? Chat  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'messages' ? Array < MessageGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChatCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChatArgs | ChatFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'messages' ? Array < MessageGetPayload<S['select'][P]>>  :
        P extends '_count' ? ChatCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Chat ? Chat[P] : never
  } 
      : Chat


  type ChatCountArgs = 
    Omit<ChatFindManyArgs, 'select' | 'include'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChatFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Chat'> extends True ? Prisma__ChatClient<ChatGetPayload<T>> : Prisma__ChatClient<ChatGetPayload<T> | null, null>

    /**
     * Find one Chat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChatFindUniqueOrThrowArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChatFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Chat'> extends True ? Prisma__ChatClient<ChatGetPayload<T>> : Prisma__ChatClient<ChatGetPayload<T> | null, null>

    /**
     * Find the first Chat that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChatFindFirstOrThrowArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatFindManyArgs>(
      args?: SelectSubset<T, ChatFindManyArgs>
    ): Prisma.PrismaPromise<Array<ChatGetPayload<T>>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
    **/
    create<T extends ChatCreateArgs>(
      args: SelectSubset<T, ChatCreateArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Create many Chats.
     *     @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     *     @example
     *     // Create many Chats
     *     const chat = await prisma.chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatCreateManyArgs>(
      args?: SelectSubset<T, ChatCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
    **/
    delete<T extends ChatDeleteArgs>(
      args: SelectSubset<T, ChatDeleteArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatUpdateArgs>(
      args: SelectSubset<T, ChatUpdateArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatDeleteManyArgs>(
      args?: SelectSubset<T, ChatDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatUpdateManyArgs>(
      args: SelectSubset<T, ChatUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
    **/
    upsert<T extends ChatUpsertArgs>(
      args: SelectSubset<T, ChatUpsertArgs>
    ): Prisma__ChatClient<ChatGetPayload<T>>

    /**
     * Find zero or more Chats that matches the filter.
     * @param {ChatFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chat = await prisma.chat.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Chat.
     * @param {ChatAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chat = await prisma.chat.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChatClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends Chat$usersArgs= {}>(args?: Subset<T, Chat$usersArgs>): Prisma.PrismaPromise<Array<UserGetPayload<T>>| Null>;

    messages<T extends Chat$messagesArgs= {}>(args?: Subset<T, Chat$messagesArgs>): Prisma.PrismaPromise<Array<MessageGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Chat base type for findUnique actions
   */
  export type ChatFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUnique
   */
  export interface ChatFindUniqueArgs extends ChatFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat base type for findFirst actions
   */
  export type ChatFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: Enumerable<ChatScalarFieldEnum>
  }

  /**
   * Chat findFirst
   */
  export interface ChatFindFirstArgs extends ChatFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: Enumerable<ChatScalarFieldEnum>
  }


  /**
   * Chat findMany
   */
  export type ChatFindManyArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: Enumerable<ChatOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: Enumerable<ChatScalarFieldEnum>
  }


  /**
   * Chat create
   */
  export type ChatCreateArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * The data needed to create a Chat.
     */
    data?: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }


  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs = {
    /**
     * The data used to create many Chats.
     */
    data: Enumerable<ChatCreateManyInput>
  }


  /**
   * Chat update
   */
  export type ChatUpdateArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
  }


  /**
   * Chat upsert
   */
  export type ChatUpsertArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }


  /**
   * Chat delete
   */
  export type ChatDeleteArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }


  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
  }


  /**
   * Chat findRaw
   */
  export type ChatFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Chat aggregateRaw
   */
  export type ChatAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Chat.users
   */
  export type Chat$usersArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * Chat.messages
   */
  export type Chat$messagesArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Chat without action
   */
  export type ChatArgs = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatInclude | null
  }



  /**
   * Model Message
   */


  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    content: string | null
    photo: string | null
    sentAt: Date | null
    sender: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    content: string | null
    photo: string | null
    sentAt: Date | null
    sender: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    content: number
    photo: number
    sentAt: number
    sender: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    content?: true
    photo?: true
    sentAt?: true
    sender?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    content?: true
    photo?: true
    sentAt?: true
    sender?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    content?: true
    photo?: true
    sentAt?: true
    sender?: true
    _all?: true
  }

  export type MessageAggregateArgs = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs = {
    where?: MessageWhereInput
    orderBy?: Enumerable<MessageOrderByWithAggregationInput>
    by: MessageScalarFieldEnum[]
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }


  export type MessageGroupByOutputType = {
    id: string
    chatId: string
    content: string
    photo: string | null
    sentAt: Date
    sender: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect = {
    id?: boolean
    chatId?: boolean
    content?: boolean
    photo?: boolean
    sentAt?: boolean
    sender?: boolean
    chat?: boolean | ChatArgs
  }


  export type MessageInclude = {
    chat?: boolean | ChatArgs
  }

  export type MessageGetPayload<S extends boolean | null | undefined | MessageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Message :
    S extends undefined ? never :
    S extends { include: any } & (MessageArgs | MessageFindManyArgs)
    ? Message  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'chat' ? ChatGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MessageArgs | MessageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'chat' ? ChatGetPayload<S['select'][P]> :  P extends keyof Message ? Message[P] : never
  } 
      : Message


  type MessageCountArgs = 
    Omit<MessageFindManyArgs, 'select' | 'include'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MessageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find one Message that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MessageFindUniqueOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MessageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Message'> extends True ? Prisma__MessageClient<MessageGetPayload<T>> : Prisma__MessageClient<MessageGetPayload<T> | null, null>

    /**
     * Find the first Message that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MessageFindFirstOrThrowArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageFindManyArgs>(
      args?: SelectSubset<T, MessageFindManyArgs>
    ): Prisma.PrismaPromise<Array<MessageGetPayload<T>>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
    **/
    create<T extends MessageCreateArgs>(
      args: SelectSubset<T, MessageCreateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Create many Messages.
     *     @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     *     @example
     *     // Create many Messages
     *     const message = await prisma.message.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageCreateManyArgs>(
      args?: SelectSubset<T, MessageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
    **/
    delete<T extends MessageDeleteArgs>(
      args: SelectSubset<T, MessageDeleteArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageUpdateArgs>(
      args: SelectSubset<T, MessageUpdateArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageDeleteManyArgs>(
      args?: SelectSubset<T, MessageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageUpdateManyArgs>(
      args: SelectSubset<T, MessageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
    **/
    upsert<T extends MessageUpsertArgs>(
      args: SelectSubset<T, MessageUpsertArgs>
    ): Prisma__MessageClient<MessageGetPayload<T>>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MessageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MessageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MessageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    chat<T extends ChatArgs= {}>(args?: Subset<T, ChatArgs>): Prisma__ChatClient<ChatGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Message base type for findUnique actions
   */
  export type MessageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUnique
   */
  export interface MessageFindUniqueArgs extends MessageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message base type for findFirst actions
   */
  export type MessageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }

  /**
   * Message findFirst
   */
  export interface MessageFindFirstArgs extends MessageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message findMany
   */
  export type MessageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: Enumerable<MessageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: Enumerable<MessageScalarFieldEnum>
  }


  /**
   * Message create
   */
  export type MessageCreateArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }


  /**
   * Message createMany
   */
  export type MessageCreateManyArgs = {
    /**
     * The data used to create many Messages.
     */
    data: Enumerable<MessageCreateManyInput>
  }


  /**
   * Message update
   */
  export type MessageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }


  /**
   * Message upsert
   */
  export type MessageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }


  /**
   * Message delete
   */
  export type MessageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }


  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }


  /**
   * Message findRaw
   */
  export type MessageFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Message without action
   */
  export type MessageArgs = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageInclude | null
  }



  /**
   * Model Item
   */


  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type ItemSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    timeOwned: Date | null
    postedAt: Date | null
    address: string | null
    lat: number | null
    lng: number | null
    pickup: boolean | null
    shipping: boolean | null
    status: string | null
    posterId: string | null
    claimerId: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    description: string | null
    timeOwned: Date | null
    postedAt: Date | null
    address: string | null
    lat: number | null
    lng: number | null
    pickup: boolean | null
    shipping: boolean | null
    status: string | null
    posterId: string | null
    claimerId: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    description: number
    timeOwned: number
    features: number
    postedAt: number
    photos: number
    address: number
    lat: number
    lng: number
    pickup: number
    shipping: number
    status: number
    posterId: number
    claimerId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type ItemSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    timeOwned?: true
    postedAt?: true
    address?: true
    lat?: true
    lng?: true
    pickup?: true
    shipping?: true
    status?: true
    posterId?: true
    claimerId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    timeOwned?: true
    postedAt?: true
    address?: true
    lat?: true
    lng?: true
    pickup?: true
    shipping?: true
    status?: true
    posterId?: true
    claimerId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    description?: true
    timeOwned?: true
    features?: true
    postedAt?: true
    photos?: true
    address?: true
    lat?: true
    lng?: true
    pickup?: true
    shipping?: true
    status?: true
    posterId?: true
    claimerId?: true
    _all?: true
  }

  export type ItemAggregateArgs = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs = {
    where?: ItemWhereInput
    orderBy?: Enumerable<ItemOrderByWithAggregationInput>
    by: ItemScalarFieldEnum[]
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }


  export type ItemGroupByOutputType = {
    id: string
    name: string
    category: string | null
    description: string
    timeOwned: Date | null
    features: string[]
    postedAt: Date
    photos: string[]
    address: string
    lat: number | null
    lng: number | null
    pickup: boolean
    shipping: boolean
    status: string
    posterId: string
    claimerId: string | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect = {
    id?: boolean
    name?: boolean
    category?: boolean
    description?: boolean
    timeOwned?: boolean
    features?: boolean
    postedAt?: boolean
    photos?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    pickup?: boolean
    shipping?: boolean
    status?: boolean
    posterId?: boolean
    claimerId?: boolean
    poster?: boolean | UserArgs
    claimer?: boolean | UserArgs
  }


  export type ItemInclude = {
    poster?: boolean | UserArgs
    claimer?: boolean | UserArgs
  }

  export type ItemGetPayload<S extends boolean | null | undefined | ItemArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Item :
    S extends undefined ? never :
    S extends { include: any } & (ItemArgs | ItemFindManyArgs)
    ? Item  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'poster' ? UserGetPayload<S['include'][P]> :
        P extends 'claimer' ? UserGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (ItemArgs | ItemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'poster' ? UserGetPayload<S['select'][P]> :
        P extends 'claimer' ? UserGetPayload<S['select'][P]> | null :  P extends keyof Item ? Item[P] : never
  } 
      : Item


  type ItemCountArgs = 
    Omit<ItemFindManyArgs, 'select' | 'include'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Item'> extends True ? Prisma__ItemClient<ItemGetPayload<T>> : Prisma__ItemClient<ItemGetPayload<T> | null, null>

    /**
     * Find one Item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Item'> extends True ? Prisma__ItemClient<ItemGetPayload<T>> : Prisma__ItemClient<ItemGetPayload<T> | null, null>

    /**
     * Find the first Item that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs>(
      args?: SelectSubset<T, ItemFindManyArgs>
    ): Prisma.PrismaPromise<Array<ItemGetPayload<T>>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs>(
      args: SelectSubset<T, ItemCreateArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs>(
      args?: SelectSubset<T, ItemCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs>(
      args: SelectSubset<T, ItemDeleteArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs>(
      args: SelectSubset<T, ItemUpdateArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs>(
      args?: SelectSubset<T, ItemDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs>(
      args: SelectSubset<T, ItemUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs>(
      args: SelectSubset<T, ItemUpsertArgs>
    ): Prisma__ItemClient<ItemGetPayload<T>>

    /**
     * Find zero or more Items that matches the filter.
     * @param {ItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const item = await prisma.item.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ItemFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Item.
     * @param {ItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const item = await prisma.item.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ItemAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    poster<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    claimer<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Item base type for findUnique actions
   */
  export type ItemFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUnique
   */
  export interface ItemFindUniqueArgs extends ItemFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item base type for findFirst actions
   */
  export type ItemFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: Enumerable<ItemScalarFieldEnum>
  }

  /**
   * Item findFirst
   */
  export interface ItemFindFirstArgs extends ItemFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: Enumerable<ItemOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: Enumerable<ItemScalarFieldEnum>
  }


  /**
   * Item create
   */
  export type ItemCreateArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs = {
    /**
     * The data used to create many Items.
     */
    data: Enumerable<ItemCreateManyInput>
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }


  /**
   * Item findRaw
   */
  export type ItemFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Item aggregateRaw
   */
  export type ItemAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Item without action
   */
  export type ItemArgs = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude | null
  }



  /**
   * Model ph
   */


  export type AggregatePh = {
    _count: PhCountAggregateOutputType | null
    _min: PhMinAggregateOutputType | null
    _max: PhMaxAggregateOutputType | null
  }

  export type PhMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PhMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PhCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PhMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PhMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PhCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PhAggregateArgs = {
    /**
     * Filter which ph to aggregate.
     */
    where?: phWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phs to fetch.
     */
    orderBy?: Enumerable<phOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phs
    **/
    _count?: true | PhCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhMaxAggregateInputType
  }

  export type GetPhAggregateType<T extends PhAggregateArgs> = {
        [P in keyof T & keyof AggregatePh]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePh[P]>
      : GetScalarType<T[P], AggregatePh[P]>
  }




  export type PhGroupByArgs = {
    where?: phWhereInput
    orderBy?: Enumerable<phOrderByWithAggregationInput>
    by: PhScalarFieldEnum[]
    having?: phScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhCountAggregateInputType | true
    _min?: PhMinAggregateInputType
    _max?: PhMaxAggregateInputType
  }


  export type PhGroupByOutputType = {
    id: string
    name: string
    _count: PhCountAggregateOutputType | null
    _min: PhMinAggregateOutputType | null
    _max: PhMaxAggregateOutputType | null
  }

  type GetPhGroupByPayload<T extends PhGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PhGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhGroupByOutputType[P]>
            : GetScalarType<T[P], PhGroupByOutputType[P]>
        }
      >
    >


  export type phSelect = {
    id?: boolean
    name?: boolean
  }


  export type phGetPayload<S extends boolean | null | undefined | phArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ph :
    S extends undefined ? never :
    S extends { include: any } & (phArgs | phFindManyArgs)
    ? ph 
    : S extends { select: any } & (phArgs | phFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ph ? ph[P] : never
  } 
      : ph


  type phCountArgs = 
    Omit<phFindManyArgs, 'select' | 'include'> & {
      select?: PhCountAggregateInputType | true
    }

  export interface phDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Ph that matches the filter.
     * @param {phFindUniqueArgs} args - Arguments to find a Ph
     * @example
     * // Get one Ph
     * const ph = await prisma.ph.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends phFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, phFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ph'> extends True ? Prisma__phClient<phGetPayload<T>> : Prisma__phClient<phGetPayload<T> | null, null>

    /**
     * Find one Ph that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {phFindUniqueOrThrowArgs} args - Arguments to find a Ph
     * @example
     * // Get one Ph
     * const ph = await prisma.ph.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends phFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, phFindUniqueOrThrowArgs>
    ): Prisma__phClient<phGetPayload<T>>

    /**
     * Find the first Ph that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phFindFirstArgs} args - Arguments to find a Ph
     * @example
     * // Get one Ph
     * const ph = await prisma.ph.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends phFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, phFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ph'> extends True ? Prisma__phClient<phGetPayload<T>> : Prisma__phClient<phGetPayload<T> | null, null>

    /**
     * Find the first Ph that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phFindFirstOrThrowArgs} args - Arguments to find a Ph
     * @example
     * // Get one Ph
     * const ph = await prisma.ph.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends phFindFirstOrThrowArgs>(
      args?: SelectSubset<T, phFindFirstOrThrowArgs>
    ): Prisma__phClient<phGetPayload<T>>

    /**
     * Find zero or more Phs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phs
     * const phs = await prisma.ph.findMany()
     * 
     * // Get first 10 Phs
     * const phs = await prisma.ph.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phWithIdOnly = await prisma.ph.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends phFindManyArgs>(
      args?: SelectSubset<T, phFindManyArgs>
    ): Prisma.PrismaPromise<Array<phGetPayload<T>>>

    /**
     * Create a Ph.
     * @param {phCreateArgs} args - Arguments to create a Ph.
     * @example
     * // Create one Ph
     * const Ph = await prisma.ph.create({
     *   data: {
     *     // ... data to create a Ph
     *   }
     * })
     * 
    **/
    create<T extends phCreateArgs>(
      args: SelectSubset<T, phCreateArgs>
    ): Prisma__phClient<phGetPayload<T>>

    /**
     * Create many Phs.
     *     @param {phCreateManyArgs} args - Arguments to create many Phs.
     *     @example
     *     // Create many Phs
     *     const ph = await prisma.ph.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends phCreateManyArgs>(
      args?: SelectSubset<T, phCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ph.
     * @param {phDeleteArgs} args - Arguments to delete one Ph.
     * @example
     * // Delete one Ph
     * const Ph = await prisma.ph.delete({
     *   where: {
     *     // ... filter to delete one Ph
     *   }
     * })
     * 
    **/
    delete<T extends phDeleteArgs>(
      args: SelectSubset<T, phDeleteArgs>
    ): Prisma__phClient<phGetPayload<T>>

    /**
     * Update one Ph.
     * @param {phUpdateArgs} args - Arguments to update one Ph.
     * @example
     * // Update one Ph
     * const ph = await prisma.ph.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends phUpdateArgs>(
      args: SelectSubset<T, phUpdateArgs>
    ): Prisma__phClient<phGetPayload<T>>

    /**
     * Delete zero or more Phs.
     * @param {phDeleteManyArgs} args - Arguments to filter Phs to delete.
     * @example
     * // Delete a few Phs
     * const { count } = await prisma.ph.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends phDeleteManyArgs>(
      args?: SelectSubset<T, phDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phs
     * const ph = await prisma.ph.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends phUpdateManyArgs>(
      args: SelectSubset<T, phUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ph.
     * @param {phUpsertArgs} args - Arguments to update or create a Ph.
     * @example
     * // Update or create a Ph
     * const ph = await prisma.ph.upsert({
     *   create: {
     *     // ... data to create a Ph
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ph we want to update
     *   }
     * })
    **/
    upsert<T extends phUpsertArgs>(
      args: SelectSubset<T, phUpsertArgs>
    ): Prisma__phClient<phGetPayload<T>>

    /**
     * Find zero or more Phs that matches the filter.
     * @param {phFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ph = await prisma.ph.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: phFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ph.
     * @param {phAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ph = await prisma.ph.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: phAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Phs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phCountArgs} args - Arguments to filter Phs to count.
     * @example
     * // Count the number of Phs
     * const count = await prisma.ph.count({
     *   where: {
     *     // ... the filter for the Phs we want to count
     *   }
     * })
    **/
    count<T extends phCountArgs>(
      args?: Subset<T, phCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhAggregateArgs>(args: Subset<T, PhAggregateArgs>): Prisma.PrismaPromise<GetPhAggregateType<T>>

    /**
     * Group by Ph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhGroupByArgs['orderBy'] }
        : { orderBy?: PhGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ph.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__phClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ph base type for findUnique actions
   */
  export type phFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * Filter, which ph to fetch.
     */
    where: phWhereUniqueInput
  }

  /**
   * ph findUnique
   */
  export interface phFindUniqueArgs extends phFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ph findUniqueOrThrow
   */
  export type phFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * Filter, which ph to fetch.
     */
    where: phWhereUniqueInput
  }


  /**
   * ph base type for findFirst actions
   */
  export type phFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * Filter, which ph to fetch.
     */
    where?: phWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phs to fetch.
     */
    orderBy?: Enumerable<phOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phs.
     */
    cursor?: phWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phs.
     */
    distinct?: Enumerable<PhScalarFieldEnum>
  }

  /**
   * ph findFirst
   */
  export interface phFindFirstArgs extends phFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ph findFirstOrThrow
   */
  export type phFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * Filter, which ph to fetch.
     */
    where?: phWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phs to fetch.
     */
    orderBy?: Enumerable<phOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phs.
     */
    cursor?: phWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phs.
     */
    distinct?: Enumerable<PhScalarFieldEnum>
  }


  /**
   * ph findMany
   */
  export type phFindManyArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * Filter, which phs to fetch.
     */
    where?: phWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phs to fetch.
     */
    orderBy?: Enumerable<phOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phs.
     */
    cursor?: phWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phs.
     */
    skip?: number
    distinct?: Enumerable<PhScalarFieldEnum>
  }


  /**
   * ph create
   */
  export type phCreateArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * The data needed to create a ph.
     */
    data: XOR<phCreateInput, phUncheckedCreateInput>
  }


  /**
   * ph createMany
   */
  export type phCreateManyArgs = {
    /**
     * The data used to create many phs.
     */
    data: Enumerable<phCreateManyInput>
  }


  /**
   * ph update
   */
  export type phUpdateArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * The data needed to update a ph.
     */
    data: XOR<phUpdateInput, phUncheckedUpdateInput>
    /**
     * Choose, which ph to update.
     */
    where: phWhereUniqueInput
  }


  /**
   * ph updateMany
   */
  export type phUpdateManyArgs = {
    /**
     * The data used to update phs.
     */
    data: XOR<phUpdateManyMutationInput, phUncheckedUpdateManyInput>
    /**
     * Filter which phs to update
     */
    where?: phWhereInput
  }


  /**
   * ph upsert
   */
  export type phUpsertArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * The filter to search for the ph to update in case it exists.
     */
    where: phWhereUniqueInput
    /**
     * In case the ph found by the `where` argument doesn't exist, create a new ph with this data.
     */
    create: XOR<phCreateInput, phUncheckedCreateInput>
    /**
     * In case the ph was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phUpdateInput, phUncheckedUpdateInput>
  }


  /**
   * ph delete
   */
  export type phDeleteArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
    /**
     * Filter which ph to delete.
     */
    where: phWhereUniqueInput
  }


  /**
   * ph deleteMany
   */
  export type phDeleteManyArgs = {
    /**
     * Filter which phs to delete
     */
    where?: phWhereInput
  }


  /**
   * ph findRaw
   */
  export type phFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ph aggregateRaw
   */
  export type phAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ph without action
   */
  export type phArgs = {
    /**
     * Select specific fields to fetch from the ph
     */
    select?: phSelect | null
  }



  /**
   * Model Test
   */


  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    content: string | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    content: string | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    content: number
    _all: number
  }


  export type TestMinAggregateInputType = {
    id?: true
    content?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    content?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    content?: true
    _all?: true
  }

  export type TestAggregateArgs = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs = {
    where?: TestWhereInput
    orderBy?: Enumerable<TestOrderByWithAggregationInput>
    by: TestScalarFieldEnum[]
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }


  export type TestGroupByOutputType = {
    id: string
    content: string
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect = {
    id?: boolean
    content?: boolean
  }


  export type TestGetPayload<S extends boolean | null | undefined | TestArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Test :
    S extends undefined ? never :
    S extends { include: any } & (TestArgs | TestFindManyArgs)
    ? Test 
    : S extends { select: any } & (TestArgs | TestFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Test ? Test[P] : never
  } 
      : Test


  type TestCountArgs = 
    Omit<TestFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TestFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Test'> extends True ? Prisma__TestClient<TestGetPayload<T>> : Prisma__TestClient<TestGetPayload<T> | null, null>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TestFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Test'> extends True ? Prisma__TestClient<TestGetPayload<T>> : Prisma__TestClient<TestGetPayload<T> | null, null>

    /**
     * Find the first Test that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs>(
      args?: SelectSubset<T, TestFindManyArgs>
    ): Prisma.PrismaPromise<Array<TestGetPayload<T>>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs>(
      args: SelectSubset<T, TestCreateArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Create many Tests.
     *     @param {TestCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TestCreateManyArgs>(
      args?: SelectSubset<T, TestCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs>(
      args: SelectSubset<T, TestDeleteArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs>(
      args: SelectSubset<T, TestUpdateArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs>(
      args?: SelectSubset<T, TestDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs>(
      args: SelectSubset<T, TestUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs>(
      args: SelectSubset<T, TestUpsertArgs>
    ): Prisma__TestClient<TestGetPayload<T>>

    /**
     * Find zero or more Tests that matches the filter.
     * @param {TestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const test = await prisma.test.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TestFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Test.
     * @param {TestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const test = await prisma.test.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TestAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TestClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Test base type for findUnique actions
   */
  export type TestFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUnique
   */
  export interface TestFindUniqueArgs extends TestFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test base type for findFirst actions
   */
  export type TestFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestScalarFieldEnum>
  }

  /**
   * Test findFirst
   */
  export interface TestFindFirstArgs extends TestFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: Enumerable<TestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * Test create
   */
  export type TestCreateArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test createMany
   */
  export type TestCreateManyArgs = {
    /**
     * The data used to create many Tests.
     */
    data: Enumerable<TestCreateManyInput>
  }


  /**
   * Test update
   */
  export type TestUpdateArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }


  /**
   * Test findRaw
   */
  export type TestFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Test aggregateRaw
   */
  export type TestAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Test without action
   */
  export type TestArgs = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    localId: 'localId',
    chatIds: 'chatIds',
    claimedItemIds: 'claimedItemIds',
    postedItemIds: 'postedItemIds',
    name: 'name',
    email: 'email',
    bio: 'bio',
    profilePic: 'profilePic',
    address: 'address',
    itemsClaimed: 'itemsClaimed',
    itemsSuccessClaimed: 'itemsSuccessClaimed',
    blocked: 'blocked'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userIds: 'userIds'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    content: 'content',
    photo: 'photo',
    sentAt: 'sentAt',
    sender: 'sender'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    description: 'description',
    timeOwned: 'timeOwned',
    features: 'features',
    postedAt: 'postedAt',
    photos: 'photos',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    pickup: 'pickup',
    shipping: 'shipping',
    status: 'status',
    posterId: 'posterId',
    claimerId: 'claimerId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const PhScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PhScalarFieldEnum = (typeof PhScalarFieldEnum)[keyof typeof PhScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    content: 'content'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    localId?: StringNullableFilter | string | null
    chatIds?: StringNullableListFilter
    claimedItemIds?: StringNullableListFilter
    postedItemIds?: StringNullableListFilter
    name?: StringFilter | string
    email?: StringFilter | string
    bio?: StringNullableFilter | string | null
    profilePic?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    itemsClaimed?: IntFilter | number
    itemsSuccessClaimed?: IntFilter | number
    blocked?: StringNullableListFilter
    chats?: ChatListRelationFilter
    postedItems?: ItemListRelationFilter
    claimedItems?: ItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    localId?: SortOrder
    chatIds?: SortOrder
    claimedItemIds?: SortOrder
    postedItemIds?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    profilePic?: SortOrder
    address?: SortOrder
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
    blocked?: SortOrder
    chats?: ChatOrderByRelationAggregateInput
    postedItems?: ItemOrderByRelationAggregateInput
    claimedItems?: ItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    localId?: string
    name?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    localId?: SortOrder
    chatIds?: SortOrder
    claimedItemIds?: SortOrder
    postedItemIds?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    profilePic?: SortOrder
    address?: SortOrder
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
    blocked?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    localId?: StringNullableWithAggregatesFilter | string | null
    chatIds?: StringNullableListFilter
    claimedItemIds?: StringNullableListFilter
    postedItemIds?: StringNullableListFilter
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    bio?: StringNullableWithAggregatesFilter | string | null
    profilePic?: StringNullableWithAggregatesFilter | string | null
    address?: StringNullableWithAggregatesFilter | string | null
    itemsClaimed?: IntWithAggregatesFilter | number
    itemsSuccessClaimed?: IntWithAggregatesFilter | number
    blocked?: StringNullableListFilter
  }

  export type ChatWhereInput = {
    AND?: Enumerable<ChatWhereInput>
    OR?: Enumerable<ChatWhereInput>
    NOT?: Enumerable<ChatWhereInput>
    id?: StringFilter | string
    userIds?: StringNullableListFilter
    users?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userIds?: SortOrder
    users?: UserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = {
    id?: string
  }

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userIds?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChatScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChatScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChatScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userIds?: StringNullableListFilter
  }

  export type MessageWhereInput = {
    AND?: Enumerable<MessageWhereInput>
    OR?: Enumerable<MessageWhereInput>
    NOT?: Enumerable<MessageWhereInput>
    id?: StringFilter | string
    chatId?: StringFilter | string
    content?: StringFilter | string
    photo?: StringNullableFilter | string | null
    sentAt?: DateTimeFilter | Date | string
    sender?: StringFilter | string
    chat?: XOR<ChatRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    sentAt?: SortOrder
    sender?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = {
    id?: string
  }

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    sentAt?: SortOrder
    sender?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MessageScalarWhereWithAggregatesInput>
    OR?: Enumerable<MessageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MessageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    chatId?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
    photo?: StringNullableWithAggregatesFilter | string | null
    sentAt?: DateTimeWithAggregatesFilter | Date | string
    sender?: StringWithAggregatesFilter | string
  }

  export type ItemWhereInput = {
    AND?: Enumerable<ItemWhereInput>
    OR?: Enumerable<ItemWhereInput>
    NOT?: Enumerable<ItemWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    category?: StringNullableFilter | string | null
    description?: StringFilter | string
    timeOwned?: DateTimeNullableFilter | Date | string | null
    features?: StringNullableListFilter
    postedAt?: DateTimeFilter | Date | string
    photos?: StringNullableListFilter
    address?: StringFilter | string
    lat?: FloatNullableFilter | number | null
    lng?: FloatNullableFilter | number | null
    pickup?: BoolFilter | boolean
    shipping?: BoolFilter | boolean
    status?: StringFilter | string
    posterId?: StringFilter | string
    claimerId?: StringNullableFilter | string | null
    poster?: XOR<UserRelationFilter, UserWhereInput>
    claimer?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    timeOwned?: SortOrder
    features?: SortOrder
    postedAt?: SortOrder
    photos?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pickup?: SortOrder
    shipping?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    claimerId?: SortOrder
    poster?: UserOrderByWithRelationInput
    claimer?: UserOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = {
    id?: string
  }

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    timeOwned?: SortOrder
    features?: SortOrder
    postedAt?: SortOrder
    photos?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pickup?: SortOrder
    shipping?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    claimerId?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    category?: StringNullableWithAggregatesFilter | string | null
    description?: StringWithAggregatesFilter | string
    timeOwned?: DateTimeNullableWithAggregatesFilter | Date | string | null
    features?: StringNullableListFilter
    postedAt?: DateTimeWithAggregatesFilter | Date | string
    photos?: StringNullableListFilter
    address?: StringWithAggregatesFilter | string
    lat?: FloatNullableWithAggregatesFilter | number | null
    lng?: FloatNullableWithAggregatesFilter | number | null
    pickup?: BoolWithAggregatesFilter | boolean
    shipping?: BoolWithAggregatesFilter | boolean
    status?: StringWithAggregatesFilter | string
    posterId?: StringWithAggregatesFilter | string
    claimerId?: StringNullableWithAggregatesFilter | string | null
  }

  export type phWhereInput = {
    AND?: Enumerable<phWhereInput>
    OR?: Enumerable<phWhereInput>
    NOT?: Enumerable<phWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type phOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type phWhereUniqueInput = {
    id?: string
  }

  export type phOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: phCountOrderByAggregateInput
    _max?: phMaxOrderByAggregateInput
    _min?: phMinOrderByAggregateInput
  }

  export type phScalarWhereWithAggregatesInput = {
    AND?: Enumerable<phScalarWhereWithAggregatesInput>
    OR?: Enumerable<phScalarWhereWithAggregatesInput>
    NOT?: Enumerable<phScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type TestWhereInput = {
    AND?: Enumerable<TestWhereInput>
    OR?: Enumerable<TestWhereInput>
    NOT?: Enumerable<TestWhereInput>
    id?: StringFilter | string
    content?: StringFilter | string
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type TestWhereUniqueInput = {
    id?: string
  }

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TestScalarWhereWithAggregatesInput>
    OR?: Enumerable<TestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    content?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    id?: string
    localId?: string | null
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    chats?: ChatCreateNestedManyWithoutUsersInput
    postedItems?: ItemCreateNestedManyWithoutPosterInput
    claimedItems?: ItemCreateNestedManyWithoutClaimerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    localId?: string | null
    chatIds?: UserCreatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    postedItems?: ItemUncheckedCreateNestedManyWithoutPosterInput
    claimedItems?: ItemUncheckedCreateNestedManyWithoutClaimerInput
  }

  export type UserUpdateInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    chats?: ChatUpdateManyWithoutUsersNestedInput
    postedItems?: ItemUpdateManyWithoutPosterNestedInput
    claimedItems?: ItemUpdateManyWithoutClaimerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    chatIds?: UserUpdatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    postedItems?: ItemUncheckedUpdateManyWithoutPosterNestedInput
    claimedItems?: ItemUncheckedUpdateManyWithoutClaimerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    localId?: string | null
    chatIds?: UserCreatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
  }

  export type UserUpdateManyMutationInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
  }

  export type UserUncheckedUpdateManyInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    chatIds?: UserUpdatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
  }

  export type ChatCreateInput = {
    id?: string
    users?: UserCreateNestedManyWithoutChatsInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    userIds?: ChatCreateuserIdsInput | Enumerable<string>
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    users?: UserUpdateManyWithoutChatsNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    userIds?: ChatUpdateuserIdsInput | Enumerable<string>
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    userIds?: ChatCreateuserIdsInput | Enumerable<string>
  }

  export type ChatUpdateManyMutationInput = {

  }

  export type ChatUncheckedUpdateManyInput = {
    userIds?: ChatUpdateuserIdsInput | Enumerable<string>
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    photo?: string | null
    sentAt: Date | string
    sender: string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    chatId: string
    content: string
    photo?: string | null
    sentAt: Date | string
    sender: string
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    chatId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    chatId: string
    content: string
    photo?: string | null
    sentAt: Date | string
    sender: string
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyInput = {
    chatId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    poster: UserCreateNestedOneWithoutPostedItemsInput
    claimer?: UserCreateNestedOneWithoutClaimedItemsInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    posterId: string
    claimerId?: string | null
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    poster?: UserUpdateOneRequiredWithoutPostedItemsNestedInput
    claimer?: UserUpdateOneWithoutClaimedItemsNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    posterId?: StringFieldUpdateOperationsInput | string
    claimerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    posterId: string
    claimerId?: string | null
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    posterId?: StringFieldUpdateOperationsInput | string
    claimerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type phCreateInput = {
    id?: string
    name: string
  }

  export type phUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type phUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type phUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type phCreateManyInput = {
    id?: string
    name: string
  }

  export type phUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type phUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateInput = {
    id?: string
    content: string
  }

  export type TestUncheckedCreateInput = {
    id?: string
    content: string
  }

  export type TestUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManyInput = {
    id?: string
    content: string
  }

  export type TestUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    localId?: SortOrder
    chatIds?: SortOrder
    claimedItemIds?: SortOrder
    postedItemIds?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    profilePic?: SortOrder
    address?: SortOrder
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
    blocked?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    localId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    profilePic?: SortOrder
    address?: SortOrder
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    localId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    bio?: SortOrder
    profilePic?: SortOrder
    address?: SortOrder
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    itemsClaimed?: SortOrder
    itemsSuccessClaimed?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userIds?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ChatRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    sentAt?: SortOrder
    sender?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    sentAt?: SortOrder
    sender?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    content?: SortOrder
    photo?: SortOrder
    sentAt?: SortOrder
    sender?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    timeOwned?: SortOrder
    features?: SortOrder
    postedAt?: SortOrder
    photos?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pickup?: SortOrder
    shipping?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    claimerId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    timeOwned?: SortOrder
    postedAt?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pickup?: SortOrder
    shipping?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    claimerId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    description?: SortOrder
    timeOwned?: SortOrder
    postedAt?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    pickup?: SortOrder
    shipping?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    claimerId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type phCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type phMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type phMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
  }

  export type UserCreateclaimedItemIdsInput = {
    set: Enumerable<string>
  }

  export type UserCreatepostedItemIdsInput = {
    set: Enumerable<string>
  }

  export type UserCreateblockedInput = {
    set: Enumerable<string>
  }

  export type ChatCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ChatCreateWithoutUsersInput>, Enumerable<ChatUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type ItemCreateNestedManyWithoutPosterInput = {
    create?: XOR<Enumerable<ItemCreateWithoutPosterInput>, Enumerable<ItemUncheckedCreateWithoutPosterInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutPosterInput>
    createMany?: ItemCreateManyPosterInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ItemCreateNestedManyWithoutClaimerInput = {
    create?: XOR<Enumerable<ItemCreateWithoutClaimerInput>, Enumerable<ItemUncheckedCreateWithoutClaimerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutClaimerInput>
    createMany?: ItemCreateManyClaimerInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type UserCreatechatIdsInput = {
    set: Enumerable<string>
  }

  export type ChatUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<ChatCreateWithoutUsersInput>, Enumerable<ChatUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutUsersInput>
    connect?: Enumerable<ChatWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutPosterInput = {
    create?: XOR<Enumerable<ItemCreateWithoutPosterInput>, Enumerable<ItemUncheckedCreateWithoutPosterInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutPosterInput>
    createMany?: ItemCreateManyPosterInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type ItemUncheckedCreateNestedManyWithoutClaimerInput = {
    create?: XOR<Enumerable<ItemCreateWithoutClaimerInput>, Enumerable<ItemUncheckedCreateWithoutClaimerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutClaimerInput>
    createMany?: ItemCreateManyClaimerInputEnvelope
    connect?: Enumerable<ItemWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateclaimedItemIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUpdatepostedItemIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateblockedInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ChatUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutUsersInput>, Enumerable<ChatUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type ItemUpdateManyWithoutPosterNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutPosterInput>, Enumerable<ItemUncheckedCreateWithoutPosterInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutPosterInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutPosterInput>
    createMany?: ItemCreateManyPosterInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutPosterInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutPosterInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemUpdateManyWithoutClaimerNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutClaimerInput>, Enumerable<ItemUncheckedCreateWithoutClaimerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutClaimerInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutClaimerInput>
    createMany?: ItemCreateManyClaimerInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutClaimerInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutClaimerInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type UserUpdatechatIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ChatUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<Enumerable<ChatCreateWithoutUsersInput>, Enumerable<ChatUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<ChatCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<ChatUpsertWithWhereUniqueWithoutUsersInput>
    set?: Enumerable<ChatWhereUniqueInput>
    disconnect?: Enumerable<ChatWhereUniqueInput>
    delete?: Enumerable<ChatWhereUniqueInput>
    connect?: Enumerable<ChatWhereUniqueInput>
    update?: Enumerable<ChatUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<ChatUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<ChatScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutPosterNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutPosterInput>, Enumerable<ItemUncheckedCreateWithoutPosterInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutPosterInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutPosterInput>
    createMany?: ItemCreateManyPosterInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutPosterInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutPosterInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type ItemUncheckedUpdateManyWithoutClaimerNestedInput = {
    create?: XOR<Enumerable<ItemCreateWithoutClaimerInput>, Enumerable<ItemUncheckedCreateWithoutClaimerInput>>
    connectOrCreate?: Enumerable<ItemCreateOrConnectWithoutClaimerInput>
    upsert?: Enumerable<ItemUpsertWithWhereUniqueWithoutClaimerInput>
    createMany?: ItemCreateManyClaimerInputEnvelope
    set?: Enumerable<ItemWhereUniqueInput>
    disconnect?: Enumerable<ItemWhereUniqueInput>
    delete?: Enumerable<ItemWhereUniqueInput>
    connect?: Enumerable<ItemWhereUniqueInput>
    update?: Enumerable<ItemUpdateWithWhereUniqueWithoutClaimerInput>
    updateMany?: Enumerable<ItemUpdateManyWithWhereWithoutClaimerInput>
    deleteMany?: Enumerable<ItemScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutChatsInput = {
    create?: XOR<Enumerable<UserCreateWithoutChatsInput>, Enumerable<UserUncheckedCreateWithoutChatsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutChatsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type ChatCreateuserIdsInput = {
    set: Enumerable<string>
  }

  export type UserUncheckedCreateNestedManyWithoutChatsInput = {
    create?: XOR<Enumerable<UserCreateWithoutChatsInput>, Enumerable<UserUncheckedCreateWithoutChatsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutChatsInput>
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: Enumerable<MessageWhereUniqueInput>
  }

  export type UserUpdateManyWithoutChatsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutChatsInput>, Enumerable<UserUncheckedCreateWithoutChatsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutChatsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutChatsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutChatsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutChatsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChatInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChatInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ChatUpdateuserIdsInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type UserUncheckedUpdateManyWithoutChatsNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutChatsInput>, Enumerable<UserUncheckedCreateWithoutChatsInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutChatsInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutChatsInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutChatsInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutChatsInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<Enumerable<MessageCreateWithoutChatInput>, Enumerable<MessageUncheckedCreateWithoutChatInput>>
    connectOrCreate?: Enumerable<MessageCreateOrConnectWithoutChatInput>
    upsert?: Enumerable<MessageUpsertWithWhereUniqueWithoutChatInput>
    createMany?: MessageCreateManyChatInputEnvelope
    set?: Enumerable<MessageWhereUniqueInput>
    disconnect?: Enumerable<MessageWhereUniqueInput>
    delete?: Enumerable<MessageWhereUniqueInput>
    connect?: Enumerable<MessageWhereUniqueInput>
    update?: Enumerable<MessageUpdateWithWhereUniqueWithoutChatInput>
    updateMany?: Enumerable<MessageUpdateManyWithWhereWithoutChatInput>
    deleteMany?: Enumerable<MessageScalarWhereInput>
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ItemCreatefeaturesInput = {
    set: Enumerable<string>
  }

  export type ItemCreatephotosInput = {
    set: Enumerable<string>
  }

  export type UserCreateNestedOneWithoutPostedItemsInput = {
    create?: XOR<UserCreateWithoutPostedItemsInput, UserUncheckedCreateWithoutPostedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutClaimedItemsInput = {
    create?: XOR<UserCreateWithoutClaimedItemsInput, UserUncheckedCreateWithoutClaimedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimedItemsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type ItemUpdatefeaturesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type ItemUpdatephotosInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostedItemsNestedInput = {
    create?: XOR<UserCreateWithoutPostedItemsInput, UserUncheckedCreateWithoutPostedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostedItemsInput
    upsert?: UserUpsertWithoutPostedItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostedItemsInput, UserUncheckedUpdateWithoutPostedItemsInput>
  }

  export type UserUpdateOneWithoutClaimedItemsNestedInput = {
    create?: XOR<UserCreateWithoutClaimedItemsInput, UserUncheckedCreateWithoutClaimedItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClaimedItemsInput
    upsert?: UserUpsertWithoutClaimedItemsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutClaimedItemsInput, UserUncheckedUpdateWithoutClaimedItemsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ChatCreateWithoutUsersInput = {
    id?: string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUsersInput = {
    id?: string
    userIds?: ChatCreateuserIdsInput | Enumerable<string>
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUsersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type ItemCreateWithoutPosterInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    claimer?: UserCreateNestedOneWithoutClaimedItemsInput
  }

  export type ItemUncheckedCreateWithoutPosterInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    claimerId?: string | null
  }

  export type ItemCreateOrConnectWithoutPosterInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutPosterInput, ItemUncheckedCreateWithoutPosterInput>
  }

  export type ItemCreateManyPosterInputEnvelope = {
    data: Enumerable<ItemCreateManyPosterInput>
  }

  export type ItemCreateWithoutClaimerInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    poster: UserCreateNestedOneWithoutPostedItemsInput
  }

  export type ItemUncheckedCreateWithoutClaimerInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    posterId: string
  }

  export type ItemCreateOrConnectWithoutClaimerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutClaimerInput, ItemUncheckedCreateWithoutClaimerInput>
  }

  export type ItemCreateManyClaimerInputEnvelope = {
    data: Enumerable<ItemCreateManyClaimerInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutUsersInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatCreateWithoutUsersInput, ChatUncheckedCreateWithoutUsersInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUsersInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUsersInput, ChatUncheckedUpdateWithoutUsersInput>
  }

  export type ChatUpdateManyWithWhereWithoutUsersInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutChatsInput>
  }

  export type ChatScalarWhereInput = {
    AND?: Enumerable<ChatScalarWhereInput>
    OR?: Enumerable<ChatScalarWhereInput>
    NOT?: Enumerable<ChatScalarWhereInput>
    id?: StringFilter | string
    userIds?: StringNullableListFilter
  }

  export type ItemUpsertWithWhereUniqueWithoutPosterInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutPosterInput, ItemUncheckedUpdateWithoutPosterInput>
    create: XOR<ItemCreateWithoutPosterInput, ItemUncheckedCreateWithoutPosterInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutPosterInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutPosterInput, ItemUncheckedUpdateWithoutPosterInput>
  }

  export type ItemUpdateManyWithWhereWithoutPosterInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutPostedItemsInput>
  }

  export type ItemScalarWhereInput = {
    AND?: Enumerable<ItemScalarWhereInput>
    OR?: Enumerable<ItemScalarWhereInput>
    NOT?: Enumerable<ItemScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    category?: StringNullableFilter | string | null
    description?: StringFilter | string
    timeOwned?: DateTimeNullableFilter | Date | string | null
    features?: StringNullableListFilter
    postedAt?: DateTimeFilter | Date | string
    photos?: StringNullableListFilter
    address?: StringFilter | string
    lat?: FloatNullableFilter | number | null
    lng?: FloatNullableFilter | number | null
    pickup?: BoolFilter | boolean
    shipping?: BoolFilter | boolean
    status?: StringFilter | string
    posterId?: StringFilter | string
    claimerId?: StringNullableFilter | string | null
  }

  export type ItemUpsertWithWhereUniqueWithoutClaimerInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutClaimerInput, ItemUncheckedUpdateWithoutClaimerInput>
    create: XOR<ItemCreateWithoutClaimerInput, ItemUncheckedCreateWithoutClaimerInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutClaimerInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutClaimerInput, ItemUncheckedUpdateWithoutClaimerInput>
  }

  export type ItemUpdateManyWithWhereWithoutClaimerInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutClaimedItemsInput>
  }

  export type UserCreateWithoutChatsInput = {
    id?: string
    localId?: string | null
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    postedItems?: ItemCreateNestedManyWithoutPosterInput
    claimedItems?: ItemCreateNestedManyWithoutClaimerInput
  }

  export type UserUncheckedCreateWithoutChatsInput = {
    id?: string
    localId?: string | null
    chatIds?: UserCreatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    postedItems?: ItemUncheckedCreateNestedManyWithoutPosterInput
    claimedItems?: ItemUncheckedCreateNestedManyWithoutClaimerInput
  }

  export type UserCreateOrConnectWithoutChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    content: string
    photo?: string | null
    sentAt: Date | string
    sender: string
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    photo?: string | null
    sentAt: Date | string
    sender: string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: Enumerable<MessageCreateManyChatInput>
  }

  export type UserUpsertWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
    create: XOR<UserCreateWithoutChatsInput, UserUncheckedCreateWithoutChatsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatsInput, UserUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    localId?: StringNullableFilter | string | null
    chatIds?: StringNullableListFilter
    claimedItemIds?: StringNullableListFilter
    postedItemIds?: StringNullableListFilter
    name?: StringFilter | string
    email?: StringFilter | string
    bio?: StringNullableFilter | string | null
    profilePic?: StringNullableFilter | string | null
    address?: StringNullableFilter | string | null
    itemsClaimed?: IntFilter | number
    itemsSuccessClaimed?: IntFilter | number
    blocked?: StringNullableListFilter
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutMessagesInput>
  }

  export type MessageScalarWhereInput = {
    AND?: Enumerable<MessageScalarWhereInput>
    OR?: Enumerable<MessageScalarWhereInput>
    NOT?: Enumerable<MessageScalarWhereInput>
    id?: StringFilter | string
    chatId?: StringFilter | string
    content?: StringFilter | string
    photo?: StringNullableFilter | string | null
    sentAt?: DateTimeFilter | Date | string
    sender?: StringFilter | string
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    users?: UserCreateNestedManyWithoutChatsInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    userIds?: ChatCreateuserIdsInput | Enumerable<string>
    users?: UserUncheckedCreateNestedManyWithoutChatsInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    users?: UserUpdateManyWithoutChatsNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    userIds?: ChatUpdateuserIdsInput | Enumerable<string>
    users?: UserUncheckedUpdateManyWithoutChatsNestedInput
  }

  export type UserCreateWithoutPostedItemsInput = {
    id?: string
    localId?: string | null
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    chats?: ChatCreateNestedManyWithoutUsersInput
    claimedItems?: ItemCreateNestedManyWithoutClaimerInput
  }

  export type UserUncheckedCreateWithoutPostedItemsInput = {
    id?: string
    localId?: string | null
    chatIds?: UserCreatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    claimedItems?: ItemUncheckedCreateNestedManyWithoutClaimerInput
  }

  export type UserCreateOrConnectWithoutPostedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostedItemsInput, UserUncheckedCreateWithoutPostedItemsInput>
  }

  export type UserCreateWithoutClaimedItemsInput = {
    id?: string
    localId?: string | null
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    chats?: ChatCreateNestedManyWithoutUsersInput
    postedItems?: ItemCreateNestedManyWithoutPosterInput
  }

  export type UserUncheckedCreateWithoutClaimedItemsInput = {
    id?: string
    localId?: string | null
    chatIds?: UserCreatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserCreateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserCreatepostedItemIdsInput | Enumerable<string>
    name: string
    email: string
    bio?: string | null
    profilePic?: string | null
    address?: string | null
    itemsClaimed?: number
    itemsSuccessClaimed?: number
    blocked?: UserCreateblockedInput | Enumerable<string>
    chats?: ChatUncheckedCreateNestedManyWithoutUsersInput
    postedItems?: ItemUncheckedCreateNestedManyWithoutPosterInput
  }

  export type UserCreateOrConnectWithoutClaimedItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClaimedItemsInput, UserUncheckedCreateWithoutClaimedItemsInput>
  }

  export type UserUpsertWithoutPostedItemsInput = {
    update: XOR<UserUpdateWithoutPostedItemsInput, UserUncheckedUpdateWithoutPostedItemsInput>
    create: XOR<UserCreateWithoutPostedItemsInput, UserUncheckedCreateWithoutPostedItemsInput>
  }

  export type UserUpdateWithoutPostedItemsInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    chats?: ChatUpdateManyWithoutUsersNestedInput
    claimedItems?: ItemUpdateManyWithoutClaimerNestedInput
  }

  export type UserUncheckedUpdateWithoutPostedItemsInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    chatIds?: UserUpdatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    claimedItems?: ItemUncheckedUpdateManyWithoutClaimerNestedInput
  }

  export type UserUpsertWithoutClaimedItemsInput = {
    update: XOR<UserUpdateWithoutClaimedItemsInput, UserUncheckedUpdateWithoutClaimedItemsInput>
    create: XOR<UserCreateWithoutClaimedItemsInput, UserUncheckedCreateWithoutClaimedItemsInput>
  }

  export type UserUpdateWithoutClaimedItemsInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    chats?: ChatUpdateManyWithoutUsersNestedInput
    postedItems?: ItemUpdateManyWithoutPosterNestedInput
  }

  export type UserUncheckedUpdateWithoutClaimedItemsInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    chatIds?: UserUpdatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    chats?: ChatUncheckedUpdateManyWithoutUsersNestedInput
    postedItems?: ItemUncheckedUpdateManyWithoutPosterNestedInput
  }

  export type ItemCreateManyPosterInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    claimerId?: string | null
  }

  export type ItemCreateManyClaimerInput = {
    id?: string
    name: string
    category?: string | null
    description: string
    timeOwned?: Date | string | null
    features?: ItemCreatefeaturesInput | Enumerable<string>
    postedAt?: Date | string
    photos?: ItemCreatephotosInput | Enumerable<string>
    address: string
    lat?: number | null
    lng?: number | null
    pickup?: boolean
    shipping?: boolean
    status?: string
    posterId: string
  }

  export type ChatUpdateWithoutUsersInput = {
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUsersInput = {
    userIds?: ChatUpdateuserIdsInput | Enumerable<string>
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutChatsInput = {
    userIds?: ChatUpdateuserIdsInput | Enumerable<string>
  }

  export type ItemUpdateWithoutPosterInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    claimer?: UserUpdateOneWithoutClaimedItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutPosterInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    claimerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUncheckedUpdateManyWithoutPostedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    claimerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUpdateWithoutClaimerInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    poster?: UserUpdateOneRequiredWithoutPostedItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutClaimerInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    posterId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyWithoutClaimedItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    timeOwned?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    features?: ItemUpdatefeaturesInput | Enumerable<string>
    postedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: ItemUpdatephotosInput | Enumerable<string>
    address?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    pickup?: BoolFieldUpdateOperationsInput | boolean
    shipping?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    posterId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    content: string
    photo?: string | null
    sentAt: Date | string
    sender: string
  }

  export type UserUpdateWithoutChatsInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    postedItems?: ItemUpdateManyWithoutPosterNestedInput
    claimedItems?: ItemUpdateManyWithoutClaimerNestedInput
  }

  export type UserUncheckedUpdateWithoutChatsInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    chatIds?: UserUpdatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
    postedItems?: ItemUncheckedUpdateManyWithoutPosterNestedInput
    claimedItems?: ItemUncheckedUpdateManyWithoutClaimerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    localId?: NullableStringFieldUpdateOperationsInput | string | null
    chatIds?: UserUpdatechatIdsInput | Enumerable<string>
    claimedItemIds?: UserUpdateclaimedItemIdsInput | Enumerable<string>
    postedItemIds?: UserUpdatepostedItemIdsInput | Enumerable<string>
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    itemsClaimed?: IntFieldUpdateOperationsInput | number
    itemsSuccessClaimed?: IntFieldUpdateOperationsInput | number
    blocked?: UserUpdateblockedInput | Enumerable<string>
  }

  export type MessageUpdateWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutMessagesInput = {
    content?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}