import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import StudentForm from './components/StudentForm';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentForm />

        <Modal>
          <div className='modal'>
            This is the Modal Window
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
