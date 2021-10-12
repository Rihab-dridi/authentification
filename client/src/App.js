
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/views/home'
import Dashboard from './components/views/dashboard'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './redux/action/auth-action';
import PrivateRoute from './components/routes/privateRoute';

function App() {
 
  const dispatch = useDispatch()
  useEffect(() => {
 dispatch(getAuthUser())
  }, [])


  return (
    <div className="App">
        <Router>
     <Navbar/>
  
   <Route exact path='/' component={Home} />
  
   <PrivateRoute  path='/Dashboard' component={Dashboard}   />
     
     </Router>
    </div>
  );
}

export default App;
