import './App.css';
import { default as DefaultHeader } from './components/Header/Header'
import { default as DefaultNav } from './components/Nav/Nav'
import { default as DefaultCreate } from './components/Create/Create'
import { HeaderAlert, NavAlert } from './events/alertEvent';
import topics from './components/Nav/topics';
import { ContentProvider, useContent } from './states/modes';

function App() {
  const test = useContent().topic;
  return (
    <div>
      <DefaultHeader title= "REACT" onChangeMode = {HeaderAlert}/>
      <DefaultNav topic = {useContent().topic} onChangeMode = {NavAlert}/>
      { useContent().compo }
      <DefaultCreate onCreate = {createFunc}/>
    </div>
  );
}

const createFunc = (_title, _body) => {
  const test = [...topics];
  test.push({id: 4, title: _title, body: _body});
  return test;
}; 

/**
 * Component App 위에 RootApp을 씌워 Provider로 넘긴 value 들을 해당 컴포넌트 내에서
 * 전역으로 사용하는 원리
 * @returns 
 */
const RootApp = () => (
  <ContentProvider>
    <App/>
  </ContentProvider>
)

//export default App;
export default RootApp;
