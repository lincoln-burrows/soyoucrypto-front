import React, { Component, useEffect, forwardRef } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import StableOnlyGraph from "./StableOnlyGraph";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ToggleMenu from "../assets/ToggleMenu";
import InfoRFSButton from "../assets/InfoRFSButton";
import { stableAction } from "../../redux/actions/stableAction";
import styled from 'styled-components'


const StableOnly = forwardRef((props, ref) => {

  const dispatch = useDispatch();
  const { stableLowerButton, stableUpperButton } = useSelector((state) => state.legacy);
  const { stableData, stableIndex } = useSelector((state) => state.stableData);
  console.log("stableIndex?", stableIndex)
  let navAnchor = window.innerHeight;
  if (navAnchor <= 640){
    navAnchor = -70;
  } else {
    navAnchor = -1*((navAnchor)-570)/2;
  }
  
  
  const modalNavigate = (funcName) =>{
    if (funcName=="moveToContact") {    
    props.moveToContact();
    }
    }

    useEffect(() => {
      dispatch(stableAction.getStableGraph("STABLEALL"));
    }, []);

    // useEffect(() => {
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   }
    // }, []);
    
    const NavBlank = styled.div`
  height : 1px;
  width: 20px;
  position:relative;
  top: ${navAnchor}px;
  `;

  return (
    <div className="containerHG">
      <header >
        
      </header>
      <section className="content">
          <nav>
            
          </nav>
          <aside>
          </aside>
          <main>
          <NavBlank ref={ref}></NavBlank>
            <div className="momentumTitle">Stablecoin Only</div>
        <Button size="left" variant={"default" + (stableUpperButton == "1" ? "Active" : "")} children="Profit" buttonIndex="1" actionName="STABLE_PROFIT" />
       <Button size="right" variant={"default" + (stableUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="STABLE_INFO" />
       <span className={stableUpperButton == "2" ? 'hide below' : 'below'}>
       <Button3 size="left" variant={"default" + (stableLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="STABLEALL"/> 
       <Button3 size="middle" variant={"default" + (stableLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="STABLE1Y"/> 
       <Button3 size="middle" variant={"default" + (stableLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="STABLE6M"/> 
       <Button3 size="right" variant={"default" + (stableLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="STABLE3M"/> 
       <div className={stableUpperButton == "2" ? 'hide graphArea' : 'graphArea'}>
        <StableOnlyGraph />
        </div>
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{stableIndex && stableIndex.cumReturn}&nbsp;%</div>
        <div className="index">{stableIndex && stableIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{stableIndex && stableIndex.dailySharp}</div>
        <div className="index">&nbsp;{stableIndex && stableIndex.mdd}&nbsp;%</div>
        </div>
        </span>
        
        <div className={stableUpperButton == "1" ? 'hide below' : 'below'}>

        <br></br><br></br><br></br><br></br>
              <div className="infoText">
              <li >To be updated</li>
              
              <li >To be updated</li>
              
              <li >To be updated</li>          
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="toContactButton" >
              <InfoRFSButton size="sm" variant={"default" + (stableUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu"  modalNavigate={modalNavigate} funcName="moveToContact" />   
              </div>
              </div>
        
          </main>
          <aside>
          </aside>
          <nav>
            
          </nav>
      </section>
      <footer>
      </footer>
    </div>
    
  )
}
)

export default StableOnly