 
 import styled from "styled-components";
 import { useState } from "react";
 const Form=styled.form`   box-sizing: border-box;`;

const H1 =styled.h1`text-align: center;
padding: 10px  30px;
color: #04072F;
font-family: Poppins;
font-size: 48px;
font-weight: 700;
line-height: 53px;
letter-spacing: 0em;`;

const LoginPage= styled.div`
    width: 824px;
    height: 555px;
    margin-top: 243px;
   margin-left: 150px;
   background:#FFFFFF;
   box-shadow: 0 8px 16px rgba(0,0,0,.3);`;
   const TextField=styled.div`margin: 20px ;`;

   const Label1=styled.label`
   font-size: 20px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #737B86;
`;

const Input=styled.input`
width: 700px;
height: 56px;
top: 496px;
left: 944px;
border-radius: 8px;
padding: 0 10px;
border: 1px solid silver;
font-family: Poppins;
font-size: 18px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
color:
#737B86;`;
const Label=styled.label`
font-family: Poppins;
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`;

 const CheckBox=styled.input`
margin-left: 30px ;
margin-bottom: 20px;
font-family: Poppins;
font-size: 18px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
`;

  const H4=styled.h4`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
    color:#04072F;`;

    const Button=styled.input`
    width: 538px;
    height: 56px;
    align-self:center;
    background-color: #1575A7;
    border: none;
    outline: none;
    cursor: pointer;
    text-transform: lowercase;  
    color: white;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align:center;`;

    const Span=styled.span`  
    color:#F78719;  
    position: relative;
    left:620px;
    bottom: 100px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;`;
    
   

    const InnerSpan=styled.span`   
    font-family: Poppins;
    color:#F78719;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;`;
    function Login() {
    const [username,usernameupdate]= useState('');
    const [password,passwordupdate]=useState('');
    const proceedLogin =(e)=>{
    e.preventDefault();
 }

    return (

        <LoginPage>
           <H1> Login</H1> 
           <Form  >
            <TextField>
            <Label > Login ID</Label>
            <Input type="text" value={username} onChange={e=> usernameupdate(e.target.value)}  placeholder="Enter Login ID "required></Input>
            </TextField>

            <TextField>
            <Label > password</Label>
            <Input type="password" value={password}  onChange={e=> passwordupdate(e.target.value)} placeholder="Enter Password"required></Input>
            </TextField>
            <div >
            <CheckBox type="checkbox" id="remember"></CheckBox>
            <Label1 htmlFor="label" > Remember me</Label1>
            </div>
            <div>
            <CheckBox type="checkbox"  id="" required></CheckBox>
            <Label1 htmlFor="Agree" > Agree to </Label1><InnerSpan> Terms & conditions</InnerSpan>
            </div>
            <Span >change Password </Span> 
            <Button type="submit" onSubmit={proceedLogin}  value="login" ></Button>
            <H4> Don't have an account? <InnerSpan> 
                register here  </InnerSpan> </H4>
           </Form>
         
        </LoginPage>

    )
}

export default Login;
