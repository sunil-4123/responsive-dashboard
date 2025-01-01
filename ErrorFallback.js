import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="p-4 border bg-red-100">
      <h2 className="text-lg font-bold text-red-600">Something went wrong:</h2>
      <pre className="text-red-600">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="bg-blue-500 text-white px-4 py-2 rounded">
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
