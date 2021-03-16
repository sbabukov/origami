
import   './MenuItem.css';

// деструкторираме children
const MenuItem = ({
    children
}) => {
  return (
    <li className="menu-item">
        <a href="#">
        {children}
        </a>
    </li>
  );
}

export default MenuItem;


