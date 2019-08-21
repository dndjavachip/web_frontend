import React, { Component } from 'react';
import './loginstyle.css';


class Singup extends Component{
    render(){
        return(
        <form method="post" id="signup-form" action="https://dnd-javachip.appspot.com/managers">
            <div class="container">
                <p style={{textAlign: "center"}}>SIGN UP</p>
                <label for="uId">아이디</label>
                <input type="text" id="manager_id" name="manager_id" placeholder="ID">
                </input>
                <button type="button" class = "icbtn" onclick='idcheck()'>중복 확인</button>
                <div>
                    <label for="uPassword">비밀번호</label>
                    <input type="password" id="manager_pw" name="manager_pw" placeholder="Password">
                    </input>
                    <label for="uPassword">비밀번호 확인</label>
                    <input id="repeat_manager_pw" type="password"  placeholder="Repeat Password">
                    </input>
                </div>
            </div>
            <div class="container" style={{backgroundColor:"#f1f1f1"}}>
                <button type="submit">OK</button>
            </div>
        </form>
        );
    }
}

export default Singup;

