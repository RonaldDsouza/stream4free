import { useEffect } from 'react';

// Component definition
const YourComponent = () => {
  // Function to load the ad code
  const loadAdCode = () => {
    var adScript = document.createElement('script');
    adScript.async = true;
    adScript.setAttribute('data-cfasync', 'false');
    adScript.src = '//ophoacit.com/1?z=6505995';
    document.body.appendChild(adScript);
  };

  // useEffect to load the ad code after component has mounted
  useEffect(() => {
    // Set a timeout to load the ad code after 8 seconds (8000 milliseconds)
    const timeoutId = setTimeout(loadAdCode, 8000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    // Your component JSX goes here
    <div>
      {/* Your component content */}
    </div>
  );
};

export default YourComponent;
