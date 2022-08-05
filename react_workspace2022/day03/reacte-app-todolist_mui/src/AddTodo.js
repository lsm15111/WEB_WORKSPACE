import { Button, Grid, Input, Paper, TextField } from "@mui/material";
import {useState} from 'react';



function AddTodo({onAddItem}) {
    const [item, setItem] = useState({ id: "", title: "", done: false });
    const onButtonClick = (e) => {
        onAddItem(item);
    }

    const onEnterKeyPress = (e)=>{
        if(e.key === "Enter"){
        onButtonClick(e);
        setItem({ id: "", title: "", done: false });
    }};
    return (
    <Paper style={{ margin: "16px 0px", padding: "10px" }}>
        <Grid container>
        <Grid item xs={11} md={11} style={{paddingRight: "10px"}}>
            <Input
            fullWidth
            placeholder="할 일을 입력하세요"
            value={item.title}
            onChange={(e) => {
                let currItem = { ...item };
                currItem.title = e.target.value;
                setItem(currItem);
            }}
            onKeyPress={onEnterKeyPress}
            />
        </Grid>
        <Grid item xs={1} md={1}>
            <Button onClick={onButtonClick}>추가</Button>
        </Grid>
        </Grid>
    </Paper>
    );
}
export default AddTodo;
