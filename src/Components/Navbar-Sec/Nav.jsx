import './Nav.css';

function Navbar() {
  return (
    <nav>
      <div className="Nav-Contnr">
        <h4 className="Logo">Ejaz Ahmad</h4>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skill">Skills</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#Contact">Contact</a></li>
          <button className="Nav-Btn">Github</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
