// 3 adding a basic boiler plate for now



// 8 the link is imported from the router dom and it is used to create links to different pages within the application
import { Link } from "react-router-dom"


const Header = (props) => {
    // 9 add the boiler plate, when a user clicks on the link, it will updtae the URL in the browser's adderess bar and render the corresponding component associated with that link
    return(
        <nav className='nav'>
          <Link to="/">
              <div>People App</div>
          </Link>
      </nav>
    )
}

export default Header