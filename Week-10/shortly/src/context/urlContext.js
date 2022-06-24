import {createContext, useContext} from 'react';

const UrlContext = createContext();



export function UrlProvider({children}) {
    return (
        <UrlContext.Provider value={{a: 10}}> 
            {children}
        </UrlContext.Provider>
    )
}

export function useUrl(){
    return useContext(UrlContext);
}
