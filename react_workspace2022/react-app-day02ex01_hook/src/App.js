import { useState } from 'react';
import './App.css';
function App() {

  let [phoneList, setPhoneList]=useState([
    {no:1,phoneNumber:"010-0000-0000",Email:"zxc1@naver.com"},
    {no:2,phoneNumber:"010-1111-1111",Email:"asd2@gmail.com"}
  ]);
  return (<>
    <div class="top">
      <h1>전화번호부</h1>
    </div>
    <div class="mid">
    이름: <input type="text"/>
    전화번호: <input type="text"/>
    이메일: <input type="text"/>
    </div>
    <table>{
      phoneList.map((item,i)=>{
        return(<>
          <ul key={i}>
            <li>{item.no}./{item.phoneNumber}/{item.Email}</li>
            <input type="button" value="삭제"/>
            <input type="button" value="이메일 전송"/>
          </ul>
      </>)})
      }
    </table>
  </>);
}

export default App;
