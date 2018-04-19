import React, { Component } from 'react';
import {Link, Route, Switch, Redirect} from 'react-router-dom';

const Home = (props) => (
  <div>
    <h2>Home {console.log('props：', props)}</h2>
  </div>
)
const Products = (props) => (
  <div>
    {console.log(props)}
    <h2>Products</h2>
  </div>
)
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes2</Link></li>
            <li><Link to="/products">Products-test</Link></li>
            <li><Link to="/category">Category</Link></li>
          </ul>
        </nav>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/category" component={Category}/>
      </Switch>
    
    </div>
    );
  }
}
export default App;