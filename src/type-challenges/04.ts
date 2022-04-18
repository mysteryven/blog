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