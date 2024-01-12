// import dependencies
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

// import my functionality that I've added
import { getUser } from '../utilities/users-services';

// css
import './App.css'

// import pages
import AuthPage from './AuthPage';
import Income from './Income';
import Expenses from './Expenses';
import ViewTransaction from './ViewTransaction';
// import Graph from '../components/Graph.'
// import components
import NavBar from '../components/NavBar';
// import Expense from '../../models/expense.cjs';

function App() {
  const [user, setUser] = useState(getUser());

  // in here
  // use the useState hook to define a state variable called user
  // initialize that to null
  // the setter function should be named according to convention
  return (
    <>
      {
        user
          ?
          <>
            <NavBar user={user} setUser={setUser}/>
            < Routes >
              <Route path='/income' element={<Income />}/>
              <Route path='/expenses' element={<Expenses />}/>
              <Route path='/transactions' element={<ViewTransaction />}/>
            </Routes>
          </>
          :
          < AuthPage setUser={setUser} />
      }
    </>
  )
}

export default App
