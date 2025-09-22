import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoAddForm from './features/tool/TodoAddForm';
import TodoView from './features/tool/TodoView';

function App() {
  return (
    <>
    <h1 className='text'>Tods apps</h1>
    <TodoAddForm/>
    <TodoView/>
    </>
  );
}

export default App;
