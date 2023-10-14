import "./Landing.css";

const Landing = () => {
  return (
    <div className="center">
      <div id="leftSide">
      <img src="src/img/robot.png" alt="Image of Robot" width="600" height="500" />
      </div>
      <div className="rightSide">
        <h1 id="colourHead">Summarize Commits</h1>
        <h1 id="whiteHead">With AI</h1>
        <p id="paragraph">We use Co:here’s API to summarize all Github commits since your last one.</p>
        <div className="inputContainer">
          <input className="textInput" id="textInput1" placeholder="Enter your GitHub repository link here"/>
          <input className="textInput" id="textInput2" placeholder="Enter your username here"/>
          <a href="/summary">
            <button id="goButton"></button>
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Landing;
