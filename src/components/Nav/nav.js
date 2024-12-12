import { memo } from 'react'
import { NavEvent } from '../../events/alertEvent';

const DefaultNav = memo((props) => {
    return (
      <nav>
        <ol>
          {props.topic.map((topic) => (
            <li key={topic.id}>
              <a href={`/read/${topic.id}`} onClick={(event)=>NavEvent(props, event, topic.id)}>
                {topic.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
});

export default DefaultNav;