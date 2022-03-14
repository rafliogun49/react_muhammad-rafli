const Navbar = (props) => {
  return (
    <nav className="navbar bg-white shadow-sm py-2">
      <div className="container">
        <span className="navbar-brand mb-0 h1 logo-app">{props.text}</span>
      </div>
    </nav>
  );
};

export default Navbar;
