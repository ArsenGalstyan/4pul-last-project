import React from 'react'
import { Parallax } from 'react-parallax'
import style from './Nav.module.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Nav(props) {
    return (
        <div>
            <Parallax bgImage="https://www.lifeofpix.com/wp-content/uploads/2018/05/308-name6012-ake-1-1600x1067.jpg" strength={600}  >
                <div className={style.paralax}>
                    <h1>{props.ejhight}</h1>
                    <span>
                        <Link to="/Home">Home</Link>
                        <i class="fas fa-chevron-right"></i>
                        <p>{props.ejlow}</p>
                    </span>
                </div>
            </Parallax>
        </div>
    )
}
