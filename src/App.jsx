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
          <tbody>
            <tr>
              <th>1</th>
              <th>Riajul Islam</th>
              <th>A123456</th>
              <th>10/29/2025</th>
              <th>Rahman</th>
              <th>FIT</th>
              <th>OK</th>
              <th>OK</th>
              <th>OK</th>
              <th>OK</th>
              <th>OK</th>
              <th>OK</th>
              <th>COMPLEATE</th>
              <th>❌</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
