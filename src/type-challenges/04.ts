// 02
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never

// 04
type MyPick<T, K extends keyof T> = {
  [k in K]: T[k]
}

// 07 
type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}

// 11
type TupleToObject<T extends readonly any[]> = {
  [k in T[number]]: k
}

// 14
type First<T extends any[]> = T extends [] ? never : T[0]

// 18
type Length<T extends {length: number}> = T['length']

// 43
// 其实我有点不理解，目前是把它当成了分配律
// a' | 'b' | 'c', 'a'
// a 在后面吗？在，never, b 在吗，不在，c 在吗，不在，然后 合并起结果
type MyExclude<T, U> = T extends U ? never : T


// 189 
// 有个递归，，，小烦
type MyAwaited<T> = T extends Promise<infer A> ? MyAwaited<A> : T

// 268
type If<C, T, F> = C extends true ? T : F

// 533
type Concat<T extends any[], U extends any[]> = [...T, ...U]

// 898
type Includes<T extends any[], K> =  K extends T[number] ? true : false

// 递归版本
// type Includes<T extends readonly any[], U> = T extends [infer T1, ...infer T2] ? 
// (U extends T1 ? true : Includes<T2, U>) :
// false

// 3057
type Push<T extends any[], U> =  [...T, U]

// 3312
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never;


