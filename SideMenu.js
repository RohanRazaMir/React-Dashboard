import React,{useState,useEffect} from 'react'
import logo from "../assets/logo/WebScripts.jpg";
import User from "../assets/User.jpg"
import MenuItem from './MenuItem';

const menuItem=[
    {name:"Dashboard", exact:true, to:'/', iconClassName:"bi bi-speedometer2"},
    {name:"Content",
    exact:true,
    to:`/content`,
    iconClassName:"bi bi-newspaper",
    subMenus:[{name: "Courses" ,to:'/content/courses'},{name:"Videos", to:'/content/videos'}],
    },
    {name:"Design", to:`/design` , iconClassName:"bi bi-vector-pen"}
];


const SideMenu =(props)=>{

    const [inactive, setInactive]= useState(false);

    /* when the side-menu is inactive the Line below Content is hidden 
    when we click it's still hidden and just expanded
    and when we click on content after expantion it will display sub-menu */
    useEffect(() => {
        if(inactive){
                document.querySelectorAll('.sub-menu').forEach((el)=>{
                        el.classList.remove("active");
                });
        }
        props.onCollapse(inactive);  //onCollapse functionality is desclared in App.js    

    },[inactive]);    


    return( 
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div className="logo">
                <img src={logo} alt="Webscript" />
            </div>
            <div 
            onClick={() =>setInactive(!inactive)}
            className="toggle-menu-btn"
            >
                {/* which toggle icon to be show when active/inactive(Condition/Ternary operator)  */}
            { inactive ? (<i class="bi bi-arrow-right-square-fill"></i>)  :  (<i class="bi bi-arrow-left-square-fill"></i>)  }
            </div>
        </div>

        <div className="search-controller">
            <button  className="search-btn">
            <i class="bi bi-search"></i>
            </button>
           
            <input type="text" placeholder="Search"/>
        </div>

        <div className="divider"></div>
        

        <div className="main-menu">
            <ul>
                {
                    menuItem.map((menuItem, index)=>(
                        <MenuItem 
                         
                                  key={index} 
                                  name={menuItem.name}
                                  exact={menuItem.exact}
                                  to={menuItem.to}
                                  subMenus={menuItem.subMenus || []}
                                  iconClassName={menuItem.iconClassName}  
                                  onClick={() => {
                                      if(inactive){
                                          setInactive(false);
                                      }

                                  }}
                        />
                    ))}

                {/* <li>
                    <a className="menu-item">
                       <i class="bi bi-speedometer2"></i> 
                       <span>Dashboard</span>
                    </a>
                </li>

                <MenuItem
                    name={"Content"}
                    subMenus={[
                        {name: 'Courses'},
                        {name:'Videos'}
                    ]}
                /> */}


                {/* He removed the which i commented below 1 part*/}
                {/* <li>
                    <a className="menu-item">
                        <i class="bi bi-newspaper"></i>
                        <span>Content </span> 
                    </a>

                      <ul className="sub-menu">
                        <li>
                            <a> Courses </a>
                        </li>
                        <li>
                            <a>Videos </a>
                        </li>
                    
                      </ul>
                </li> */}

                
                {/* <li>
                    <a className="menu-item">
                        <i class="bi bi-pen"></i>
                        <span>Design </span>
                    </a>
                </li> */}

            </ul>

            

        </div>

{/* footer start*/}

        <div className="side-menu-footer">
            <div className="avatar">
                <img src={User} alt="User"/>
            </div>
            <div className="user-info">
                <h5>Rohan Raza Mir</h5>
                <p>rohanrazamir@gmail.com</p>
            </div>

        </div>


    </div>
    );
};

export default SideMenu;
