import React, { Component } from "react";
import { Home } from "./Home";
import { Add } from  "./Add";
import { AddReview } from "./components/addReviewButton";

type Page = {kind: "front"} | {kind: "ReviewDetails"};

type ReviewAppState = {
  show: Page;
  averageScore: number;
  review: Review;
}

type Review = {
  title: string;
  image: string;
  score: number;
}

export class ReviewApp extends Component <{}, ReviewAppState>{
  constructor(props: {}) {
    super(props);
    this.state = {show: {kind: "front"}, averageScore: 0, review: {title: "", image: "", score: 0}};
  }
  

  render = (): JSX.Element => {
    if(this.state.show.kind === "ReviewDetails"){
      return(<Add back={this.doBackClick} addTitle={this.doTitleConfirmClick}/>);
    } else {
      return (<Home
      addReview={this.doAddReviewClick}/>);
    }
  }

  doAddReviewClick = (): void => {
    this.setState({show: {kind: "ReviewDetails"}});
  }

  doBackClick = (): void => {
    this.setState({show: {kind: "front"}});
  }

  doTitleConfirmClick = (word: string): void =>{
    this.setState({review: {title: "Hey", image: "", score: 0}});
  }
}