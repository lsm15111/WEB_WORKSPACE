import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import {useState} from 'react';
import Todo from './Todo';
function App() {
  const [items, setItems] = useState([
    {id:"0", title:"hello world 1", done:true},
    {id:"1", title:"hello world 1", done:false},
    {id:"2", title:"hello world 2", done:true}
  ]);

  const htmlTmp = (<Paper>
    <List>
      {items.map((item,i)=>(<Todo key={item.id} item={item}/>))}
    </List>
  </Paper>)
  return (
    <div>
      <Container maxWidth="md">
      <div> 
        {htmlTmp}
      </div>
      </Container>
    </div>
  );
}
export default App;