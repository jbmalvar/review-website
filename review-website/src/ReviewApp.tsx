import React, { Component } from "react";
import { Home } from "./Home";

type Page = {kind: "front"};

type ReviewAppState = {
  show: Page;
  averageScore: number;
}

export class ReviewApp extends Component <{}, ReviewAppState>{
  constructor(props: {}) {
    super(props);
    this.state = {show: {kind: "front"}, averageScore: 0};
  }

  render = (): JSX.Element => {
    return(<Home/>)
  }
}