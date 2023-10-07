import React from "react";
import {Routes,Route} from "react-router-dom"

import GitHubHomepage from "../github-homepage/GitHubHomepage.jsx"



const AllRoutes=()=>{
    return (
        <Routes>
         <Route path="/" element={<GitHubHomepage />} />
        

        </Routes>
    )
}

export default AllRoutes