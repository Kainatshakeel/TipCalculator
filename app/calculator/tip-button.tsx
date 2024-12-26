
import React from 'react';

interface TipButtonProps {
  text: string;
  onClick: () => void;
}

const TipButton: React.FC<TipButtonProps> = ({ text, onClick }) => (
    <button
    onClick={onClick}
    type="button"
      className={"p-2 text-center rounded-lg font-extrabold text-2xl bg-very-dark-cyan active:bg-primary text-white"}
    >
      {text}
    </button>

);
  export default TipButton;
  