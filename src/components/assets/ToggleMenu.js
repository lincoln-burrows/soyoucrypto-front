// import styled, { css } from "styled-components";
// import { useDispatch, useSelector } from "react-redux";


// const SIZES = {
//   sm: css`
//     --button-font-size: 29px;
//     --button-padding: 4px 0px;
//     --button-radius: 20px;
//     @media (max-width:1023px){
//       --button-font-size: 29px;
//       --button-padding: 4px 0px;
//     }
//   `,
//   md: css`
//     --button-font-size: 1rem;
//     --button-padding: 4px 12px;
//     --button-radius: 8px;
//   `,
//   lg: css`
//     --button-font-size: 1.25rem;
//     --button-padding: 16px 20px;
//     --button-radius: 12px;
//   `
// };

// const VARIANTS = {
//   success: css`
//     --button-color: #ffffff;
//     --button-bg-color: #000000;
//     --button-hover-bg-color: #ffffff;
//     --button-hover-button-color: #000000;
  
//   `,
//   default: css`
//     --button-color: #ffffff;
//     --button-bg-color: #C0C0C0;

//   `,
//   defaultActive: css`
//     --button-color: #ffffff;
//     --button-bg-color: #000000;

//   `
// };

// const ToggleMenu = (props) =>{
//   const dispatch = useDispatch();
//   const sizeStyle = SIZES[props.size];
//   const variantStyle = VARIANTS[props.variant];

//   return (
//     <StyledButton
//       // disabled="active"
//       sizeStyle={sizeStyle}
//       variantStyle={variantStyle}
//       onClick={()=>{props.modalNavigate(props.funcName); dispatch({type:"SET_ISOPEN_FALSE"});}}
//     >
//       {props.children}
//     </StyledButton>
//   );
// }

// const StyledButton = styled.button`
//   ${(p) => p.sizeStyle}
//   ${(p) => p.variantStyle}

//   margin: 7px 15px 7px 15px;
//   text-align: right;
//   font-weight: bold;
//   float: right;
//   border: none;
//   cursor: pointer;
//   font-family: "Noto Sans KR", sans-serif;
//   font-size: var(--button-font-size,);
//   padding: var(--button-padding,);
//   border-radius: var(--button-radius,);
//   color: var(--button-color);
//   background: var(--button-bg-color);
//   width:500px;
//   @media (max-width:1023px){
//     width:330px;
//     margin: 0px 0px 0px 0px;
//     padding: 0px 0px 0px 0px;
//   }
//   &:active,
//   &:hover,
//   &:focus {
//     background: var(--button-hover-bg-color);
//     color: var(--button-hover-button-color);
//   }

//   &:disabled {
//     cursor: default;
//     opacity: 0.5;
//     background: var(--button-bg-color, #000000);
//   }
// `;

// export default ToggleMenu;