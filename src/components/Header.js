import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Samyuktha Ganeshkumar</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/journey">Journey</Link> |
        <Link to="/interests">Interests</Link> |
        <Link to="/academics">Academics</Link> |
        <Link to="/extracurriculars">Extra-Curriculars</Link> |
        <Link to="/feedback">Feedback</Link>
      </nav>
    </header>
  );
}

export default Header;
