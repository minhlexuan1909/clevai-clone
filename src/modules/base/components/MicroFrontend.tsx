/* eslint-disable no-empty */
import React from "react";
import { useEffect } from "react";

type Props = {
  appName: string;
  host: string | undefined;
  history: any;
};

const MicroFrontend = ({ appName, host, history }: Props): JSX.Element => {
  useEffect(() => {
    try {
      const scriptId = `micro-frontend-script-${appName}`;

      if (document.getElementById(scriptId)) {
        renderMicroFrontend();
        // return;
      } else {
        fetch(`${host}/asset-manifest.json`)
          .then((res) => res.json())
          .then((manifest) => {
            manifest["entrypoints"].map((entry: any) => {
              if (entry.endsWith(".css")) {
                const link = document.createElement("link");
                link.id = scriptId;
                link.href = `${host}/${entry}`;
                link.onload = renderMicroFrontend;
                link.rel = "stylesheet";
                document.head.appendChild(link);
              } else {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}/${entry}`;
                script.onload = renderMicroFrontend;
                document.head.appendChild(script);
              }
              return null;
            });
          });
      }
    } catch (error) {}
    return () => {
      try {
        window[`unmount${appName}`] &&
          window[`unmount${appName}`](`${appName}-container`);
      } catch (error) {}
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderMicroFrontend = (): void => {
    window[`render${appName}`] &&
      window[`render${appName}`](`${appName}-container`, history);
  };
  return <main id={`${appName}-container`} />;
};

export default MicroFrontend;
