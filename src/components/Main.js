// 3 adding a basic boiler plate for now

// 6 Import useEffect and routes. In addition import the Index and show pages
import {useEffect, useState} from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"



const Main = (props) => {
    //10 ) now we will need to have API calls and then pass it down to index and show components
    // we need to set the state 
    const [people, setPeople] = useState(null)
    // typically you would put the URL in an ENV file, you would hide this
    // this URL would be the deployed route that you are using 
    const URL = "http://localhost:4000/people/"
    
    
    //11 we will make an API call within the getPeople
    const getPeople = async() => {
        const response = await fetch(URL)
        const data = await response.json()
        // always console.log the data we get so we know whats inside of it
        console.log(data.data)
        // here we are UPDATING the state of the people component with the data that is recieved
        setPeople(data.data)
    }
    
    
    
    // 7 now we remove the return boiler plate and then we added the routes here
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