import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';
import TodoList2 from './TodoList2';
import InputWork from './InputWork';

// 1. 클래스형 컴포넌트
// 2. 함수형 컴포넌트
// 3. 외부 파일에 컴포넌트 선언
function App() {
  return (
    <div>
      <h1>Hello LSM</h1>
      <TodoList2 title="할 일 목록"/>
    </div>
  );
}
export default App;