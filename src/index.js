import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router/routes';
import { BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
   <Routes />,
  </BrowserRouter>,
   
  document.getElementById('root')
);

