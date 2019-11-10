import React from 'react';
// import logo from './logo.svg';
// https://react-bootstrap.github.io/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LeftMenu from './components/LeftMenu'
import Header from './components/Header'
import ListItem from './components/ListItem'


function App() {
  return (
    <div className="App">
      <LeftMenu></LeftMenu>
      <div className="App-right">
        <Header></Header>
        <ListItem></ListItem>
        {/* <Table></Table> */}
        
      </div>

    </div>
  );
}

export default App;
