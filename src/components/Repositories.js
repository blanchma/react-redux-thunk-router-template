import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Repositories = ({ username = "faloi" }) => {
  const [repositories, setRepositories] = useState([]);

  async function fetchRepositories() {
    let response = await fetch(
      `https://api.github.com/users/${username}/repos?page=1&per_page=10`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    let repositories = await response.json();
    console.log("repositories", JSON.stringify(repositories));
    setRepositories(repositories);
  }

  useEffect(() => {
    fetchRepositories();
  }, [username]);

  return (
    <div>
      <h1> This are Repositories for {username} </h1>
      <ul>
        {repositories.map((repo) => {
          return (
            <li>
              <Link to={`/repositories/${repo.name}`}>{repo.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Repositories.propTypes = {
  username: PropTypes.string,
};

export default Repositories;
