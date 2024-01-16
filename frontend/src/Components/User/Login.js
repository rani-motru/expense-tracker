import { useState } from "react"
import styled from 'styled-components'
import { useLogin } from "../../hooks/useLogin"


const Login = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }
    return (
        <SignStyled>
        <form className="login" onSubmit={handleSubmit}>
            <h3>Sign In</h3>

            <label>Email-id : </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br></br>
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <br></br>
            <center>
            <button disabled={isLoading}> Enter  </button></center>
            {error && <div className="error">{error}</div>}
        </form>
       
        </SignStyled>
    )
}

export default Login

const SignStyled = styled.div`
    grid-column: 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    .login{
        background-color: #F596AE;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .login button {
        margin-top: 15px; 
        margin-right: auto;
        padding: 4px;
        justify-content: center;
    }
  
  `;