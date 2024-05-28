import logo from '../assets/recipe-icon-5.png'
import menu from '../assets/menu-icon.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src={menu} alt="App Menu" className='navbar-menu'/>
                <h3>Books</h3>
                <img src={logo} alt="App Logo"  className="navbar-logo"/>
            </div>
        </nav>
    );
};

export default Navbar