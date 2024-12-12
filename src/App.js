import logo from './logo.svg';
import './App.css';
import { default as DefaultHeader } from './components/Header/header'
import { default as DefaultArticle } from './components/Article/article'
import { default as DefaultNav } from './components/Nav/nav'
import { memo } from 'react'
import { HeaderAlert, NavAlert } from './events/alertEvent';
import topics from './components/Nav/topics';

function App() {
  return (
    <div>
      <DefaultHeader title= "REACT" onChangeMode = {HeaderAlert}/>
      <DefaultNav topic = {topics} onChangeMode = {NavAlert}/>
      <DefaultArticle title="WELCOME" body="HELLO WEB"/>
      
      {/*
        참고Dragon
        <FuncHeader/>
        <FuncNav/>
        <FuncArticle/>
      */}
    </div>
  );
}

/** 아래는 그냥 예시 */

/**
 * Funtional Components Header
 */
const FuncHeader = memo(()=>{
  return (
    <header>
      <h1><a href='/'>WEB</a></h1>
    </header>
  );
});

/**
 * Funtional Components Nav
 */
const FuncNav = memo(() => {
  return (
    <nav>
      <ol>
        <li><a href='/read/1'>HTML</a></li>
        <li><a href='/read/2'>CSS</a></li>
        <li><a href='/read/3'>JS</a></li>
      </ol>
    </nav>
  );
});

/**
 * Funtional Components Article
 */
const FuncArticle = memo(() => {
  return (
    <article>
      <h2>WELCOME</h2>
      HELLO REACT!
    </article>
  );
});

export default App;
