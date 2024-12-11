import { memo } from 'react'

const DefaultNav = memo(() => {
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

export default DefaultNav;