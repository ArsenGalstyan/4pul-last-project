import Header from './components/Header'
import React from 'react'
import { Parallax } from 'react-parallax'
import style from './Courses.module.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer'
import TopCourse from './components/TopCourse';


export default function Courses() {
    return (
        <div>
            <Header />
            <div>
                <Nav ejlow="Courses" ejhight="COURSES" />
                <div className={style.decor}>
                   <></>
                 </div>
                 <div className={style.content}>
                     <h1 style={{textAlign:"center"}}>OUR COURSES</h1>
                     <h5 style={{textAlign:"center"}}>Courses_sub_title__en</h5>
                 <div className={style.course}>
                        <TopCourse masternumber="1" data="15 Jun 2020" imgurl="https://ens-courses.herokuapp.com/assets/images/courses-416018300842351607800591774.jpg"/>
                        <TopCourse masternumber="2" data="4 Sep 2020" imgurl="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
                        <TopCourse masternumber="3" data="23 Dec 2020" imgurl="https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png?n=ioc_home_bottomleft_4up_491x276.png"/>
                        <TopCourse masternumber="4" data="30 May 2020" imgurl="https://www.microsoft.com/ru-ru/microsoft-365/blog/wp-content/uploads/sites/54/2019/01/OfficeNews_365Mac-440x268.png"/>
                        <TopCourse masternumber="5" data="25 May 2020" imgurl="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
                        <TopCourse masternumber="6" data="14 Sep 2020" imgurl="https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png?n=ioc_home_bottomleft_4up_491x276.png"/>
                        <TopCourse masternumber="7" data="1 Nov 2020" imgurl="https://www.microsoft.com/ru-ru/microsoft-365/blog/wp-content/uploads/sites/54/2019/01/OfficeNews_365Mac-440x268.png"/>
                        <TopCourse masternumber="8" data="26 Jun 2020" imgurl="https://ens-courses.herokuapp.com/assets/images/courses-416018300842351607800591774.jpg"/>
                    </div>
                 </div>
                 <Footer />
            </div>
         
        </div>
    )
}
