// Redux, Zustand 등의 라이브러리 X -> React API로 전역 상태관리 하는 방법을 알아보자!
import { createContext, useContext, useState } from "react";
import { content } from "../events/convertStateEvent";
import { default as topics } from "../components/Nav/topics";

export const HEAD_MODE = "WELCOME"
export const NAV_MODE = "READ"

// Context API 할당
const ContentContext = createContext();

// Provider Component 생성 전역으로 올리고 싶은 자식 컴포넌트를 인자로 받음음
export const ContentProvider = ({ children }) => {
    const [compo, setCompo] = useState(content);
    const [topic, newTopic] = useState(topics);
    return (
        <ContentContext.Provider value={{ compo, setCompo, topic, newTopic}}>
            {children}
        </ContentContext.Provider>
    );
};

// Custom Hook 활용 
/**
 * useContext를 활용하여 createContext에 인자로 넘긴 value들을 사용. 
 * @returns 
 */
export const useContent = () => useContext(ContentContext);

