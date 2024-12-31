import { memo } from "react";
import { useContent, NAV_MODE } from "../../states/modes";
import { Defaulter } from "./createManager";
import { NavConvert } from "../../events/convertStateEvent";

const DefaultCreate = memo((props) => {
    // useContent로 가져온 상태 변수들은 Component 내에서만 사용이 가능하다.
    const {newTopic, setPage, setCompo} = useContent();
    return (
      <article>
        <h2>Create</h2>
        <form onSubmit={e=>{
            e.preventDefault(); 
            let newNav = props.onCreate(e.target.title.value, e.target.body.value);
            newTopic(newNav);
            setPage(Defaulter());
            setCompo(NavConvert(NAV_MODE, {id: 4, topics: newNav[newNav.length-1]}))
        }}>
            <p><input type="text" name="title" placeholder="title"/></p>
            <p><textarea name="body" placeholder="body"/></p>
            <p><input type="submit" value="Create"/></p>
        </form>
      </article>
    );
});
export default DefaultCreate  