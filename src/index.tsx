import { StrictMode } from 'react'
import { render } from 'react-dom'
import KthLargest from './剑指offer/KthLargest'
import 'tailwindcss/tailwind.css'
import './call/call'

import 'new.ts'
import './call/call.js'
import minEatingSpeed from './剑指offer/minEatingSpeed'

console.log(minEatingSpeed([3, 6, 7, 11], 8));

render(
  <StrictMode>
    <div>
      Hello World
    </div>
  </StrictMode>,
  document.getElementById('root')
)
