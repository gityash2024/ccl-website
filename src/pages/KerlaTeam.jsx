import React from 'react';
import { useParams } from 'react-router-dom';

const kerala = () => {
  const { teamId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">kerala</h1>
      <div className="grid gap-6">
        {/* Team details content will go here */}
      </div>
    </div>
  );
};

export default kerala;