import { memo } from "react";
import { HeadEvent } from "../../events/alertEvent";
import { HeadConvert } from "../../events/convertStateEvent";

const DefaultHeader = memo((props)=> {
    return (
        <header>
          <h1>
            <a href='/' onClick={(event) => {
                HeadEvent(props, event);
                HeadConvert("WELCOME");
              }}>
              {props.title}
            </a>
          </h1>
        </header>
      );
});

export default DefaultHeader; 