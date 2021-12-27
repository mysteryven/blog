import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'

render(
  <StrictMode>
    <div>
      Hello World
    </div>
  </StrictMode>,
  document.getElementById('root')
)
