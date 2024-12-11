import { memo } from 'react'

const DefaultArticle = memo(() => {
    return (
      <article>
        <h2>WELCOME</h2>
        HELLO REACT!
      </article>
    );
});

export default DefaultArticle; 