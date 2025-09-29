import './Skill.css';

function Skill() {
  return (
    <div id="Skill" className="Skill-Cont">
      <h1 className="Skill-h1">SKILLS</h1>
      <p className="Skill-p">
        Below are some of the skills I have been developing over the last three years.
      </p>

      <div className="Skill-grid">
        <div className="Skill-card1 html">HTML5</div>
        <div className="Skill-card2 css">CSS</div>
        <div className="Skill-card3 js">JavaScript</div>
        <div className="Skill-card4 react">React JS</div>
        <div className="Skill-card5 git">Git</div>
        <div className="Skill-card6 github">GitHub</div>
      </div>
    </div>
  );
}

export default Skill;
