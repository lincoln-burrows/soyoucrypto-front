import React, { Component, useEffect, forwardRef } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../css/Momentum.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import MomentumGraph from "./MomentumGraph";
import { useState } from 'react'
import { useDispatch, useSelector, } from "react-redux";
import InfoRFSButton from "../assets/InfoRFSButton";
import { momentumAction } from "../../redux/actions/momentumAction";
import styled, { keyframes } from 'styled-components'
import $ from 'jquery';

const Momentum = forwardRef((props, ref) => {

  const dispatch = useDispatch();
  const { momentumLowerButton, momentumUpperButton } = useSelector((state) => state.legacy);
  const momentumNavAnimation  = useSelector((state) => state.legacy);
  const momentumAnimation  = useSelector((state) => state.legacy.momentumAnimation);
  const { momentumData, momentumIndex } = useSelector((state) => state.momentumData);


  let navAnchor = window.innerHeight-74.5;
  if (navAnchor <= 600){
    navAnchor = -70-74.5;
  } else {
    navAnchor = -(1*((navAnchor)-570)/2)-74.5;
  }

  const modalNavigate = (funcName) =>{
    if (funcName=="moveToContact") {    
    props.moveToContact();
    }
    }

    useEffect(() => {
      dispatch(momentumAction.getMomentumGraph("MOMENTUMALL"));
    }, []);


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
          <NavBlank ref={ref.refMomentum}></NavBlank>
          <div ref={ref.areaRef} ></div>
           
            <div className="momentumTitle"> Momentum Algorithm</div>
            <div className="upperButtons" >
        
        <Button size="left" variant={"default" + (momentumUpperButton == "1" ? "Active" : "")} children="Return" buttonIndex="1" actionName="MOMENTUM_PROFIT" />
       <Button size="right" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Information" buttonIndex="2" actionName="MOMENTUM_INFO" />
       
       </div>
       <span className={momentumUpperButton == "2" ? 'hide below' : 'below'}>
       <div className="lowerButtons">
       <Button3 size="left" variant={"default" + (momentumLowerButton == "1" ? "Active" : "")} children="ALL" buttonIndex="1" actionName="MOMENTUMALL"/> 
       <Button3 size="middle" variant={"default" + (momentumLowerButton == "2" ? "Active" : "")} children="1Y" buttonIndex="2" actionName="MOMENTUM1Y" /> 
       <Button3 size="middle" variant={"default" + (momentumLowerButton == "3" ? "Active" : "")} children="6M" buttonIndex="3" actionName="MOMENTUM6M" /> 
       <Button3 size="right" variant={"default" + (momentumLowerButton == "4" ? "Active" : "")} children="3M" buttonIndex="4" actionName="MOMENTUM3M"/> 
       </div>
        <div className="graphAnimation1" >
          <div className={momentumUpperButton == "2" ? 'hide graphArea' : 'graphArea'} id="momentumReload">
        <MomentumGraph />
        
        <div className="indexContainer">
        <div className="index">Cum. Return</div>
        <div className="index">Daily Avg.</div>
        <div className="index">Daily Sharp</div>
        <div className="index">MDD</div>
        </div>
        <div className="indexValueContainer">
        <div className="index">{momentumIndex && momentumIndex.cumReturn}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailyAvg}&nbsp;%</div>
        <div className="index">{momentumIndex && momentumIndex.dailySharp}</div>
        <div className="index">&nbsp;{momentumIndex && momentumIndex.mdd}&nbsp;%</div>
        </div>
        </div>
        </div>
        </span>
        

        <div className={momentumUpperButton == "1" ? 'hide below' : 'below'}>

              <br></br><br></br><br></br><br></br>
              <div className="infoText">
              <li >To be updated</li>
              
              <li >To be updated</li>
              
              <li >To be updated</li>          
              </div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <div className="toContactButton" >
              <InfoRFSButton size="sm" variant={"default" + (momentumUpperButton == "2" ? "Active" : "")} children="Request for Service" className="toggleMenu" modalNavigate={modalNavigate} funcName="moveToContact" />   
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

export default Momentum
