import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

import Banner from './Banner';
import GameWindow from './GameWindow';

function Home(props) {
  return (
    <DocumentTitle title={`Ant Design Landing Page - ${props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
      <div className="home-wrapper">
        <Banner isMobile={props.isMobile} />
        <GameWindow isMobile={props.isMobile} />
      </div>
    </DocumentTitle>
  );
}

export default injectIntl(Home);
