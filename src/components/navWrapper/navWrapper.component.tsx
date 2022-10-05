import React from "react"
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer.component"
import { Header } from "../header/header.component"

export const NavWrapper = ()=>{
    return(
        <>        <Header/>
        <Outlet/>
        <Footer/></>

    )
}