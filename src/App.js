import React, { useState } from 'react'
import ContainerMain from "./componets/main/container-main";
import ContainerUser from "./componets/user/container-user";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./componets/header/Header";
import ContainerEdit from "./componets/edit/edit-container";
import ContainerCreater from "./componets/create/creater-container";

function App() {
    const [useId, fUserId] = useState(0);
    function UserId(id) {
        fUserId(id)
        console.log(id)
    }


    return (
        <BrowserRouter>
            <Header/>
            <div className="App">
                <Route exact path="/" render={()=>{
                    return <ContainerMain UserId={UserId}/>
                }} />
                <Route path="/PageUser/" render={()=>{
                    return <ContainerUser useId={useId}/>
                }} />
                <Route path="/PageEditUser/" render={()=>{
                    return <ContainerEdit userId={useId}/>
                }} />
                <Route path="/PageCreaterUser/" render={()=>{
                    return <ContainerCreater/>
                }} />
            </div>
        </BrowserRouter>
    );
}

export default App;
