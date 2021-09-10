import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewComponent from './NewComponent';
import Header from './Header';
import Footer from './Footer';
import ComponentePrueba from './ComponentePrueba';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root2')
);

ReactDOM.render(
  <NewComponent/>,
  document.getElementById('root')
); */

ReactDOM.render(
  <Header/>,
  document.getElementById('root3')
);

/* ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
); */

ReactDOM.render(
  <ComponentePrueba genero="F"/>,
  document.getElementById('componentePrueba')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
