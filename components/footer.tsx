import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-600">
      <small className="mb-2 block text-xs">
        &copy; 2023 Shivam. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Resend & Email, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
