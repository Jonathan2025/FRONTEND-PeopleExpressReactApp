// 3 adding a basic boiler plate for now


// 14) Import the useState and link from react and routerdom 
import {useState} from "react"
import { Link } from "react-router-dom"




const Index = (props) => {



    // 18 - 21 Now we start creating the actual form that will allow the use to enter in new information about a person 
    // 18) here we need to create state for the form, initial value for name, image and title is ""
    // the setnewForm function will update the state
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
      });

    
    // 19) We need a handleChange function for the form
    const handleChanges = (event) => {
        // the setNewForm function takes an argument that specifies the new state value 
        // new state is created by spreading the current state using the spread operator and then overwriting the property 
        // with the same name as the input field that triggered the event
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    // Handlesubmit function is responsible for handling the form submission event, handleChange is responsible for 
    // Updating the form state whenever the input fiekd changes


    // 20 Handle submit function for form 
    const handleSubmit =(event) =>{
        // prevent the default form submission behavior, which would cause the page to reload
        event.preventDefault()

        // now the props.createPeople method is called, passing in the "newForm" state as an argument
        props.createPeople(newForm)

        // after the submission, the input fields are cleared
        setNewForm({
            name: "",
            image: "",
            title: "",
          });

    }




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

    //17 tertiary operator that checks IF the prop.people property exists, if it does, then it will 
    // load the loaded function, otherwise it will load the loading function
    // return(props.people ? loaded() : loading())






    // return <h1>Index Component</h1>



    // 21) here we create a form
    // The form element has an onSubmit event handler that is set to the handleSubmit function, 
    //which is responsible for handling the form submission. 
    return(

        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              //The value attribute of each input element is set to the corresponding value in the newForm state, 
              //which allows the form to be controlled by the component's state.
              value={newForm.name}
              name="name"
              placeholder="name"
              // the onChange event handler is set to the handleChange function,
              //which updates the state whenever an input field changes.
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.image}
              name="image"
              placeholder="image URL"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.title}
              name="title"
              placeholder="title"
              onChange={handleChange}
            />
            {/* ther is a submit button tha ttriggers the form submission when clicked */}
            <input type="submit" value="Create Person" />
          </form>
          {/* before we added this on top but this line of code 
          //tertiary operator that checks IF the prop.people property exists, if it does, then it will 
          // load the loaded function, otherwise it will load the loading function */}
          {props.people ? loaded() : loading()}
        </section>
    
    
    
        )


}

export default Index