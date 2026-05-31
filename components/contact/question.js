import React from 'react';

const question = () => {
  return (
    <div className="bg-[#FFF9F6] p-6 md:p-10 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-brown-800 mb-6">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        <div className="bg-[#FFF9F6] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-brown-800 mb-2">
            + What is hydration therapy?
          </h3>
          <p className="text-brown-800">
            Hydration therapy is a specialized skincare treatment designed to
            restore moisture to your skin, enhance elasticity, and leave it
            glowing and refreshed.
          </p>
        </div>
        <div className="bg-[#FFF9F6] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-brown-800 mb-2">
            - Is hydration therapy suitable for all skin types?
          </h3>
        </div>
        <div className="bg-[#FFF9F6] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-brown-800 mb-2">
            - How long does the treatment take?
          </h3>
        </div>
        <div className="bg-[#FFF9F6] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-brown-800 mb-2">
            - What results can I expect?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default question;