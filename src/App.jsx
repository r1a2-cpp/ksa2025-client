import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="header-row">
          <h2>Candidate Dashborad</h2>
          <form className="add-form">
            <input 
              type="number"
              name="sl"
              placeholder="SL"
            />
            <input 
              type="text"
              name="fullname"
              placeholder="Full Name"
            />
            <input 
              type="text"
              name="passport"
              placeholder="Passport"
            />
            <input 
              type="text"
              name="agent"
              placeholder="Agent"
            />
            <button>Add Candidate</button>
          </form>
        </div>

        <div className="summary-cards full-witdh">
          <div className="card">Total<span>10</span></div>
          <div className="card">Medical<span>10</span></div>
          <div className="card">Mofa<span>10</span></div>
          <div className="card">Visa<span>10</span></div>
          <div className="card">Manpower<span>10</span></div>
          <div className="card">Flight<span>10</span></div>
          <div className="card">Complete<span>10</span></div>
          <div className="card">Cancel<span>10</span></div>
        </div>
        <div className='sort-section'>
          <label>Sort by</label>
          <select>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>

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
