import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { IKContext } from "imagekitio-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IKContext
      publicKey={import.meta.env.VITE_APP_IMAGEKIT_KEY}
      urlEndpoint="https://ik.imagekit.io/mdyfxguru"
      transformationPosition="path"
      authenticationEndpoint="http://www.yourserver.com/auth"
    >
      <App />
    </IKContext>
  </React.StrictMode>
);
