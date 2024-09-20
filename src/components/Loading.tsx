import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-primary-blue"></div>
    </div>
  );
};

export default Loading;