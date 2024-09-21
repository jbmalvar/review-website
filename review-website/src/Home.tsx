import React, {Component} from "react"
import  {AddReview} from "./components/addReviewButton";
import './Home.css';

type HomeProps = {
    addReview: () => void;
    title: string;
    image: string;
    score: number;
}

type ReviewDetailsState = {
    title: string;
    image: string;
    score: number;
}

export class Home extends Component<HomeProps, ReviewDetailsState>{
    constructor(props: HomeProps){
        super(props);
        this.state = {title: this.props.title, score: this.props.score, image: this.props.image};
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
                    <AddReview onClick={this.doAddReviewClick}
                    title={this.state.title}
                    image={this.state.image}
                    score={this.state.score}/>
                </div>
            </body>
            <footer className="Footer"></footer>
        </div>);
    }

    doAddReviewClick = (): void => {
        this.props.addReview();
    }
}