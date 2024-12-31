import './App.css';
import { default as DefaultHeader } from './components/Header/Header'
import { default as DefaultNav } from './components/Nav/Nav'
import { HeaderAlert, NavAlert } from './events/alertEvent';
import { ContentProvider, useContent } from './states/modes';
import { Creater } from './components/Create/createManager';

function App() {
  const { currentPage, setPage } = useContent();
  return (
    <div>
      <DefaultHeader title= "REACT" onChangeMode = {HeaderAlert}/>
      <DefaultNav topic = {useContent().topic} onChangeMode = {NavAlert}/>
      { useContent().compo }
      <ul>
        <li><a href='/create' onClick={e => setPage(Creater(e))}> CREATE </a>
          { currentPage }
        </li>
      </ul>
    </div>
  );
}

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
