import React from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

import style from './index.module.scss';
import { Link } from 'gatsby';

export default class Index extends React.Component {
  public render (): React.ReactElement {
    return (
      <>
        <MainHeader>
          <div className="header">
            <div className="bg"></div>
            <div className="lightning flashfx"></div>
            <div className="text">
                <h1>Adiber</h1>
            </div>
            <div id="more" onClick={this.scrollMore}>
            </div>
          </div>
          <div className="content">
            <h1>About</h1>
            <p>
              This is my (<a href="https://github.com/0Adiber">@Adiber</a>) official website.<br /><br />
              On here you can find information about me and also on the projects I am working on. <br /><br />
              Who am I? - check out the <Link to="/about">about</Link> page.
            </p>
            <h1>Projects</h1>
            <p>
              To get an insight into what I am working out, checkout the <Link to={`/projects`}>projects</Link> page, or visit my github profile.
            </p>
            <h1>Links</h1>
            <ul>
              <li><a href="https://github.com/0Adiber/0Adiber.github.io">Official Repo</a> - The source code of this website.</li>
            </ul>
          </div>
          
        </MainHeader>
        <Footer />
      </>
    );
  }
}
