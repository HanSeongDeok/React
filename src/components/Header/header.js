import { memo } from "react";
const DefaultHeader = memo((props)=> {
    return (
        <header>
          <h1><a href='/'>{props.title}</a></h1>
        </header>
        );
});

export default DefaultHeader; 