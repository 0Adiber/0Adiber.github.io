import React from 'react';
import * as style from './Header.module.scss';
import Typed from 'react-typed';
import { Link } from 'gatsby';

import ali from '../images/ali.webp'

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
  
    const flies: React.ReactElement[] = [];
    for (let i = 0; i < 20; i++) {
      flies.push(<div key={`firefly-${i}`} className={style.firefly}></div>);
    }

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

        <div ref={e => this.header = e as HTMLElement} className={style.header}
          style={{
            display: this.props.hideHeader ? 'none' : 'block',
          }}
        >

          {flies}

          <h1>
            Ad<span><Typed
              strings={['iber', 'rian',]}
              typeSpeed={100}
              backSpeed={90}
              backDelay={3000}
              loop={true}
            /></span>
          </h1>

          <div className={style.more} ref={e => this.scroll = e as unknown as HTMLButtonElement} onClick={this.onScroll.bind(this)}></div>
        </div>

        { /* CONTENT */ }

        <div ref={e => this.article = e as HTMLDivElement} className={style.article}>
          <div className={style.content}>
              {this.props.children}
          </div>
        </div>
      </>
    );
  }
}