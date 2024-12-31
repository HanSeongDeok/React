import DefaultArticle from "./Article";
import { HEAD_MODE } from "../../states/modes";

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

export const headModeArticle = () => <DefaultArticle title="WELCOME" body="HELLO WEB"/>;
export const navModeArticle = (topics) => <DefaultArticle title={topics.id} body={topics.body}/>;

/**
 * 하다보니 위 처럼 여러 함수를 export 해서 쓰는게 아닌 필요한 함수들을
 * 담은 객체를 export 하는게 더 깔끔하고 효율적일 듯.
 * 다만, 함수 자체도 필요시 export 하는 것도 나쁘지 않을 듯. 
 */
export const StateConverter = {
    mode: null,
    navInfo: {
        id: null,
        topics: null,
    },

    setMode(mode) {
        this.mode = mode;
        return this; 
    },

    setNavInfo(navInfo) {
        this.navInfo = navInfo;
        return this;
    },

    convert() {
        return this.mode === HEAD_MODE ? 
            headModeArticle : 
            navModeArticle(this.navInfo.topics) 
    }
};

export { _ConvertState, _RefreshComponent };