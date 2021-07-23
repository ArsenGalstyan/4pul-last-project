import {React,useState} from 'react'
import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
import style from "./Slider.module.css"

export default function Slider(props) {
    const [id, setid] = useState(1)

   

    function slid(id){
        if(id == 0){
            setid(3)
        }
        else if(id == 4){
            setid(1)
        }
        return `a`+id
    }
    setInterval(()=>{
        setid(id+1)
    },10000)

    return (
        <div id={slid(id)} className={style.sliderclass} >
            <div className={style.infoStyle}>
                <h5>{props.poqrvernagir}</h5>
                <h1>{props.vernagir}</h1>
                <div><NavLink  className={style.butonStyle} to="/Courses">{props.buton}</NavLink></div>
           </div>
        </div>
    )
}
