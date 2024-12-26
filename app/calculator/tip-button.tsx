
const TipButton = ({ text, onClick }) => (
    <button
    onClick={onClick}
    type="button"
      className={"p-2 text-center rounded-lg font-extrabold text-2xl bg-very-dark-cyan active:bg-primary text-white"}
    >
      {text}
    </button>

);
  export default TipButton;
  