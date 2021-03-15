import style from './Header.module.css'
import NavigationItem from './NavigationItem';

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
          <NavigationItem>Going to 1</NavigationItem>
          <NavigationItem>Going to 2</NavigationItem>
          <NavigationItem>Going to 3</NavigationItem>
          <NavigationItem>Going to 4</NavigationItem>
          <NavigationItem>Going to 5</NavigationItem>
          <NavigationItem>Going to 6</NavigationItem>
          <NavigationItem>Going to 7</NavigationItem>
          <NavigationItem>Going to 8</NavigationItem>
          <NavigationItem>Going to 9</NavigationItem>
          <NavigationItem>Going to 10</NavigationItem>
          <NavigationItem>Going to 11</NavigationItem>
  
        </ul>
      </nav>
    )
};

export default Header;