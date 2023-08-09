// components/LoadingSpinner.js

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen max-w-4xl w-full mx-auto">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
