import logo from './logo.svg';
import './App.css';
import { Home  } from './components/home';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import{ useStore} from "./store"
import { Post } from './components/post';



function App() {
  return ( 
  <>
  <Provider store={useStore}>
  <BrowserRouter>
   <Home></Home> 
  <Switch>
       <Route path="/Posts/:id" component={Post} exact></Route>
       {/* <Route path="/HomePage" component={Home} exact></Route> */}
  </Switch>     
  </BrowserRouter> 
  </Provider>         
      </>
  );
} 

export default App;
