import React, { Component } from 'react';
import './App.css';
import TargetLine from './components/TargetLine';
import { InputNumber } from 'antd';
import { calBMI, getBMIColor } from './util';

class App extends Component {
  state= {inputHeight: 168}
  handleChange = value => {
    this.setState({
      inputWeight: value
    });
  }
  handleHeightChange = value => {
    this.setState({
      inputHeight: value
    });
  }
  render() {
    const { inputWeight, inputHeight } = this.state;
    const bmi = calBMI(inputWeight, inputHeight);

    return (
      <div className="App">
        <h3>梦想是长胖30斤！！</h3>
        <h4>満足できな！</h4>
        <p>start: 91斤 2018-8-5</p>
        <div style={{textAlign: 'center'}}>
          <TargetLine />
        </div>
        <p>your基础代谢率 5,246 千焦</p>
        <p>输入体重(kg)：</p>
        <InputNumber onChange={this.handleChange}></InputNumber>
        <p>输入身高(cm)：</p>
        <InputNumber value={inputHeight} onChange={this.handleHeightChange}></InputNumber>
        <p style={{ color: getBMIColor(bmi) }}>BMI：{ bmi }</p>
        <p>过轻：低于18.5</p>
        <p>正常：18.5-23.9</p>
        <p>过重：24-27</p>
        <p>肥胖：28-32</p>
        <p>非常肥胖, 高于32</p>
      </div>
    );
  }
}

export default App;
