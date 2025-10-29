import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Passport</th>
              <th>Recived</th>
              <th>Agent</th>
              <th>Med</th>
              <th>Mofa</th>
              <th>PC</th>
              <th>Finger</th>
              <th>Visa</th>
              <th>Manpower</th>
              <th>Flight</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  )
}

export default App
