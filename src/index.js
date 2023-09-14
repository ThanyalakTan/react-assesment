import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Owner from './page/Owner';

const mockData = [
  {
    id: 0,
    firstname: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    firstname: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    firstname: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout />}>
          <Route path ='/' element = {<Home mockData={mockData} />} />
          <Route path='/owner' element = {<Owner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();