import React, {ChangeEvent, Component} from "react";
import { Back } from "./components/backButton";
import './Add.css';

type AddProps = {
    back: () => void;
    addTitle:(word:string)=> void;
    addImage:(image:string)=> void;
    score:number;
}

type AddState = {
    title: string;
    image: string;
    status: string;
    score: number;
    characterScore: number;
    ostScore: number;
    storyScore: number;
    artScore: number;
}

export class Add extends Component<AddProps, AddState> {
    constructor(props: AddProps) {
        super(props);
        this.state = {
            title:"",
            image:"",
            status:"",
            characterScore: 0, 
            ostScore: 0,
            storyScore: 0,
            artScore:0,
            score: 0
        };
        this.setState({score: (this.state.characterScore + this.state.ostScore + this.state.artScore + this.state.storyScore) / 4});
    }

    render = (): JSX.Element => {
        return(
        <div className = "Review">
            <header className="header">
                <Back onClick={this.doBackClick}/>
                <span className="title">{this.renderTitle()}</span>
            </header>
            <body className = "body">
                <div className = "titleInput">
                    <span>Title:</span>
                    <input type="input" id="titleInput" placeholder="Enter a title" className="mediaInput"></input>
                    <button className="submitTitle" type="submit" onClick={this.doAddTitleClick}>
                        <img src="checkmark-xxl.png" width="20" height="20"></img>
                    </button>
                </div>
                <div className="imageInput">
                    <span>Image:</span>
                    <input type="input" id="imageInput" placeholder="Enter an image" className="mediaInput"></input>
                    <button className="submitTitle" type="submit" onClick={this.doAddImageClick}>
                        <img src="checkmark-xxl.png" width="20" height="20"></img>
                    </button>
                </div>
                <div className="container">
                        <img className="image" src={this.state.image}></img>
                        <div className = "start">
                        <div className="h2">Status:</div>
                            <select className = "dropdown" id="dropdown">
                                <option value = "" selected></option>
                                    <option value = "watching">Watching</option>
                                    <option value = "completed" >Completed</option>
                            </select>
                            <div className="h2">Score: {this.state.score}</div>
                            <div className="h2">Review</div>
                            <div className="reviewStats">
                                <div className="top">
                                    <div className="characterTop">
                                        <div>
                                            <label>Characters: </label>
                                            <select className = "dropdown" id="dropdown">
                                                <option value = "" selected></option>
                                                <option value = "1" >1</option>
                                                <option value = "2" >2</option>
                                                <option value = "3" >3</option>
                                                <option value = "4" >4</option>
                                                <option value = "5" >5</option>
                                                <option value = "6" >6</option>
                                                <option value = "7" >7</option>
                                                <option value = "8" >8</option>
                                                <option value = "9" >9</option>
                                                <option value = "10" >10</option>
                                            </select>
                                        </div>
                                        <textarea placeholder="Enter reason" className="reviewInput"></textarea>
                                    </div>
                                    <div className="ostTop">
                                        <div>
                                            <label>OST: </label>
                                            <select className = "dropdown" id="dropdown">
                                                <option value = "" selected></option>
                                                <option value = "1" >1</option>
                                                <option value = "2" >2</option>
                                                <option value = "3" >3</option>
                                                <option value = "4" >4</option>
                                                <option value = "5" >5</option>
                                                <option value = "6" >6</option>
                                                <option value = "7" >7</option>
                                                <option value = "8" >8</option>
                                                <option value = "9" >9</option>
                                                <option value = "10" >10</option>
                                            </select>
                                        </div>
                                        <textarea placeholder="Enter reason" className="reviewInput"></textarea>
                                    </div>
                                </div>
                                <div className="bot">
                                    <div className="storyBot">
                                        <div>
                                            <label>Story: </label>
                                            <select className = "dropdown" id="dropdown">
                                                <option value = "" selected></option>
                                                <option value = "1" >1</option>
                                                <option value = "2" >2</option>
                                                <option value = "3" >3</option>
                                                <option value = "4" >4</option>
                                                <option value = "5" >5</option>
                                                <option value = "6" >6</option>
                                                <option value = "7" >7</option>
                                                <option value = "8" >8</option>
                                                <option value = "9" >9</option>
                                                <option value = "10" >10</option>
                                            </select>
                                        </div>
                                        <textarea placeholder="Enter reason" className="reviewInput"></textarea>
                                    </div>
                                    <div className="artBot">
                                        <div>
                                            <label>Art: </label>
                                            <select className = "dropdown" id="dropdown">
                                                <option value = "" selected></option>
                                                <option value = "1" >1</option>
                                                <option value = "2" >2</option>
                                                <option value = "3" >3</option>
                                                <option value = "4" >4</option>
                                                <option value = "5" >5</option>
                                                <option value = "6" >6</option>
                                                <option value = "7" >7</option>
                                                <option value = "8" >8</option>
                                                <option value = "9" >9</option>
                                                <option value = "10" >10</option>
                                            </select>
                                        </div>
                                        <textarea placeholder="Enter reason" className="reviewInput"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </body>
            <footer className="footer"></footer>
        </div>)
    }

    renderTitle = ():string => {
        if(this.state.title === ""){
            return "Enter A Title"
        } else {
            return this.state.title;
        }
    }

    doBackClick = (): void =>{
        this.props.back();
    }

    doAddTitleClick = (): void =>{
        const title = document.getElementById("titleInput") as HTMLInputElement
        this.setState({title: title.value});
        this.props.addTitle(title.value);
    }

    doAddImageClick = (): void => {
        const image = document.getElementById("imageInput") as HTMLInputElement
        this.setState({image: image.value})
        this.props.addImage(image.value);
    }

    doCharacterScoreChange = (): void => {

    }
}