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
              <td>1</td>
              <td>Riajul Islam</td>
              <td>A123456</td>
              <td>10/29/2025</td>
              <td>Rahman</td>
              <td>FIT</td>
              <td>OK</td>
              <td>OK</td>
              <td>OK</td>
              <td>OK</td>
              <td>OK</td>
              <td>OK</td>
              <td>COMPLEATE</td>
              <td><button>
                  ✖
                </button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
