import React, { Component, useEffect, forwardRef } from "react";

import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import axios from "axios";
import { Container, Row, Col } from 'reactstrap';
import "../css/NavBar.css";
import Button from "../assets/Button.js";
import Button3 from "../assets/Button3";
import App from "../../App";
import MomentumGraph from "./MomentumGraph";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import ToggleMenu from "../assets/ToggleMenu";
import InfoRFSButton from "../assets/InfoRFSButton";
import { momentumAction } from "../../redux/actions/momentumAction";
import styled from 'styled-components'
import $ from 'jquery';

const NavBar = forwardRef((props, ref) => {


  return (
    <div className="containerHG">
      <section className="content heightControl">
          <nav>
            
          </nav>
          <aside>
          </aside>
          <main>
          <div className="navBar">
 
                  {/* <span className="navBlankRight"></span> */}
                  <span onClick={props.moveToMain} className='navMain'>Main</span>
                  <span onClick={props.moveToMomentum} className='navMomentum'>Momentum Algo.</span>
                  <span onClick={props.moveToStable} className='navStable'>StableOnly</span>
                  <span onClick={props.moveToContact} className='navContact'>Contact</span>
                  {/* <span className="navBlankLeft"></span> */}

              </div>
          </main>
          <aside>
          </aside>
          <nav>
            
          </nav>
      </section>
    </div>
    
  )
}

)

export default NavBar
