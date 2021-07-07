import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <span className="logo">Movies Plus</span>
    </span>
  );
};

export default Header;
