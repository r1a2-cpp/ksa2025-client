import { useState } from 'react'
import candidates from './data/candidate.json';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <div className="header-row">
          <h2>Candidate Dashborad</h2>
          <form className="add-form">
            <input 
              type="text"
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
        <div className="summary-cards full-width">
          <div className="card">Total<span>10</span></div>
          <div className="card">Medical<span>10</span></div>
          <div className="card">Visa<span>10</span></div>
          <div className="card">Manpower<span>10</span></div>
          <div className="card">Flight<span>10</span></div>
          <div className="card">Compleate<span>10</span></div>
          <div className="card cancel">Cancel<span>10</span></div>
        </div>
        <div className="sort-section">
          <label>Sort by</label>
          <select>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
        <div className="message-box"> Message Here</div>
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Passport</th>
              <th>Received</th>
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
            {candidates.map((item)=>(
              <tr key={item.SL}>
                <td>{item.SL}</td>
                <td>{item.NAME}</td>
                <td>{item.PASSPORT}</td>
                <td>{item['RECIVED DATE']}</td>
                <td>{item.AGENT}</td>
                <td>{item.MEDICAL}</td>
                <td>{item.MOFA}</td>
                <td></td>
                <td>{item.FINGER}</td>
                <td>{item.VISA}</td>
                <td>{item.MANPOWER}</td>
                <td>{item.FLIGHT}</td>
                <td></td>
                
              <td>
                <button className="edit-btn">✎</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>

      </div>
  )
}

export default App
