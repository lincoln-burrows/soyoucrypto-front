import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";


const SIZES = {
  sm: css`
  --button-font-size: 19px;
  --button-padding: 2.5px 0px 5.5px 0px;
  --button-radius: 25px;
  margin: 10px 0px 0px 0px;


  `,
  md: css`
    --button-font-size: 1rem;
    --button-padding: 4px 12px;
    --button-radius: 8px;
  `,
  lg: css`
    --button-font-size: 1.25rem;
    --button-padding: 16px 20px;
    --button-radius: 12px;
  `
};

const VARIANTS = {
  success: css`
    --button-color: #ffffff;
    --button-bg-color: #000000;
  
  `,
  default: css`
    --button-color: #ffffff;
    --button-bg-color: #C0C0C0;

  `,
  defaultActive: css`
    --button-color: #ffffff;
    --button-bg-color: #000000;

  `
};

const InfoRFSButton = (props) =>{
  const dispatch = useDispatch();
  const sizeStyle = SIZES[props.size];
  const variantStyle = VARIANTS[props.variant];

  return (
    <StyledButton
      // disabled="active"
      sizeStyle={sizeStyle}
      variantStyle={variantStyle}
      onClick={()=>{props.modalNavigate(props.funcName);}}
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
  font-family: "noto-sans-kr-medium", sans-serif;
  font-size: var(--button-font-size,);
  padding: var(--button-padding, );
  border-radius: var(--button-radius, );
  color: var(--button-color, #ffffff);
  background: var(--button-bg-color, #0d6efd);
  width:100%;
`;

export default InfoRFSButton;