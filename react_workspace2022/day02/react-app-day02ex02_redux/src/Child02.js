import {useDispatch} from 'react-redux'

function Child02(){
    let dispatch = useDispatch();
    return (<div>
        <h3>Child02</h3>
        <button onClick={(e)=>dispatch({type:'체중증가'})}>몸무게 증가</button>
        <button onClick={(e)=>dispatch({type:'키증가'})}>키 증가</button>
    </div>);
}
export default Child02;