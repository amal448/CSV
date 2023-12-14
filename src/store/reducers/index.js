import { combineReducers } from 'redux';
import stepperReducer from './stepperReducer';

const rootReducer = combineReducers({
  stepper: stepperReducer,
  // Add other reducers if needed
});

export default rootReducer;
