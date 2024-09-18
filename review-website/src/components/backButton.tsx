import React, {Component} from "react"
import './backButton.css';

type backProps = {
    onClick: () => void;
}

/**
 * Add Review Button
 * @returns JSX Element
 */
export const Back = ({onClick}: backProps): JSX.Element =>{
   return (<div>
    <button className="backButton" onClick={onClick}>back</button>
    </div>);
}

// Used in multiple places.