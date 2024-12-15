import { memo } from 'react'
import { NavEvent } from '../../events/alertEvent';
import { NavConvert } from '../../events/convertStateEvent'; 
import topics from './topics';

const DefaultNav = memo((props) => {
    return (
      <nav>
        <ol>
          {props.topic.map((topic) => (
            <li key={topic.id}>
              <a href={`/read/${topic.id}`} onClick={(event)=>{
                NavEvent(props, event, topic.id);
                NavConvert("READ", {id: topic.id, topics: topic});
              }}>
                {topic.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
});

export default DefaultNav;