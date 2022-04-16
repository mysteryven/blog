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
