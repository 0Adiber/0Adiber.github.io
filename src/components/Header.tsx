import React from 'react';
import * as style from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Typed from 'react-typed';
import { Link } from 'gatsby';

import hackerman from '../images/hackerman.png';
import background from '../images/background.png';
import ali from '../images/ali.png'

interface MainHeaderProps {
  children?: React.ReactElement|React.ReactElement[];
  hideHeader?: boolean;
}

interface MainHeaderState {
  banner: boolean;
}

export default class MainHeader extends React.Component<MainHeaderProps, MainHeaderState> {
  private header: HTMLElement;
  private article: HTMLElement;
  private scroll: HTMLButtonElement;

  public constructor (props) {
    super(props);
    this.state = {
      banner: props.hideHeader,
    };
  }

  public componentDidMount(): void {
    window.onscroll = e => {
      if (window.scrollY > 200)
        this.setState({ banner: true, });
      else
        this.setState({ banner: false, });
    };
  }

  private onScroll (): void {
    this.article.scrollIntoView({
      behavior: 'smooth',
    });
    this.scroll.blur(); 
  }

  public render (): React.ReactElement {
    return (
      <>
      
        { /* NAVBAR */ }

        <header className={style.banner}
          style={{
            transform: (this.state.banner || this.props.hideHeader) ? 'translateY(0)' : '',
          }}  
        >
          <Link to="/">
            <img src={ali} alt="Ali, not Muhammad" />
            <h1>
              <Typed
                strings={['Adiber', 'Adrian',]}
                typeSpeed={100}
                backSpeed={90}
                backDelay={3000}
                loop={true}
              />
            </h1>
          </Link>
        </header>


        { /* MAIN HEADER */ }

        <div ref={e => this.header = e} className={style.header}
          style={{
            display: this.props.hideHeader ? 'none' : 'block',
          }}
        >
          <div className={style.lightning + " " + style.flashfx}></div>

          <h1>
            Ad<span><Typed
              strings={['iber', 'rian',]}
              typeSpeed={100}
              backSpeed={90}
              backDelay={3000}
              loop={true}
            /></span>
          </h1>

          <img className={style.hackerman} src={hackerman} alt="Häckermän" />
          <div className={style.more} ref={e => this.scroll = e} onClick={this.onScroll.bind(this)}></div>
        </div>

        { /* CONTENT */ }

        <div ref={e => this.article = e} className={style.article}>
          <div className={style.content}>
              {this.props.children}
          </div>
        </div>
      </>
    );
  }
}