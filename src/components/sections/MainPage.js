import { React, forwardRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import "../css/MainPage.css";
import "../../App.css";
import "../css/NavBar.css";
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'


const MainPage = (props) => {

    const dispatch = useDispatch();

    let animationAnchor = (window.innerHeight/2)-90-20-22.5-20-53;
    console.log("앵커", animationAnchor)
    const MainPositionBox = styled.div`
    height : ${animationAnchor}px;
        width: 200px;
        @media (max-height:500px) {
            height: 150px;
        }

        @media all and (min-width:768px) and (max-width:1023px) {
            height: 150px;
        }
  `;
//   height : ${animationAnchor}px;
        return (
            <div>
            <div className="containerHG">
      <header >
          <div></div>
          <div></div>
      </header>
      <section className="content">
          <nav >
          </nav>
          <aside>
          </aside>
          <main className='mainpageMain'>
              <div className="navBar">
                  <span onClick={props.moveToMain} className='navMain'>Main</span>
                  <span onClick={props.moveToMomentum} className='navMomentum'>Momentum Algo.</span>
                  <span onClick={props.moveToStable} className='navStable'>StableOnly</span>
                  <span onClick={props.moveToContact} className='navContact'>Contact</span>
              </div>
              <div className='mainUpper'>
              <MainPositionBox></MainPositionBox>
          <div className="mainTitle">SOYOU CRYPTO</div>
          <h4 className="mainSubTitleMobile">Crypto Asset<br></br>Management Labs</h4>
          <h4 className="mainSubTitleWeb">Crypto Asset Management Labs</h4>
          </div>
          <br></br>
          <div className="mainDescription1">Crypto asset management for all</div>
          <div className="mainDescription2">More capital income for all</div>
          <div className="mainDescription3">More freedom for all</div>
          </main>
          <aside>
          </aside>
          <nav >
          </nav>
      </section>
      <footer>
      </footer>
    </div>
    </div>
        );
    } 
    // else {

    //     return (
    
    //         <div className="containerHG">
    //   <header >
    //   </header>
    //   <section className="content">
    //       <nav className='test'>
          
    //       </nav>
    //       <aside>
    //       </aside>
    //       <main>
    //           <div className='mainUpperT'>
    //       <div className="mainTitleT">SOYOU CRYPTO</div>
    //       <h4 className="mainSubTitleT">Crypto Asset Management Labs</h4>
    //       </div>
    //       <br></br>
    //       <div className="mainDescription1T">Crypto asset management for all</div>
    //       <div className="mainDescription2T">More capital income for all</div>
    //       <div className="mainDescription3T">More freedom for all</div>
    //       </main>
    //       <aside>
    //       <img width="100" height="100" src={hamburger} onClick={()=>dispatch({type:"SET_MODAL_ON"})}/>
          
    //       </aside>
    //       <nav >
    //       </nav>
    //   </section>
    //   <footer>
    //   <img className="downwardArrow" width="45.5" height="35.5" src={downwardArrow} onClick={()=>{props.pageDown(2);}}></img>
    //   </footer>
    // </div>
    // </div>

    // ); }
        
// }
    





export default MainPage;
