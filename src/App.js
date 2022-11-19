import { useState, useEffect, useRef } from "react";
import "./App.css";
import MainPage from "./components/sections/MainPage";
import StableOnly from "./components/sections/StableOnly";
import Contact from "./components/sections/Contact";
import Momentum from "./components/sections/Momentum";
import NavBar from "./components/sections/NavBar";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from 'styled-components';
import { Divider } from "@material-ui/core";

function App() {

  const [scrollIndex, setScrollIndex] = useState(1);
  const dispatch = useDispatch();
  let momentumAnimation = useSelector((state) => state.legacy.momentumAnimation);
  const momentumLowerButton = useSelector((state) => state.legacy.momentumLowerButton);

  const refMain = useRef(null);
  const refMomentum = useRef(null);
  const refStable = useRef(null);
  const refContact = useRef(null);
  
  const areaRef = useRef(null);


  const moveToMain = () => {
    refMain.current?.scrollIntoView({behavior: 'smooth'});
  };

  const moveToMomentum = () => {
    refMomentum.current?.scrollIntoView({behavior: 'smooth'});
  };

  const moveToStable = () => {
    refStable.current?.scrollIntoView({behavior: 'smooth'});
  };

  const moveToContact = () => {
    refContact.current?.scrollIntoView({behavior: 'smooth'});
  };


  return (
    <div>
        <div  ref={refMain} className="divider"></div>  
        <NavBar moveToContact={moveToContact} moveToMain={moveToMain} moveToMomentum={moveToMomentum} moveToStable={moveToStable}/>
      <MainPage scrollIndex={scrollIndex} />
      <div className="divider" > </div>
      <Momentum ref={{refMomentum:refMomentum, areaRef:areaRef}} scrollIndex={scrollIndex} moveToContact={moveToContact} />
      <div  className="divider"></div>
      <StableOnly ref={refStable} scrollIndex={scrollIndex} moveToContact={moveToContact} />
      <div  className="divider"></div>
      <Contact ref={refContact} scrollIndex={scrollIndex} />

    </div>
  );
}

export default App;

