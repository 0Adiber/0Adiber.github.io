import style from './about.module.scss';
import React from 'react';
import MainHeader from '../components/MainHeader';
import BreadCrumbs from '../components/BreadCrumbs';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';

import profilePic from '../images/ali.png';
const About = ({ data, }) => {
    return (
        <>
          <MainHeader hideHeader >
              <BreadCrumbs links={{
                  '/': 'Home',
                  '/about': 'About',
              }} />
              <div className={style.profile}>
                  <img src={profilePic} />
                  <h1>Adrian B.</h1>
                  <h6><span className={style.darker}>aka.</span> Adiber, 0Adiber<span className={style.darker}>...</span></h6>
              </div>
              <hr />
              <h2>Skills</h2>
              <p>
                  Some programming languages I use from time to time + the Cisco badges I attained during my education at the <a href="https://www.htl-kaindorf.at/">HTBLA Kaindorf</a>. 
              </p>
              <div>
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="013f8b89-1b05-4af7-8e3e-d29a13673148" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="6e2ad73b-97c6-46d0-af12-7f52963a007d" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="da526c41-65a7-4a41-b55e-b9cebc9ff656" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
              </div>
              <h2>Hacking</h2>
              <p>
                  Member of LosFuzzys. Co-Founder of <a href="//ctftime.org/team/135809">B34nB01z</a>.
              </p>
              <h2>Gym</h2>
              <p>Gym addict... best hardstyle playlist: *todo* </p>
          </MainHeader>
          <Footer />
        </>
    );
};

export default About;