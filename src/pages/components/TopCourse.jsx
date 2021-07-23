import React from 'react'
import style from './TopCourse.module.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function TopCourse(props) {
    return (
        <div className={style.main}>
            <div className={style.imgidiv}>
            <img src={props.imgurl}  />
            </div>
            <h2>Photoghaphy Master {props.masternumber}</h2>
            <p>admin | {props.data}</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using. It is a long established fact that a reader will be distracted by the readable content of a page when</p>
            <Link to="/courses">LEARN NOW</Link>
        </div>
    )
}
