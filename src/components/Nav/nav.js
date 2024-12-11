import { memo } from 'react'

const DefaultNav = memo((props) => {
    return (
      <nav>
        <ol>
          {props.topic.map((topic) => (
            <li key={topic.id}>
               <a href={`/read/${topic.id}`}>{topic.title}</a>
            </li>
          ))}
        </ol>
      </nav>
    );
});

export default DefaultNav;