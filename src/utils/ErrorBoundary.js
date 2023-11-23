import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      setHasError(true);
      console.error(error, errorInfo);
    };

    window.addEventListener("error", handleError);

    // Clean up the event listener
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    console.error("Error occurred within the ErrorBoundary:", hasError);
    return <p>Something went wrong!</p>;
  }

  return children;
};

export default ErrorBoundary;
