import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home, Character} from './pages'

function App() {
  return (
     <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/character/:char_id' component={Character} />
        </Switch>
     </Router>
  );
}

export default App;
