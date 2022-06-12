import * as style from './about.module.scss';
import React from 'react';
import Header from '../components/Header';
import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../components/Footer';

import profilePic from '../images/ali.webp';
const About = ({ data, }) => {
    return (
        <>
          <Header hideHeader >
              <BreadCrumbs links={{
                  '/': 'Home',
                  '/about': 'About',
              }} />
              <div className={style.profile}>
                  <img src={profilePic} />
                  <h1>Adrian B.</h1>
                  <h6><span className={style.darker}>aka.</span> Adiber | 0Adiber</h6>
              </div>
              <hr />
              <h2>Skills</h2>
              <p>
                  Here I have listed some programming languages I use quite often. Also listed are the Cisco badges I attained during my education at the <a href="https://www.htl-kaindorf.at/">HTBLA Kaindorf</a>. 
              </p>
              <div className={style.badges}>
                  <a target="_blank" href="https://www.credly.com/badges/013f8b89-1b05-4af7-8e3e-d29a13673148/public_url"><img src="https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png" /></a>
                  <a target="_blank" href="https://www.credly.com/badges/6e2ad73b-97c6-46d0-af12-7f52963a007d/public_url"><img src="https://images.credly.com/size/680x680/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png" /></a>
                  <a target="_blank" href="https://www.credly.com/badges/da526c41-65a7-4a41-b55e-b9cebc9ff656/public_url"><img src="https://images.credly.com/size/680x680/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png" /></a>
                </div>
              <h2>Hacking</h2>
              <p>
                Cybersecurity enthusiast and proud co-founder of <a href="//ctftime.org/team/135809" target="_blank">B34nB01z</a>.
              </p>
              <h2>Gym</h2>
              <p>Gym addict... best <b>hardstyle</b> playlist: </p>
              
              <div className={style.soundcloud}>
                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1413771445&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </div>
              </Header>
          <Footer />
        </>
    );
};

export default About;