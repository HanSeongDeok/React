import logo from './logo.svg';
import './App.css';
import { default as DefaultHeader } from './components/Header/Header'
import { default as DefaultNav } from './components/Nav/Nav'
import { memo, useState } from 'react'
import { HeaderAlert, NavAlert } from './events/alertEvent';
import { ConvertState, RefreshComponent } from './components/Article/ArticleManager';
import topics from './components/Nav/topics';
import { content } from './events/convertStateEvent'; 

function App() {
  return (
    <div>
      <DefaultHeader title= "REACT" onChangeMode = {HeaderAlert}/>
      <DefaultNav topic = {topics} onChangeMode = {NavAlert}/>
      { content }
    </div>
  );
}

export default App;
