import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  const [repoLink, setRepoLink] = useState("");
  const [username, setUsername] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleRepoLinkChange = (event) => {
    setRepoLink(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  console.log(searchParams);

  return (
    <div>
      <div className="header">
        <h1 id="companyName">GitGest</h1>
      </div>
      <div className="center">
        <div id="leftSide">
          <img
            src="src/img/robot.png"
            alt="Image of Robot"
            width="600"
            height="500"
          />
        </div>
        <div className="rightSide">
          <h1 id="colourHead">Summarize Commits</h1>
          <h1 id="whiteHead">With AI</h1>
          <p id="paragraph">
            We use Co:here’s API to summarize all Github commits since your last
            one.
          </p>
          <div className="inputContainer">
            <input
              className="textInput"
              id="textInput1"
              value={repoLink}
              onChange={handleRepoLinkChange}
              placeholder="Enter your GitHub repository link here"
            />
            <input
              className="textInput"
              id="textInput2"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username here"
            />
            <Link
              to={`/summary?url=${repoLink}&poi=${username}&token=${searchParams.get(
                "token"
              )}`}
            >
              <button id="goButton"></button>
            </Link>
          </div>
          {searchParams.size < 1 ? (
            <a href="http://127.0.0.1:5000/login">
              <button>Log in with github</button>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
