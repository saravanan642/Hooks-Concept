import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import DataProvider from './store/DataProvider';
import { BrowserRouter } from 'react-router-dom';
import './Style.css/Tailwind.css';
import "./Style.css/style.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
<DataProvider>
 <App />
 </DataProvider>
 </BrowserRouter>
);
