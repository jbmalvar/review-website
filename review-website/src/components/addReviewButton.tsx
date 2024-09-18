import React, {Component} from "react"
import './addReviewButton.css';

type AddReviewProps = {
    onClick: () => void;
}
/**
 * Add Review Button
 * @returns JSX Element
 */
export const AddReview = ({onClick}: AddReviewProps): JSX.Element =>{
   return (<div>
    <button className="addReviewButton" onClick={onClick}></button>
    </div>);
}


// I just wanted to show taht I was able to use components files for this.
// This is really only used here.