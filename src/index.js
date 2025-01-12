import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootApp from './App';
import reportWebVitals from './reportWebVitals';
import { memo } from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Link, NavLink, useParams } from 'react-router';

const Home = memo(() => {
  return (
    <div>
      <h1>Home</h1>
      Home...
    </div>
  )
});

const Topic = memo(()=> {
  return (
    <div>
      <h1>Topic</h1>
      Topic...
    </div>
  )
});

let contents = [
  {id:1, title: 'HTML', description: 'HTML is ...'},
  {id:2, title: 'HTML', description: 'HTML is ...'},
  {id:3, title: 'HTML', description: 'HTML is ...'},
]

const Topics = memo(() => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        <li><NavLink to="/topics/1"></NavLink></li>
        <li><NavLink to="/topics/2"></NavLink></li>
        <li><NavLink to="/topics/3"></NavLink></li>
      </ul>
      Topics...
    </div>
  )
});

const Contact = memo(() => {
  return (
    <div>
      <h1>Contact</h1>
      Contact...
    </div>
  )
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/topics' element={<Topics/>}/>
      <Route path='/contacts' element={<Contact/>}/>
    </Routes>
    <ul>
      <li><NavLink 
        to='/'
        className = {({ isActive }) =>
          isActive ? "active" : ""
        }> NAV_LINK_HOME </NavLink></li>
      <li><NavLink to='/topics'> NAV_LINK_TOPICS </NavLink></li>
      <li><NavLink to='/contacts'> NAV_LINK_CONTACTS </NavLink></li>
    </ul>
    <ul>
      <li><Link to='/'> LINK_HOME </Link></li>
      <li><Link to='/topics'> LINK_TOPICS </Link></li>
      <li><Link to='/contacts'> LINK_CONTACTS </Link></li>
    </ul>
    <ul>
      <li><a href='/'> HOME </a></li>
      <li><a href='/topics'> TOPICS </a></li>
      <li><a href='/contacts'> CONTACTS </a></li>
    </ul>
    <RootApp/>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
