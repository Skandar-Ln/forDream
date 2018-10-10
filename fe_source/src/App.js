import React, { Component } from 'react';
import './App.css';
import TargetLine from './components/TargetLine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>梦想是长胖30斤！！</h3>
        <h4>焦るな！</h4>
        <p>start: 91斤 2018-8-5</p>
        <div style={{textAlign: 'center'}}>
          <TargetLine />
        </div>
        <p>your基础代谢率 5,246 千焦</p>
        <h4>跳级</h4>
        <p>
          91.5 -> 93.5 <span style={{color: 'red'}}>+2</span>
          <span style={{float: 'right'}}>18/8/22</span>
        </p>
        <p>
          96.7 -> 98 <span style={{color: 'red'}}>+1.3</span>
          <span style={{float: 'right'}}>18/10/10</span>
        </p>
      </div>
    );
  }
}

export default App;
