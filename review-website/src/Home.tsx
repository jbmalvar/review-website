import React, {Component} from "react"
import  {AddReview} from "./components/addReviewButton";
import './Home.css';

type HomeProps = {
    addReview: () => void;
}

export class Home extends Component<HomeProps>{
    constructor(props: HomeProps){
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        return(
        <div className = "App">
            <header className="Header">
                <span className = "title">James' Media Review</span>
            </header>
            <body className = "body">
                <div className = "text">
                    <span className = "avgScore"> Average Score: </span>
                    <span className = "totalReview"> Total Reviews: </span>
                </div>
                <div className = "reviews">
                    <AddReview onClick={this.props.addReview}/>
                </div>
            </body>
            <footer className="Footer"></footer>
        </div>);
    }

    doAddReviewClick = (): void => {
        this.props.addReview();
    }
}