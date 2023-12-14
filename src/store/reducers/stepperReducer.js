const initialState = {
    currentStep: 1,
  };
  
  const stepperReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_STEP':
        return { ...state, currentStep: action.payload };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default stepperReducer;
  