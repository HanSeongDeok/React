import { memo } from 'react'
import { NavEvent } from '../../events/alertEvent';
import { NavConvert } from '../../events/convertStateEvent'; 
import { NAV_MODE } from "../Modes/modes";

const DefaultNav = memo((props) => {
    return (
      <nav>
        <ol>
          {props.topic.map((topic) => (
            <li key={topic.id}>
              <a href={`/read/${topic.id}`} onClick={(event)=>{
                NavEvent(props, event, topic.id);
                NavConvert(NAV_MODE);
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