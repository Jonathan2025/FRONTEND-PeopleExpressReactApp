// 3 adding a basic boiler plate for now
// 24 and 25 import useState and useparams 
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"





// the show component recieves a prop named "people"
const Show = (props) => {
    // return <h1>Show Component</h1>
    //26 will need useParams and navigate
    const params = useParams() // useParams is used to retrieve the URL parameters, where id would be the parameter
    const navigate = useNavigate() // useNavigate is used to navigate to different routes in teh react app
    const id = params.id 
    const people = props.people 
    // person stands for each element in the people array that is being iterated over using the find method
    // the arrow function checks if the "_id" property of that element is equal to the "id" variable 
    // if it is, then it is returned and stored in the "person" variable
    const person = people.find((person) => person._id === id ) 



    // 28) HandleSubmit and HandleChange for the form 
    const handleChange = (event) => {
        // whatever gets changed, we change it to event.target.value
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    // 28 handlesubmit function which is called when use submits the form by clicking a button
    const handleSubmit = (event) => {
        event.preventDefault() // prevent the default form submission behavior tha twould cause the page to reload
        // updatePeople takes 2 arguments: an object representing the edited form data and the id of ther perosn being edited
        props.updatePeople(editForm, person._id)
        // redirect people back to index page AFTER the use edits the information
        navigate("/");
    }









    // 27 the component then renders the information of the found person by displaying their name, title and image
    return (
        <div className="person">
          <h1>{person.name}</h1>
          <h2>{person.title}</h2>
          <img src={person.image} alt={person.name} />



        {/* 29 added in the form element which is linked with the handleSubmit and the handleChange functions above<form onSubmit={handleSubmit}> */}
        {/* there are three inputs for the form, name image and title */}
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
            />
            <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
            />
            <input type="submit" value="Update Person" />
        </form>                
        </div>
      )



}

export default Show