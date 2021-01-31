import { BrowserRouter as Router,Route,Switch } from 'react-router-dom' ;
import App_function from './App' ;
import aboutUs from './aboutUs' ;

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={App_function} />
       <Route exact path="/about" component={aboutUs} /> 
     </Switch>
   </Router> 
  );
}

export default App ;