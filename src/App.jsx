import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from './store/actions/stepperActions';
import Stepper from './components/Stepper';
import StepperControl from './components/StepperControl';
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

function App() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.stepper.currentStep);

  const steps = ["Step 1", "Step 2", "Step 3"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
        
      case 3:
        return <Page3 />;
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === 'next' ? (newStep += 1) : (newStep -= 1);
    newStep > 0 && newStep <= steps.length && dispatch(setCurrentStep(newStep));
  };

  useEffect(() => {
    // Handle any additional logic when the step changes
  }, [currentStep]);

  return (
    <div className="w-full md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white-500">
      {/* stepper */}
      <div className="bg-white container bg-grey-600 horizontal my-5 flex-col">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      {/* Display current step content */}
      {displayStep(currentStep)}

      {/* navigationControl */}
      <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
    </div>
  );
}

export default App;