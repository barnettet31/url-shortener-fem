import React, {createContext, useState} from 'react';
import {IUrl} from '../../api/urlShortener'
interface IContextProps {
    children?: React.ReactNode;
}
interface IUrlContext {
    data: IUrl[],
    setUrls: (data:IUrl)=>void; 
}

const urlIntialState:IUrlContext = {
    data:[],
    setUrls:(data)=>{}
};
const UrlContext = createContext<IUrlContext>(urlIntialState);


export const UrlProvider = ({children}:IContextProps)=>{
    const [data, setData] = useState<IUrl[]>([] as IUrl[]);
    const setUrls = (data:IUrl)=>{
        setData((prevState:IUrl[])=>{
            return [...prevState, data];
        })
    }
    const value = {
        data ,
        setUrls
    }
    return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>
}

