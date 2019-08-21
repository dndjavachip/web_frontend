import React, { Component } from 'react';
import './loginstyle.css';


class Login extends Component{
    render(){
    
        return (
            <form method="post" id="login-form" action="https://dnd-javachip.appspot.com/auth/login">
   
               <div className="container">
                   <p style={{textAlign:'center'}}>LOGIN</p>
                   <label for="loginId">아이디</label>
                   <input type="text" id="loginId" name="id" placeholder="ID"></input>
                   <label for="loginPassword">비밀번호</label>
                   <input type="password" id="loginPW" name="pw" placeholder="Password">
                   </input>
                   <input type="text" style={{display: "none"}} name="account_type" value="manager">   
                   </input>
              </div>
               <button type="submit">로그인</button>
               <div>
                   <input type="checkbox" id="keepLogin" name="keepLogin">
                   </input>
                   <label for="keepLogin"><span>로그인 상태 유지</span></label>
               </div>
                   <div class="container" style={{backgroundColor:"#f1f1f1"}}>
                   <button type="button" class="signupbtn" onClick = {function(){
                       this.props.onChangePage();
                   }.bind(this)}> SignUp </button>
                   <span class="psw">Forgot <a href="/">password?</a></span>
               </div>
             </form>
       ); 
    }
}
export default Login;