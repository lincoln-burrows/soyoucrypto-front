import React, { forwardRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';
import "../../App.css";
import "../css/Contact.css";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { lineHeight } from '@mui/system';
import styled from 'styled-components'

const Contact = forwardRef((props, ref) => {
    const dispatch = useDispatch();

    let navAnchor = window.innerHeight-74.5;
  if (navAnchor <= 600){
    navAnchor = -70-74.5;
  } else {
    navAnchor = -(1*((navAnchor)-570)/2)-74.5;
  }

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
              <div className='contactTitle'>
          <div>Requests for Service</div>
                        <div className='contactSubTitle'>soyou.crypto@gmail.com</div>
                        </div>
                        
                        <div className='contactPassage'>
                        <div className="contactPassage1">[ Track Record ]</div>
                        <div className="contactPassage2">&bull; &nbsp;&nbsp;&nbsp;&nbsp;May '22 : Selected for angel package by Seoul Center for Creative Economy & Innovation</div>
                        <div className="contactPassage3">&bull; &nbsp;&nbsp;&nbsp;&nbsp;Oct '22 : Momentum algorithm ver1.0 launched</div>
                        <div className="contactPassage4">&bull; &nbsp;&nbsp;&nbsp;&nbsp;Oct '22 : Stable only ver1.0 launched
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
    );
}
)
export default Contact;
