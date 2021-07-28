import React from 'react'
import style from './Contactner.module.css'

export default function Contactner(props) {
    return (
        <div className={style.cont}>
             <i class={props.icon}></i>
             <p>{props.vernagir}</p>
             <div>
                 {props.info.map((el,i)=>{
                     return <p key={i}>{el}</p>
                 })}
              </div>   
        </div>
    )
}
