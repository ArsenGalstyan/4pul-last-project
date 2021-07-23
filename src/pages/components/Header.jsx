import React from 'react'
import style from './Header.module.css'
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

export default function Header() {
    return ( 
        <div>
            <div className={style.verev}>
                <div className={style.left}>
                <span>
                 <i class="far fa-envelope"></i>
                    <a>info@ens.am</a>
                </span>
                   <span>
                   <i class="fas fa-phone-alt"></i>
                      <a>055 88-22-99</a>
                   </span>
                    
                </div>
                <div className={style.right}>
                    <span className={style.soccanc}>
                    <a href="https://ens-courses.herokuapp.com/89"><i class="fab fa-twitter"></i></a>
                    <a href="https://ens-courses.herokuapp.com/89"><i class="fab fa-google-plus-g"></i></a>
                    <a href="https://www.facebook.com/ensaccounting"><i class="fab fa-facebook-square"></i></a>
                    </span>
                    <a href="https://iu.ens.am/cport/">Sign_in__en</a>
                </div>
            </div>
            <div className={style.head2}>
                <div className={style.headmas}>
                    <NavLink to="/Home" activeClassName="selected">Home</NavLink>
                    <NavLink to="/About" activeClassName="selected">About</NavLink>
                    <NavLink to="/Courses" activeClassName="selected">Courses</NavLink>
                    <NavLink to="/Contact" activeClassName="selected">Contact</NavLink>
                </div>
            </div>
        </div>
    )
}
