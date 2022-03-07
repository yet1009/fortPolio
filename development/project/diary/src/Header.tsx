import React, { Component } from 'react';
import Loginpg from './Loginpg'





function Header() {

    

    return(
        <header id="header" className="header">
            <div className="header_wrap">
                <h1 className="title">Daily Diary</h1>
                <div className="btn_box">
                    {/* <button type="button" className="btn btn_del" title="삭제"></button> */}
                    <button type="button" className="btn btn_login" title="로그인" onClick= { () => {} } ></button>
                </div>
                <div className="btn_box">
                    <ul>
                        <li>
                            <button type="button" className="btn btn_calendar" title="달력"></button>
                        </li>
                        <li>
                            <button type="button" className="btn btn_save" title="저장"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}


export default Header;