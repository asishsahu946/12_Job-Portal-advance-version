import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
  

        <div className="text-center md:text-left">
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <span className="bg-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.75 6.75V4.5A2.25 2.25 0 0012.5 2.25h-5.5a2.25 2.25 0 00-2.25 2.25v16.5a2.25 2.25 0 002.25 2.25h13.5a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25h-5.25z"
                />
              </svg>
            </span>
            <span className="ml-2 text-lg font-bold">Job</span>
          </div>
          <p className="text-center md:text-left">
            Quis enim pellentesque viverra tellus eget malesuada facilisis.
            Congue nibh vivamus aliquet nunc mauris.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Candidates
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                For Employers
              </a>
            </li>
          </ul>
        </div>

        {/* Job Categories */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Job Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Telecommunications
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Hotels & Tourism
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Construction
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Financial Services
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Eu nunc pretium vitae platea. Non netus elementum vulputate.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Email Address"
              aria-label="Enter your email"
              className="p-2 mb-4 bg-black border border-white rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 rounded hover:bg-teal-600 transition"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10  border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        <p className="text-gray-400">
          © Copyright Code By Asish & Madhu.
        </p>
        <div className="space-x-4">
          <a href="#" className="underline hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="underline hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;