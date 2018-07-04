import {LogService} from "databoard-core-ui";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LogLevel } from "../node_modules/databoard-core-ui/dist/util/logging/LogService";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './style/index.less';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

const  s = new LogService("Master");
s.log(LogLevel.Info,"STARTED");

registerServiceWorker();
