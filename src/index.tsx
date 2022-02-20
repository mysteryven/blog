import { StrictMode } from 'react'
import { render } from 'react-dom'
import KthLargest from './剑指offer/KthLargest'
import 'tailwindcss/tailwind.css'
import './call/call'

import 'new.ts'
import './call/call.js'
import { minimumLengthEncoding } from './剑指offer/minimumLengthEncoding'

minimumLengthEncoding(["time", "me", "bell"])

render(
  <StrictMode>
    <div>
      Hello World
    </div>
  </StrictMode>,
  document.getElementById('root')
)
