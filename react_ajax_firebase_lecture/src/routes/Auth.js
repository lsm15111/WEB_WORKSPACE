import { useState } from "react";

const Auth = ({onLogin}) => {
    const [email, setEmail] = useState("user01@test.com");
    const [password, setPassword] = useState("123456");
    return (<>
        <h3>Auth</h3>
        <form>
            <input type="email" value={email} onChange={e=>{setEmail(e.currentTarget.value)}} placeholder="Email" required/><br/>
            <input type="password" value={password} onChange={e=>{setPassword(e.currentTarget.value)}}  placeholder="Password" required />
            <input type="submit" onClick={(e)=>{
                e.preventDefault();
                onLogin(email, password);
            }} value="Log in" />
        </form>
    </>)
}


export default Auth;