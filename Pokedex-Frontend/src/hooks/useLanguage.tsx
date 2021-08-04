import React, {useEffect, useState} from "react";

export enum LanguageEnum {
    Chinese = "zn",
    English = "en"
}

interface ContextValue {
    language: LanguageEnum;
}

export const LanguageContext = React.createContext<ContextValue | undefined>({
    language: LanguageEnum.English,
});

export const useLanguage = () => {
    const [language, setLanguage] = useState("");

    useEffect(() => {
        if (!window.localStorage.getItem("language") ||
            window.localStorage.getItem("language") === LanguageEnum.English) {
            window.localStorage.setItem("language", LanguageEnum.English);
        }
        const initialLanguage = window.localStorage.getItem("language");
        if (initialLanguage) setLanguage(initialLanguage);
    }, []);


    return {language, setLanguage};
};

export interface Language {
    language: string;
}
