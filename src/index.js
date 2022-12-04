import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//React-Router-Dom import

import './fonts/Noto/NotoSansThai_Condensed-Light.ttf';
import './fonts/Noto/NotoSansThai_Condensed-Regular.ttf';
import './fonts/Noto/NotoSansThai_Condensed-SemiBold.ttf';
import './fonts/NotoExtra/NotoSansThai_ExtraCondensed-Light.ttf';
import './fonts//NotoExtra/NotoSansThai_ExtraCondensed-Regular.ttf';
import './fonts/NotoExtra/NotoSansThai_ExtraCondensed-SemiBold.ttf';
import './fonts/NotoSemi/NotoSansThai_SemiCondensed-Light.ttf';
import './fonts/NotoSemi/NotoSansThai_SemiCondensed-Regular.ttf';
import './fonts/NotoSemi/NotoSansThai_SemiCondensed-SemiBold.ttf';
//Font import
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
