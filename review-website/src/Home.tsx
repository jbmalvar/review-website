import React, {Component} from "react"
import  {AddReview} from "./components/addReviewButton";
import './Home.css';

export class Home extends Component<{}>{
    constructor(props: {}){
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        return(<div className = "App">
            <span className = "heading">James' Media Review</span>
            <text> Average Score: </text>
            <text> Total Reviews: </text>
            <AddReview />
        </div>);
    }
}