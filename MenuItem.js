import React,{useState} from 'react';
import {NavLink} from "react-router-dom";

/*If something went wrong at the end change the function here */
export default function MenuItem(props) {
    const {name, subMenus, iconClassName, onClick, to, exact }=props;
    const [expand,setExpand] = useState(false);

    return (
        // li onlick will expand when we click on icons/props
        <li onClick={props.onClick}>  

        <NavLink 
            exact
            to={to} 
            onClick={()=>setExpand(!expand) } 
            className="menu-item"
        >
            <i class={iconClassName}></i>  <span>{name} </span> 
        </NavLink>
            {
                subMenus && subMenus.length > 0 ? (
            
                 <ul className={`sub-menu ${expand ? "active" : "" }`}>
                     {subMenus.map((menu,index)=> 
                     (<li key={index}>
                       <NavLink to={menu.to}> {menu.name} </NavLink>
                     </li>
                     ))}
        
                 </ul>
                ) : null } 

        </li>
    )
   
}
