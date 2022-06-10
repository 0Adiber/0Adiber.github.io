import React from 'react';
import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
  public render (): React.ReactElement {
    return (
      <footer className={style.footer}>
        <div>
          <div>
            &copy; 2022 Adiber
          </div>
          <div>
            <a href="https://github.com/0Adiber/"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://twitter.com/Aadiber/"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com/adib3r"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://discord.gg/7uFGcAE"><FontAwesomeIcon icon={faDiscord} /></a>
          </div>
        </div>
      </footer>
    );
  }
};