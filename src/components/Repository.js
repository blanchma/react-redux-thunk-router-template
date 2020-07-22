import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
//import {actionX} from "../actions"

const Repository = () => {
  useRouteMatch("repositories/:repository");
  const dispatch = useDispatch();
  const match = useParams();

  console.log(match);

  return (
    <div>
      <h1> This is {match.repository} </h1>
    </div>
  );
};

export default Repository;
