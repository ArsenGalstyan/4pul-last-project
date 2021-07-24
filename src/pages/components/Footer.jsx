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
                         <p>info@ens.am</p>
                    </div>
                    <hr />
                    <div>
                          <i class="fas fa-phone-alt"></i>
                          <p>055 88-22-99</p>
                   </div>
                   <hr />
                   <div>
                       <i class="fas fa-map-marker-alt"></i>
                      <p>ք․ Երևան, Հերացու 20-56</p>
                   </div>
                </span>
                <span className={style.syun}>
                     <h3>USEFUL_LINKS__EN</h3>
                     <div className={style.syun2}>
                        <i style={{color:"green",fontSize:10}} class="fas fa-chevron-right"></i>
                         <Link to="/About">teachers__en</Link>
                     </div>
                     <div className={style.syun2}>
                        <i style={{color:"green",fontSize:10}} class="fas fa-chevron-right"></i>
                         <Link to="/Courses">Top courses</Link>
                     </div>
                     <div className={style.syun2}>
                        <i style={{color:"green",fontSize:10}} class="fas fa-chevron-right"></i>
                         <Link to="/Home">The latest news</Link>
                     </div>
                     <div className={style.syun2}>
                        <i style={{color:"green",fontSize:10}} class="fas fa-chevron-right"></i>
                         <Link to="/Home">gallery__en</Link>
                     </div>
                     <div className={style.syun2}>
                        <i style={{color:"green",fontSize:10}} class="fas fa-chevron-right"></i>
                         <Link to="/About">success_stories__en</Link>
                     </div>
                </span>
                <span className={style.syun}>
                    <h3>MAILING__EN</h3>
                    <p>mail_us__en</p>
                    <br />
                    <Link className={style.button} to="/Contact">MAIL_EN</Link>
                    <br />
                    <br />
                    <hr />
                    <a className={style.icon} href="https://ens-courses.herokuapp.com/89"><i  class="fab fa-twitter"></i></a>
                    <a className={style.icon} href="https://ens-courses.herokuapp.com/89"><i class="fab fa-google-plus-g"></i></a>
                    <a  className={style.icon}href="https://www.facebook.com/ensaccounting"><i class="fab fa-facebook-square"></i></a>
                </span>
            </div>
        </div>
    )
}
