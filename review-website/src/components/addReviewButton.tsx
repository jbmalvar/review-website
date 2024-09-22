import React, {Component} from "react"
import './addReviewButton.css';
import { ReviewDetails } from "../ReviewDetails";
import { url } from "inspector";

type AddReviewProps = {
    onClick: () => void;
    title: string;
    image: string;
    score: number;
}

/**
 * Add Review Button
 * @returns JSX Element
 */
export const AddReview = ({onClick, title, image, score}: AddReviewProps): JSX.Element =>{
   return (<div className = "full">
    <button className="addReviewButton" 
    style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `contain`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`
    }} 
    onClick={onClick}></button>
    <label>{title}{renderScore(score)}</label>
    </div>);   
}

/**
 * Adds Score
 * @returns a label with nothing or the score if not 0
 */
export const renderScore = (score: number):JSX.Element => {
    if(score !== 0){
        return <label>: {score}</label>
    }
    return <label></label>;
}


// I just wanted to show taht I was able to use components files for this.
// This is really only used here.