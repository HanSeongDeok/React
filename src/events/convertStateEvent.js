import { _ConvertState, _RefreshComponent, StateConverter, headModeArticle } from "../components/Article/ArticleManager";
/**
 * 해당 형태의 then/catch 보다는 async/catch가 더 트랜디 하다고 하다.
 * 근데 난 이게 더 가독성도 좋고 편한거 같은데...
 * @async
 * @param {*} mode 
 * @returns 
 */
const _HeadEventAsync = (mode) => {
    return _ConvertState(mode)
        .then((mode) => _RefreshComponent(mode))
        .catch((error) => {
            console.error("ERROR:", error);
            throw error; 
        });
}
 
/**
 * @async
 * @param {*} mode 
 * @returns 
 */
const _HeadEventAsync2 = async (mode) => {
    try {
        const mode = await _ConvertState(mode);
        return await _RefreshComponent(mode);
    } catch (error) {
        console.error("ERROR:", error);
    }
}

export let content = headModeArticle;
const HeadConvert = (mode) => {
    return content = StateConverter
        .setMode(mode)
        .convert();
} 

const NavConvert = (mode, navInfo) => {
    return content = StateConverter
        .setMode(mode)
        .setNavInfo(navInfo)
        .convert();
}

export { HeadConvert, NavConvert }