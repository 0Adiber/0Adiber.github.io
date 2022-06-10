import React from 'react';
import { Helmet } from 'react-helmet';

import '../style/global.scss';

export default class Meta extends React.Component {
  public render (): React.ReactElement {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Official website of @adiber. About me and Projects" />
          <title>Adiber</title>
          <link rel="canonical" href="https://0adiber.github.io/" />
        </Helmet>
        {this.props.children}
      </>
    );
  }
}