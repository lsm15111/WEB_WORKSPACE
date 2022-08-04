import {useSelector} from 'react-redux';


function Child01(){
    let 체중 = useSelector( (state)=> state.체중)
    let 키 = useSelector( (state)=> state.키)
    return (<div>
        <h2>Child01</h2>
        <p>몸무게 : {체중}</p>
        <p>신장 : {키}</p>
    </div>);
}
export default Child01;


// state에 접근
// useSelector() - state 값을 사용할때
// useDispatch() - state의 type을 변경