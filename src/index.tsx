import { StrictMode } from 'react'
import { render } from 'react-dom'
import KthLargest from './剑指offer/KthLargest'
import 'tailwindcss/tailwind.css'
import './call/call'

import 'new.ts'
import './call/call.js'

var obj = new KthLargest(3, [4, 5, 8, 2])
var param_1 = obj.add(3)
var param_1 = obj.add(5)
var param_1 = obj.add(10)
var param_1 = obj.add(9)
var param_1 = obj.add(4)


render(
  <StrictMode>
    <div>
      Hello World
    </div>
  </StrictMode>,
  document.getElementById('root')
)
