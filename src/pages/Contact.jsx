import {React,useState} from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import style from './Contact.module.css'
import Contactner from "./components/Contactner"


export default function Contact() {
    const [namevalue, setnamevalue] = useState(``)
    const [mailvalue, setmailvalue] = useState(``)

    function nameinp(e){
        if(e.target.value.length >= 3 ){
            setnamevalue(`good`)
        }
        else{
            setnamevalue(`error`)
        }
        console.log(namevalue,1,e.target.value);
    }
    function mailinp(e){
        if(e.target.value.indexOf(`@mail.ru`) !== -1 || e.target.value.indexOf(`@gmail.com`) !== -1 ){
            setmailvalue(`good2`)
        }
        else{
            setmailvalue(`error2`)
        }
        console.log(mailvalue,2,e.target.value);
    }
    return (
        <div>
            <Header />
            <Nav ejlow="Contact" ejhight="CONTACT" />
            <div className={style.map}>
                <iframe className={style.mape} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6096.034975716072!2d44.51296485326481!3d40.1864242599334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1627216126023!5m2!1sen!2sus" style={{allowfullscreen:"", loading:"lazy",}}></iframe>
            </div>
            <div className={style.Contactner}>
                <Contactner icon="fas fa-map-marker-alt" vernagir="COME_TO__EN" info={["adress__en"]}/>
                <Contactner icon="fas fa-phone-alt" vernagir="CALL_TO__EN" info={["055 88-22-99","043 88-22-99","093 51-39-88","060 44-22-83","010 50-07-40"]}/>
                <Contactner icon="far fa-envelope" vernagir="CONNECT__EN" info={["info@ens.am"]}/>
            </div>
            <div className={style.formaidiv}>
                 <h1>leave_message__en</h1>
                <form className={style.forma} action="">
                    <div className={style.inpuner}>
                        <input className={namevalue} defvalue={namevalue} placeholder="Name" type="text" onInput={nameinp}/>
                        <input className={mailvalue} defvalue={mailvalue} placeholder="Mail"  type="text" onInput={mailinp}/>          
                </div>
                <br />
                <div className={style.textareaidiv}>
                <textarea className={style.textar} placeholder="message" id="" cols="30" rows="10"></textarea>
                </div>
                <br />
                </form>
            </div>
            <Footer />
        </div>
    )
}
