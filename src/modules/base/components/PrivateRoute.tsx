import React from "react";
import { MicroFrontend } from "./index";
import { createBrowserHistory } from "history";

const PrivateRoute = ({ host, appName }: { host: any; appName: any }) => {
  let history = createBrowserHistory();

  return <MicroFrontend host={host} appName={appName} history={history} />;
};

export default PrivateRoute;
