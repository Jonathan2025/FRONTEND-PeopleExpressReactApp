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



    //13 an asynchonous create people function that takes a parameter person
    const createPeople = async(person) => {
        // makes a POST request to the URL specified in URL (First argument)
        // use the Fetch method to make the request and include an objects as second argument 
        // the object specifies the HTTP method(POST), the content-type as json, request body as the stringified "person" object
        await fetch(URL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            }, 
            // we add this stringify so that we can add this to req.body
            body: JSON.stringify(person)
        })
        // Now update the state with the new list of people
        getPeople()
    }


    // 23 updatePepl is a update people function that takes a parameter "person" and "id"
    const updatePeople = async (person, id) => {
        // make put request to the url specified in URL + id 
        // use the fetch method to make the request and include an object as second argument 
        // the object specifies the HTTP method (PUT), the content type as JSON, request body as the stringified "person" object 
        await fetch(URL + id, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
            },
            // we add this stringify so that we can add this to req.body
            body: JSON.stringify(person)
        })
        // update the list of people with the getPeople function
        getPeople()
    }








    //12 Now we also need the useEffect, basically it will make a call to the getPeople Function 
    // the data is fetched and displayed as soon as the component is rendered on the page
    useEffect(()=> {
        getPeople()
    }, [])
    
    
    
    // 7 now we remove the return boiler plate and then we added the routes here
    return(
        <main>
            <Routes>
                {/* Here we defined 2 routes. When the user types in "/" path, the element prop will render the INDEX component*/}
                
                {/* 14 Now we added in the props, people and createPeople */}
                <Route path="/" element={<Index people={people}
                createPeople={createPeople} />}/>



                {/* 24 now we want to slip in the prop */}
                {/* within the "Show" component, the updatePeople function is used to update a specific person  */}
                {/* therefore the updatePeoplefunction defined above, is used here to update people when the Show component is rendered */}
                <Route path="/people/:id" element={<Show
                people={people}
                updatePeople={updatePeople}
                
                
                
                
                
                />}/>
            </Routes>
        </main>
    )
}

export default Main