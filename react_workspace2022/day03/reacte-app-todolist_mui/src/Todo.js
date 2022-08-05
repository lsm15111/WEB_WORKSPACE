import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Button, Checkbox, IconButton, ListItemSecondaryAction, InputBase, ListItem,ListItemText,} from "@mui/material";
import { useState } from "react";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

function Todo({ item, onDeleteItem,updateItem }) {
    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] = useState(item.title);

    const deleteItemHandler = (e) => {
        // App.js의 onDeleteItem함수 호출
        onDeleteItem(item);
    };
    const onUpdateItem =(cmd)=>{
        const currItem = [...item];
        currItem.title = titleData;
        if(cmd === 'toggleChk'){
        currItem.done = !currItem.done;}
        updateItem(currItem);
    }

    return (<>
        <ListItem>
        <Checkbox
            checked={item.done}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onClick={(e)=>{
                onUpdateItem('toggleChk');
            }}
        />
        <ListItemText>
            <InputBase
            type="text"
            inputProps={{ "arial-label": "naked", readOnly: readOnly }}
            id={item.id}
            name={item.id}
            multiline={true}
            fullWidth={true}
            onChange={(e) => {
                setTitleData(e.target.value);
            }}
            onClick={(e)=>setReadOnly(false)}
            onKeyPress={(e) => {
                if(e.key === "Enter"){
                    onUpdateItem();
                }
            }}
            value={titleData}
            ></InputBase>
        </ListItemText>

        <ListItemSecondaryAction>
            <IconButton aria-label="Delete Todo" onClick={deleteItemHandler}>
            <DeleteOutline />
            </IconButton>
        </ListItemSecondaryAction>
        </ListItem>
    </>);
}
export default Todo;
