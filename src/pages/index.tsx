import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import * as style from './index.module.scss';
import { Link } from 'gatsby';

export default class Index extends React.Component {
  public render (): React.ReactElement {
    return (
      <>
        <Header>
          <div className={style.info}>
            <div>
              <h1>About</h1>
              <p>
                This is my (<a href="https://github.com/0Adiber">@Adiber</a>) official website.<br /><br />
                On here you can find information about me and also on the projects I am working on. <br /><br />
                Who am I? - check out the <Link to="/about">about</Link> page.
              </p>
            </div>

            <div>
              <h1>Projects</h1>
              <p>
                To get an insight into what I am working out, checkout the <Link to={`/projects`}>projects</Link> page, or visit my github profile.
              </p>
            </div>
            
            <div>
            <h1>Links</h1>
              <ul>
                <li><a href="https://github.com/0Adiber/0Adiber.github.io">Official Repo</a> - The source code of this website.</li>
              </ul>
            </div>
          </div>
          
        </Header>
        <Footer />
      </>
    );
  }
}
