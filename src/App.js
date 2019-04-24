import React, { Component } from 'react';
import Nav from './component/nav';
import Home from './page/home';
import Goods from './page/goods';
import Regist from './page/regist';
import {Route} from 'react-router-dom';

const LIST = [{
  text: 'home',
  url: '/home'
}, {
  text: 'goods',
  url: '/goods'
}];
class App extends Component {
  render() {
      return (
          <div className="App">
              {/* <div className="nav_bar">
                  <Nav list={LIST} />
              </div> */}
              <div className="conent">
                  <Route path='/home' component={Home} />
                  <Route path='/goods' component={Goods} />
                  <Route path='/regist' component={Regist} />
              </div>
          </div>
      );
  }
}

export default App;