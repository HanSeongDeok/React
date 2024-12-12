import { memo } from "react";
import { HeadEvent } from "../../events/alertEvent";

const DefaultHeader = memo((props)=> {
    return (
        <header>
          <h1>
            <a href='/' onClick={(event) => HeadEvent(props, event)}>
              {props.title}
            </a>
          </h1>
        </header>
      );
});

export default DefaultHeader; 