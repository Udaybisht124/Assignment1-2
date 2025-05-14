import React from 'react';
import { Footer } from 'flowbite-react';

const AppFooter = () => {
  return (
    <Footer
      container={true}
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white fixed bottom-0 left-0 w-full"
    >
      <div className="w-full text-center">
        <Footer.Copyright
          href="/"
          by="Addval Solutions"
          year={2025}
          className="text-white"
        />
      </div>
    </Footer>
  );
};

export default AppFooter;