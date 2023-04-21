// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/react-bootstrap/dist/react-bootstrap"
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import { IntlProvider } from 'react-intl';
// import English from "./lang/en-GB.json"
// import Chinese from "./lang/zh-HK.json"

// //get the language of the user
// const local = navigator.language

// //change the default language depends of user browser language
// let lang //degind the languae variable

// if(String(navigator.language).includes("en")){
//   lang = English
// }else{
//   lang = Chinese
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

// //font size of general content
// let GeneralStyle = "font-content md:leading-10 xs:leading-1 2xl:text-6xl md:text-2xl xs:text-4xl"

// root.render(
//   <React.StrictMode>
//     <IntlProvider locale={local} messages = {lang}>
//       <div className={GeneralStyle}>
//         <App />
//       </div>
//     </IntlProvider>
//   </React.StrictMode>
// );


//*********************************************************************** */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/react-bootstrap/dist/react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Wrapper from './hooks/Wrapper';
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));

//font size of general content
let GeneralStyle = "font-content md:leading-10 xs:leading-1 2xl:text-6xl md:text-2xl xs:text-4xl"

root.render(
  <Wrapper>
      <div className={GeneralStyle}>
        <App date={Date.now()}/>
      </div>
  </Wrapper>
);