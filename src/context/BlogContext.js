import React, { useState, useReducer } from "react";
import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `BlogPost #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = ( dispatch ) => {
    return () => {
        dispatch({ type: "add_blogpost" });
    }
};

export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost },
  []
);
