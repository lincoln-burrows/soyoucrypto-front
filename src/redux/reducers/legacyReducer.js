const initialState = {
  // isModalOn: false,
  // isOpen: false,
  momentumAnimation:false,
  momentumNavAnimation:false,
  momentumUpperButton:"1",
  momentumLowerButton:"1",
  momentumAnimationConst:"3",
  stableAnimation:false,
  stableUpperButton:"1",
  stableLowerButton:"1",
  stableAnimationConst:"3",
};

const legacyReducer = (state = initialState, action) => {
    console.log("action은 뭘까?", action);
  switch (action.type) {
    // case "SET_MODAL_OFF":
    //   return { ...state, isModalOn: false };
    // case "SET_MODAL_ON":
    //   return { ...state, isModalOn: true, isOpen: true };
    // case "SET_ISOPEN_TRUE":
    //   return { ...state, isOpen: true };       
    // case "SET_ISOPEN_FALSE":
    //   return { ...state, isOpen: false };       
    case "MOMENTUM_ANIMATION_ON":
      return { ...state, momentumAnimation: true };
    case "MOMENTUM_ANIMATION_OFF":
      return { ...state, momentumAnimation: false };
    case "MOMENTUM_PROFIT":
      return { ...state, momentumUpperButton: "1"};
    case "MOMENTUM_INFO":
      return { ...state, momentumUpperButton: "2"};        
    case "MOMENTUMALL":
      return { ...state, momentumLowerButton: "1"};
    case "MOMENTUM1Y":
      return { ...state, momentumLowerButton: "2"};
    case "MOMENTUM6M":
      return { ...state, momentumLowerButton: "3" };
    case "MOMENTUM3M":
      return { ...state, momentumLowerButton: "4" };
    case "MOMENTUM_NAV_ANI_ON":
      return { ...state, momentumNavAnimation: true };
    case "MOMENTUM_NAV_ANI_OFF":
      return { ...state, momentumNavAnimation: false };    
    case "STABLE_ANIMATION_ON":
      return { ...state, stableAnimation: true};
    case "STABLE_ANIMATION_OFF":
      return { ...state, stableAnimation: false};
    case "STABLE_PROFIT":
      return { ...state, stableUpperButton: "1"};
    case "STABLE_INFO":
      return { ...state, stableUpperButton: "2"};        
    case "STABLEALL":
      return { ...state, stableLowerButton: "1" };
    case "STABLE1Y":
      return { ...state, stableLowerButton: "2"};
    case "STABLE6M":
      return { ...state, stableLowerButton: "3" };
    case "STABLE3M":
      return { ...state, stableLowerButton: "4" };
    // case "STABLEANICONSTRESET":
    //     return { ...state, stableAnimationConst: "1" };
    // case "STABLEANICONSTSTOP":
    //     return { ...state, stableAnimationConst: "2" };     
    default:
      return {...state};
  }
};

export default legacyReducer;
