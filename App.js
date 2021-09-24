import React,{useState} from 'react'
import './App.css';
import SideMenu from './components/SideMenu';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

const Dashboard=()=>{
return <h1>Dashboard</h1>;
};

const Content=()=>{
return <h1>Content</h1>;
};

const Courses=()=>{
return <h1>Content/Courses</h1>;
};

const Videos=()=>{
return <h1>Content/Videos</h1>;
};

const Design=()=>{
  return <h1>Design</h1>;
};

function App() {

const [inactive, setInactive]= useState(false);

  return (
    <div className="App">

      <Router>
        {/* SideMenu is component onCollapse is used to fit the content on Right i-e container when side-menu inactive/minimized */}
        <SideMenu onCollapse={(inactive)=>{
            console.log(inactive);
            setInactive(inactive);
        }}
      />

{/* container hold the content of right side of the side-menu space */}
       {/* if container is inactive the margin-left will be decreased */}
       <div className={`container ${inactive ?"inactive":""}`}>
          <Switch>

            <Route exact path={"/"}>
            {/* calling function Dashboard declared above */}
              <Dashboard/>   
            </Route>
            <Route exact path={"/content"}>
              <Content/>
            </Route>
            <Route path={"/content/courses"}>
               {/* calling function Courses declared above */}
              <Courses/>
            </Route>
            <Route path={"/content/videos"}>
              <Videos/>
            </Route>
            <Route path={"/design"}>
              <Design/>
            </Route>

          </Switch>
        </div>
         
      </Router>
     
    </div>
  );
}

export default App;
