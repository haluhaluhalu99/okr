import React from "react";

const Bell: React.FC<object> = (props) => {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" {...props}>
      <path
        d="M18 11V8C18 6.14348 17.2625 4.36301 15.9497 3.05025C14.637 1.7375 12.8565 1 11 1C9.14348 1 7.36301 1.7375 6.05025 3.05025C4.7375 4.36301 4 6.14348 4 8V11C4 14.3 1 15.1 1 17C1 18.7 4.9 20 11 20C17.1 20 21 18.7 21 17C21 15.1 18 14.3 18 11Z"
        stroke="#212121"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M11 21.9999C9.98902 21.9999 9.03902 21.9659 8.14502 21.8999C8.33561 22.5079 8.71532 23.0391 9.22883 23.4163C9.74235 23.7935 10.3629 23.9969 11 23.9969C11.6372 23.9969 12.2577 23.7935 12.7712 23.4163C13.2847 23.0391 13.6644 22.5079 13.855 21.8999C12.961 21.9659 12.011 21.9999 11 21.9999Z"
        fill="#212121"
      />
    </svg>
  );
};

export default Bell;
