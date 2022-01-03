import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import './call/call'

import 'new.ts'
import './call/call.js'

render(
  <StrictMode>
    <div>
      Hello World
    </div>
  </StrictMode>,
  document.getElementById('root')
)
