import React from 'react'
import style from './Footer.module.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default function Footer() {
    return (
        <div>
            <div className={style.verevimas}>
                <h1>BECOME_AN_INSTRUCTOR__EN</h1>
                <Link to="/Courses">get_started_now__en</Link>
            </div>
            <div className={style.nerqev}>
                <span className={style.syun}>
                    <h3>ԻԷՆԷՍ ԲԻԶՆԵՍ ՍՔՈՒԼ ՍՊԸ</h3>
                    <p>ens_intro_text__en</p>
                    <hr />
                    <div>
                   <i class="far fa-envelope"></i>
                    <a>info@ens.am</a>
                    </div>
                    <hr />
                    <div>
                        <i class="fas fa-phone-alt"></i>
                          <a>055 88-22-99</a>
                   </div>
                   <hr />
                   <p>ք․ Երևան, Հերացու 20-56</p>
                </span>
                <span className={style.syun}>
                     <h3>USEFUL_LINKS__EN</h3>
                     <p>teachers__en</p>
                </span>
                <span className={style.syun}>
                    <h3>MAILING__EN</h3>
                    <p>mail_us__en</p>
                    
                </span>
            </div>
        </div>
    )
}
