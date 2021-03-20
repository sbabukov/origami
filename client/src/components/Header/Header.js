import style from './Header.module.css'
import NavigationItem from './NavigationItem';
// link ще навигира без да презарежда страницата 
import {Link, NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <nav className={style.navigation}>
        {/* ul>li.listItem*11>a[href=#]{Going to $} */}
        <ul>
          {/* <li className="listItem"><img src="white-origami-bird.png" alt="white-origami" /></li>
            <li className="listItem"><a href="#">Going to 1</a></li>
            <li className="listItem"><a href="#">Going to 2</a></li>
            <li className="listItem"><a href="#">Going to 3</a></li>
            <li className="listItem"><a href="#">Going to 4</a></li>
            <li className="listItem"><a href="#">Going to 5</a></li>
            <li className="listItem"><a href="#">Going to 6</a></li>
            <li className="listItem"><a href="#">Going to 7</a></li>
            <li className="listItem"><a href="#">Going to 8</a></li>
            <li className="listItem"><a href="#">Going to 9</a></li>
            <li className="listItem"><a href="#">Going to 10</a></li>
            <li className="listItem"><a href="#">Going to 11</a></li> */}
  
  
          <NavigationItem>{<img src="white-origami-bird.png" alt="white-origami" />}</NavigationItem>
          {/* Ако ни трябва активните линкове да се оцветяват се използва NavLink with  activeStyle={{backgroundColor: 'red'}} exact={true} */}
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/contact-us"><NavigationItem>Contact Us Page</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/pesho"><NavigationItem>Pesho</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/gosho"><NavigationItem>Gosho</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/stamat"><NavigationItem>Going to 6</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/mariyka"><NavigationItem>Going to 7</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/malinka"><NavigationItem>Going to 8</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/tosho"><NavigationItem>Going to 9</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/plamen"><NavigationItem>Going to 10</NavigationItem></NavLink>
          <NavLink activeStyle={{backgroundColor: 'red'}} exact={true} to="/about/veselin"><NavigationItem>Going to 11</NavigationItem></NavLink>

  
        </ul>
      </nav>
    )
};

export default Header;