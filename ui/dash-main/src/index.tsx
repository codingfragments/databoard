import * as UIServices from 'databoard-core-ui';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style/index.less';





ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

const  s = new UIServices.LogService("Master");
s.log(s.Level,"STARTED");

registerServiceWorker();
