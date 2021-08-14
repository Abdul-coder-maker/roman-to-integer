import React, { useState } from "react";
function App() {
  const [romanInput, setRomanInput] = useState("");
  const [romanResult, setRomanResult] = useState("");
  const copiedoperation = () => {
    let copyText = document.getElementById("copiedText");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
  };
  const romanToInt = (s) => {
    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let integer = 0;
    let length = s.length;
    for (let i = 0; i < length; i++) {
      let currentInteger = roman[s[i]];
      let nextInteger = roman[s[i + 1]];
      if (nextInteger) {
        if (currentInteger >= nextInteger) {
          integer += currentInteger;
        } else {
          integer += nextInteger - currentInteger;
          i++;
        }
      } else {
        integer += currentInteger;
      }
    }
    return integer;
  };
  const submitForm = (e) => {
    e.preventDefault();
    // setRomanInput("");
    setRomanResult(romanToInt(romanInput.toUpperCase()));
    if (!romanInput) {
      setRomanResult("Please Enter Some Roman 🙂");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen antialiased dark:bg-cyan-900">
      <div className="bg-pink-200 dark:bg-cyan-600 px-6 py-8 rounded sm:w-[576px] mx-auto w-11/12 lg:w-[672px] mb-3 md:mb-0">
        <h1 className="text-xl font-bold text-gray-500 sm:text-3xl dark:text-gray-900 md:text-5xl">
          Roman To Integer Converter
        </h1>

        <div className="p-5 mt-4 bg-white rounded">
          <h2 className="font-medium sm:text-2xl md:text-3xl md:font-bold">
            Enter Your <span className="text-[#ff4e93]">Roman:</span>
          </h2>

          <form action="" className="flex flex-col space-y-2">
            <label htmlFor="text1" className="sr-only">
              Enter Your Roman
            </label>
            <input
              id="text1"
              value={romanInput}
              onChange={(e) => setRomanInput(e.target.value)}
              type="text"
              className="border  rounded focus:outline-none focus:border-[#ff4e93] pl-2 mt-2 font-mono text-sm px-2 py-1 uppercase md:text-lg"
              placeholder="Enter Roman..."
            />
            <button
              className="bg-[#ff4e93] px-3 py-1 rounded-md text-white font-semibold md:text-xl"
              onClick={submitForm}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-6 icon icon-tabler icon-tabler-arrow-narrow-down animate-bounce"
            width="180"
            height="180"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#ff4e93"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="16" y1="15" x2="12" y2="19" />
            <line x1="8" y1="15" x2="12" y2="19" />
          </svg>
        </div>
        <div className="p-5 bg-white rounded">
          <h2 className="font-medium sm:text-2xl md:text-3xl">
            Your Converted Number 👇
          </h2>
          <div className="flex items-center justify-between">
            <p className="font-medium text-cyan-500 md:text-xl md:font-semibold">
              {romanResult}
            </p>
            <input
              id="copiedText"
              type="text"
              className="sr-only"
              placeholder="This is a copied number"
              value={romanResult}
            />
            <button
              className="bg-[#ff4e93] p-2 rounded font-medium text-white "
              onClick={copiedoperation}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center p-2 space-x-3 transform translate-x-1/2 border-2 border-cyan-500 rounded-lg bottom-4 right-1/2 min-w-[220px] md:translate-x-0 md:right-10 md:min-w-0 md:space-x-0 md:flex-col md:space-y-3 md:p-3">
        <a
          href="https://www.codewars.com/users/Abdulrahman__Nasser"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-500 transform hover:scale-150"
        >
          <span
            className="text-3xl iconify"
            data-icon="simple-icons:codewars"
            style={{ color: "#b1361e" }}
          ></span>
        </a>
        <a
          href="https://twitter.com/AbdulrahmanDev"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-500 transform hover:scale-150"
        >
          <i className="fab fa-twitter text-[#1DA1F2] text-3xl"></i>
        </a>
        <a
          href="https://github.com/Abdul-coder-maker"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-500 transform hover:scale-150"
        >
          <i className="text-3xl text-[#161b22] fab fa-github"></i>
        </a>
        <a
          href="https://www.frontendmentor.io/profile/Abdul-coder-maker"
          className="transition-transform duration-500 transform hover:scale-150"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="w-[30px] h-[30px] border dark:border-0"
            src="https://i.ibb.co/27Jgfr5/favicon-32x32.png"
            alt="favicon-32x32"
          />
        </a>

        <a
          href="https://www.freecodecamp.org/abdulrahman-coder-maker-ffc"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-500 transform hover:scale-150"
        >
          <i class="fab fa-free-code-camp text-[#0a0a23] text-3xl dark:text-white"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
