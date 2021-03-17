
import { useState } from 'react';
import MenuItem from './MenuItem';
import './Menu.css';
import { menuItems } from './MenuConstant';


const Menu = ({
    onMenuItemClick,
}) => {
    // така се  използва useState
    // връща масив с два елемента - първия елемент е стойността която да запазим, вторият е функцията която променя тази стойност
    const [currentItem, setCurrentItem] = useState();
    // console.log(currentItem);

    const menuItemClickHandler = (id) => {
        // това е за да обнови стейта в компонента
        setCurrentItem(id);

        // за да разбере APP, че е натиснато нещо и да си сетне в своя си стейт нещо 
        onMenuItemClick(id);
    } 

    return (
        <aside className="menu">
            {menuItems.map(x =>
                <MenuItem
                    key={x.id}
                    id={x.id}

                    // ако са равни, значи текущия айтем е селектиран
                    isSelected={x.id == currentItem }
                    onClick={menuItemClickHandler}
                >
                    {x.text}
                </MenuItem>

            )}

        </aside>
    );
}

export default Menu;


