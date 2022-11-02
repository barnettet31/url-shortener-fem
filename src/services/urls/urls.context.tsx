import React, {createContext, useContext, useEffect, useState} from 'react';
import {IUrl} from '../../api/urlShortener'
import { getCurrentUser, getUrlDocs, setUrlDocs } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../authentication/auth.context';
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
export const UrlContext = createContext<IUrlContext>(urlIntialState);


export const UrlProvider = ({children}:IContextProps)=>{

    const [data, setData] = useState<IUrl[]>([] as IUrl[]);
    const context = useContext(UserContext);
    const setUrls = async (data:IUrl)=>{
        if(context?.user) await setUrlDocs(context.user, data);
        setData((prevState:IUrl[])=>{
            return [...prevState, data];
        })
    }
    const value = {
        data ,
        setUrls
    }
    useEffect(()=>{
      const fetchCurrentData = async ()=>  {
        if(!context?.user) return setData([]);
        const currentDocs = await getUrlDocs(context.user);
        setData((prevState:IUrl[])=>[...prevState, ...currentDocs ])
    }
    fetchCurrentData();

    },[context?.user])
    return <UrlContext.Provider value={value}>{children}</UrlContext.Provider>
}

