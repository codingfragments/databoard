import {
    LogLevel,
    LogService
} from "@databoard/core-ui-service/lib/util/logging";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./style/index.less";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);

const LS = new LogService("KK");
LS.log(LogLevel.Info, "KLK");

registerServiceWorker();
