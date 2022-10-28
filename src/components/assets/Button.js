import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const SIZES = {
  left: css`
    --button-font-size: 19px;
    --button-padding: 3px 0px 5px 0px;
    --button-radius: 25px;
    margin: 7px 1.8% 6px 0px;
    height:36.5px;
    justify-content:center;
    
  `,
  right: css`
    --button-font-size: 19px;
    --button-padding: 3px 0px 5px 0px;
    --button-radius: 25px;
    margin: 7px 0px 6px 1.8%;
  `,
  
};

const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;
    
  `,
  default: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;

  `,
  defaultActive: css`
    --button-color: #ffffff;
    --button-bg-color: #000000;
  `, 
};

const Button = (props) => {
  const sizeStyle = SIZES[props.size];
  const variantStyle = VARIANTS[props.variant];
  const dispatch = useDispatch();
  const disabled = props.disabled;
  const actionName = props.actionName;
  

  return (
    <StyledButton
      disabled={disabled}
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={()=>{dispatch({type:actionName}); }}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.variantStyle}

  
  border: none;
  cursor: pointer;
  font-family: "noto-sans-kr-medium";
  font-size: var(--button-font-size,);
  padding: var(--button-padding, );
  border-radius: var(--button-radius,);
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  width:48.2%;
  

  
`;

export default Button;