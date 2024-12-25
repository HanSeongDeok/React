import { memo } from "react";
import { HeadEvent } from "../../events/alertEvent";
import { HeadConvert } from "../../events/convertStateEvent";
import { useContent } from "../../states/modes";

const DefaultHeader = memo((props)=> {
  const { setCompo } = useContent();  
  return (
        <header>
          <h1>
            <a href='/' onClick={(event) => {
                HeadEvent(props, event);
                setCompo(HeadConvert("WELCOME"));
              }}>
              {props.title}
            </a>
          </h1>
        </header>
      );
});

export default DefaultHeader; 