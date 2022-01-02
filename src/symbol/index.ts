let count = 0;

function generatorName(desc?: string) {
  return 'symbol-' +  (count++) + '-desc'
}

const forMap: Record<string, ReturnType<typeof MySymbol>> = {}

interface IMySymbol {
  (arg?: any): any;
  for?: any;
  keyFor?: any;
}

const MySymbol: IMySymbol = function Symbol(this: any, desc?: unknown) {
  let description: string | undefined = undefined;
  if (this instanceof MySymbol) {
    throw new Error('不能实例化 symbol')
  }

  if (desc === undefined) {
    description = undefined
  } else {
    description = String(desc);
  }

  const symbol = Object.create({
    toString() {
      return generatorName(description) 
    },
    
  });

  Object.defineProperties(symbol, {
    'desc': {
      value: description,
      writable: false,
      enumerable: false,
      configurable: false
    },
    
  })

  return symbol;
}

Object.defineProperties(MySymbol, {
  'for': {
    value(desc?: string) {
      const description = desc === undefined ? undefined : String(desc);

      if (description === undefined) {
        return MySymbol();
      }

      return forMap[description] || (forMap[description] = MySymbol(description))
    },
  },
  'keyFor': {
    value(target: any) {
      for (let a in forMap) {
        if(forMap[a] === target) {
          return a;
        }
      }
    },
  }
})

export default MySymbol;