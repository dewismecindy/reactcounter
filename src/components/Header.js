import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon
        icon="fa-solid fa-calculator"
        size="3x"
        color="#5C48D3"
      />
      <h1>React Counter</h1>
    </header>
  );
};

export default Header;
