import {React ,useState} from 'react'
import Header from './components/Header'
import Slider from './components/Slider.jsx'
import style from '../pages/Home.module.css'
import TopCourse from './components/TopCourse'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Parallax } from 'react-parallax'
import ModalImage from "react-modal-image";
import Footer from './components/Footer'



export default function Home() {
    const json =[{
        name:`John Doe`,
        masnagitutyun:`Microshop Crop.SEO`,
        texekutyun:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "`

    },
    {
        name:`Poghos`,
        masnagitutyun:`xadavik`,
        texekutyun:`Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one`
    },
    {
        name:`Petros`,
        masnagitutyun:`santexnik`,
        texekutyun:`Text l purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one`
    }]
 let num = 0
   
    const [info, setinfo] = useState(0)


    function mihataraj(){
        if(info >= 0 && info <2){
            setinfo(info+1)
        }
        else{
            setinfo(0)
        }
    }
    function mihathet(){
        if(info > 0 && info <=2){
            setinfo(info-1)
        }
        else{
            setinfo(2)
        }
    }   



    
    return (
        <div>
            <Header />
            <Slider vernagir="You can learn anything" buton="Start learning now !" poqrvernagir="You only have to know one thing"/>
            <div className={style.contentDiv}>
                <div className={style.vernagir}>
                    <h4>CHOOSE YOUR COURSES</h4>
                    <h2>TOP COURSES</h2>
                    <div className={style.course}>
                        <TopCourse masternumber="1" data="15 Jun 2020" imgurl="https://ens-courses.herokuapp.com/assets/images/courses-416018300842351607800591774.jpg"/>
                        <TopCourse masternumber="2" data="4 Sep 2020" imgurl="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
                        <TopCourse masternumber="3" data="23 Dec 2020" imgurl="https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png?n=ioc_home_bottomleft_4up_491x276.png"/>
                        <TopCourse masternumber="4" data="30 May 2020" imgurl="https://www.microsoft.com/ru-ru/microsoft-365/blog/wp-content/uploads/sites/54/2019/01/OfficeNews_365Mac-440x268.png"/>
                    </div>
                    <div className={style.Link}><Link to="/Courses">SEE ALL</Link></div>
                </div>
            </div>
            <div className={style.tvyalner}>
                <h1>tvyalner</h1>
                <div className={style.info}>
                    <div className={style.xumb}>
                        <h2>5+</h2>
                        <hr />
                        <p>Teachers</p>
                    </div>
                    <div className={style.xumb}>
                        <h2>432+</h2>
                        <hr />
                        <p>Members</p>
                    </div>
                    <div className={style.xumb}>
                        <h2>2168+</h2>
                        <hr />
                        <p>Courses</p>
                    </div>
                    <div className={style.xumb}>
                         <h2>6+</h2>
                         <hr />
                         <p>Teacherner</p>
                    </div>
    
                </div>
            </div>
            <Parallax bgImage="https://media.npr.org/assets/img/2020/03/13/gettyimages-667018224_wide-e69134a24ff79fd3a338ff83661815c6299e58bd-s800-c85.jpg" strength={600} blur={{min:-1,max:6}}>
                <div className={style.parallaxidiv}>
                    <div className={style.textidiv}>
                         <span className={style.klorbutton} onClick={mihathet}> - </span>
                        <div className={style.globalinfo}>
                            <p className={style.infodiv}>{json[info].texekutyun}</p>
                            <h4>{json[info].name}</h4>
                            <p>{json[info].masnagitutyun}</p>
                         </div>
                         <span className={style.klorbutton} onClick={mihataraj}> + </span>
                    </div>
                </div>
            </Parallax>
            <div className={style.galireya}>
                <h3>SEE AND FEEL IT</h3>
                <h1>PICTURES AND GALLERY</h1>
                <div className={style.imgdiv}>
                  <ModalImage className={style.mod} small="https://ens-courses.herokuapp.com/assets/images/gallery-picture-11602534063961.jpg" large="https://ens-courses.herokuapp.com/assets/images/gallery-picture-11602534063961.jpg"/>
                  <ModalImage className={style.mod} small="https://ens-courses.herokuapp.com/assets/images/gallery-picture-21602534392050.jpg" large="https://ens-courses.herokuapp.com/assets/images/gallery-picture-21602534392050.jpg"/>
                  <ModalImage className={style.mod} small="https://ens-courses.herokuapp.com/assets/images/gallery-picture-31602535877810.jpg" large="https://ens-courses.herokuapp.com/assets/images/gallery-picture-31602535877810.jpg"/>
                  <div>
                  <ModalImage className={style.mod} small="https://ens-courses.herokuapp.com/assets/images/gallery-picture-61602535916009.jpg" large="https://ens-courses.herokuapp.com/assets/images/gallery-picture-61602535916009.jpg"/>
                  <ModalImage className={style.mod} small="https://ens-courses.herokuapp.com/assets/images/gallery-picture-41602535956084.jpg" large="https://ens-courses.herokuapp.com/assets/images/gallery-picture-41602535956084.jpg"/>
                  </div>
                </div>
            </div>
            <div className={style.erkrordcontent}>
                <div className={style.texter}>
                    <h3>THE LATEST NEWS</h3>
                    <h1>ALL ABOUT EDUGATE UPDATES</h1>
                </div>
                <div className={style.tablica}>
                    <img src="https://img.freepik.com/free-photo/designer-work-office_158595-1206.jpg?size=626&ext=jpg" />
                    <div style={{padding:30}}>
                        <h2>E-Learn 2015 - World Conference On Edugate Website</h2>
                        <p>Admin | 14 Oct 2020</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ultricies metus. Donec ac ex porta libero venenatis sodales. Sed efficitur eget risus sed molestie. Nulla . Sed efficitur eget risus sed molestie. Nulla  Sed efficitur eget risus sed molestie. Nulla  Sed efficitur eget risus sed molestie. Nulla </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
