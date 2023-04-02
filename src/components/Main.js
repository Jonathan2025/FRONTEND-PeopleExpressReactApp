// 3 adding a basic boiler plate for now

// 6 Import useEffect and routes. In addition import the Index and show pages
import {useEffect, useState} from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


// 7 now we remove the return boiler plate and then we added the routes here

const Main = (props) => {
    return(
        <main>
            <Routes>
                {/* Here we defined 2 routes. When the user types in "/" path, the element prop will render the INDEX component*/}
                <Route path="/" element={<Index/>}/>
                <Route path="/people/:id" element={<Show/>}/>
            </Routes>
        </main>
    )
}

export default Main