import React, { Component } from 'react';
import './App.css';
import TargetLine from './components/TargetLine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TargetLine />
        <div style={{textAlign: 'left'}}>
          <p>your基础代谢率 5,246 千焦</p>
          <h4>跳级</h4>
          <p>
            91.5 -> 93.5 <span style={{color: 'red'}}>+2</span>
            <span style={{float: 'right'}}>18/8/22</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
