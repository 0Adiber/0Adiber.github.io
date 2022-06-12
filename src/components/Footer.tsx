import React from 'react';
import * as style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
  public render (): React.ReactElement {
    console.log(style)
    return (
      <footer className={style.footer}>
          <div className={style.footerTop}>
              <h3>Links</h3>
              <div className={style.footerLogos}>
                  <div className={style.footerWrapper}>
                      <a className={style.footerLink} href="https://twitter.com/Aadiber" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className={style.footerIcon} icon={faTwitter} />
                      </a>
                      <span>@Aadiber</span>
                  </div>
                  <div className={style.footerWrapper}>
                      <a className={style.footerLink} href="https://www.instagram.com/adib3r/" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className={style.footerIcon} icon={faInstagram} />
                      </a>
                      <span>@adib3r</span>
                  </div>
                  <div className={style.footerWrapper}>
                      <a className={style.footerLink} href="https://discord.gg/7uFGcAE" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className={style.footerIcon} icon={faDiscord} />
                      </a>
                      <span>@MurliGmbH</span>
                  </div>
                  <div className={style.footerWrapper}>
                      <a className={style.footerLink} href="https://github.com/0Adiber" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon className={style.footerIcon} icon={faGithub} />
                      </a>
                      <span>@0Adiber</span>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
};