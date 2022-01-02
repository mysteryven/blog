import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import './call/index'

import MySymbol from './symbol/index'

const symbol1 = MySymbol('1');
const symbol2 = MySymbol('1');
console.log(symbol1.toString());
console.log(symbol2.toString());

const symbol3 = MySymbol.for('1')
console.log(MySymbol.keyFor(symbol3))

render(
  <StrictMode>
    <div>
      Hello World
    </div>
  </StrictMode>,
  document.getElementById('root')
)
