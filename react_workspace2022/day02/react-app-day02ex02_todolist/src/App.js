import './App.css';
import {useState} from 'react';



function App() {
  const [todo,setToDo] = useState("");
  
  const [todoList,setToDoList] = useState([
    {no:1,todo:"물 마시기"},
    {no:2,todo:"운동 하기"}
  ]);
  
  function saveToDo(todo){
    let tno = todoList.length + 1;
    let newData = {no:tno,todo:todo}
    let newList = [...todoList, newData]; // (...) = 기존의 리스트를 복제해옴
    setToDoList(newList);
  }
  return (<>
    <div className="top">
      <h2>To Do List</h2>
    </div>
    <div>
    <input type="text" className="inputText" value={todo} onChange={(e)=>{
            setToDo(e.currentTarget.value);}}></input>
        <button className="AddBtn" >+</button>
        <select className="scrollTag">
          <option>All</option>
        </select>

    </div>
    <div>
      <table>
        <thead>
        
        </thead>
        <tbody>
          {todoList.map((item,i)=>{
          return (<tr key={i}>
            <td className="todoText">{item.todo}</td>
            <td><button className="CheckBtn">체크</button></td>
            <td><button className="DeleteBtn">삭제</button></td>
          </tr>);
        })}
        </tbody>
      </table>
    </div>
  </>);
}
export default App;