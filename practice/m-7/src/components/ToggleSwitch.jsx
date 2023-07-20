import React, { useState } from 'react';

const ToggleSwitch = () => {
  // useState hook to manage the switch state
  const [switchState, setSwitchState] = useState('Off');

  // Function to handle the toggle button click
  const handleToggle = () => {
    setSwitchState((prevState) => (prevState === 'On' ? 'Off' : 'On'));
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {switchState === 'On' ? 'Turn Off' : 'Turn On'}
      </button>
      <p>Switch is {switchState}</p>
    </div>
  );
};

export default ToggleSwitch;
