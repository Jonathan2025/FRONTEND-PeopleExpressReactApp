// 3 adding a basic boiler plate for now


// 14) Import the useState and link from react and routerdom 
import {useState} from "react"
import { Link } from "react-router-dom"




const Index = (props) => {

    // 15 we created a function called loaded that takes no arguments 
    const loaded = () => {
        console.log("you have accessed the loaded function")
        // now we access our "people" props object and then use the MAP function to access each individual person in props
        // This is in connection with step 14 on Main.js
        return (props.people.map((person) => (
            //Now we set a unique identifier called "key" to be the id attribute of that person
            <div key={person._id} className="person">
                {/* here we create a link element and set the "to" attribute to be equal to the URL plus the id property of that person */}
                <Link to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                </Link>
                {/* here we create an img element with the src attribute set to the image property of the person object */}
                <img src={person.image} alt={person.name}/>
                <h3>{person.title}</h3>
            </div>
        )))   
    }

    // 16 Data isnt loaded
    const loading = () => {
        return <h1>Loading ...</h1>
    }

    //17 tertiary operator 
    return(props.people ? loaded() : loading())
    





    // return <h1>Index Component</h1>
}

export default Index