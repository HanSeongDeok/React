import topics from "../Nav/topics";
import DefaultArticle from "./Article";
import { IdByState, ModeByState, HEAD_MODE } from "./modes";

const ConvertState = (_mode, _id, _topics) => {
    return new Promise((resolve) => {
        resolve({
            mode: _mode,
            id: _id,
            topics: _topics
        })
    });
}

const RefreshComponent = (_mode, _id, _topics) => {
    return new Promise((resolve) => {
        resolve(_mode === HEAD_MODE ? 
            _headModeArticle : 
            _navModeArticle(_id, _topics))
    });
}

const _headModeArticle = <DefaultArticle title="WELCOME" body="HELLO WEB"/>;
const _navModeArticle = (id, topics) => {
    for(let i=0; i < topics.length; i++) {
        if(topics[i].id === id) {
            <DefaultArticle title={topics[i].id} body={topics[i].body}/>
        }
    }
}

export { ConvertState, RefreshComponent };