import React, { useState } from "react";

type PruebaProps = {
    title: string;
    children: React.ReactNode;
}

function prueba({title, children}:PruebaProps) {
    
    const [open, setOpen]= useState(false)
    return <div>
        <h3>{title}</h3>
        <div>
        <button onClick={()=>{setOpen(!open)}}>
        {open ?"Close": "Open"}</button>
        </div>
        {open &&<div>{children}</div>}
    </div>
    
}

export default prueba