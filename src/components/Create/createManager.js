import topics from '../Nav/topics';
import { default as DefaultCreate } from '../Create/Create'

export const Creater = (e) => {
    e.preventDefault();
    return <DefaultCreate onCreate = {_createFunc}/>;
}
export const Defaulter = () => <div/>
const _createFunc = (_title, _body) => {
    const copyTopic = [...topics];
    copyTopic.push({id: 4, title: _title, body: _body});
    return copyTopic;
  }; 