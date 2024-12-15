import topics from "../Nav/topics";
import DefaultArticle from "./Article";
import { IdByState, ModeByState, HEAD_MODE } from "../Modes/modes";

const _ConvertState = (mode) => {
    return new Promise((resolve) => {
        resolve(mode)
    });
}

const _RefreshComponent = (mode, id, topics) => {
    return new Promise((resolve) => {
        resolve(mode === HEAD_MODE ? 
            headModeArticle : 
            navModeArticle(id, topics))
    });
}

const headModeArticle = <DefaultArticle title="WELCOME" body="HELLO WEB"/>;
const navModeArticle = (id, topics) => {
    for(let i=0; i < topics.length; i++) {
        if(topics[i].id === id) {
            <DefaultArticle title={topics[i].id} body={topics[i].body}/>
        }
    }
}

/**
 * 하다보니 위 처럼 여러 함수를 export 해서 쓰는게 아닌 필요한 함수들을
 * 담은 객체를 export 하는게 더 깔끔하고 효율적일 듯.
 * 다만, 함수 자체도 필요시 export 하는 것도 나쁘지 않을 듯. 
 * 트랜디 한가?? -> 
 */
export const StateConverter = {
    mode: null,
    navInfo: {
        id: null,
        topics: null,
    },

    setMode(mode) {
        this.mode = mode;
        const [_mode, _setMode] = ModeByState();
        _setMode(mode)
        return this; 
    },

    setNavInfo(navInfo) {
        this.navInfo = navInfo;
        const [id, setId] = IdByState();
        setId(navInfo.id)
        return this;
    },

    convert() {
        return this.mode === HEAD_MODE ? 
            headModeArticle : 
            navModeArticle(this.navInfo.id, this.navInfo.topics) 
    }
};

export { _ConvertState, _RefreshComponent, headModeArticle };