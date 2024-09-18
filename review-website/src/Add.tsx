import React, {ChangeEvent, Component} from "react";
import { Back } from "./components/backButton";
import './Add.css';

type AddProps = {
    back: () => void;
}

export class Add extends Component<AddProps> {
    constructor(props: AddProps) {
        super(props);
        this.state = {};
    }

    render = (): JSX.Element => {
        return(
        <div className = "Review">
            <header className="header">
                <Back onClick={this.doBackClick}/>
                <span className="title">Something</span>
            </header>
            <body className = "body">
                <div className = "titleInput">
                    <span>Title:</span>
                    <input type="input" placeholder="Enter a title" className="mediaInput"></input>
                    <button className="submitTitle" type="submit"></button>
                </div>
                <div className="imageInput">
                    <span>Image:</span>
                    <input type="input" placeholder="Enter an image" className="mediaInput"></input>
                    <button className="submitTitle" type="submit"></button>
                </div>
                <div className="container">
                        <img className="image" src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"></img>
                        <div className = "start">
                        <div className="h2">Status:</div>
                            <select className = "dropdown" id="dropdown">
                                <option value = "" selected></option>
                                    <option value = "watching">Watching</option>
                                    <option value = "completed" >Completed</option>
                            </select>
                            <div className="h2">Score:</div>
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

    doBackClick = (): void =>{
        this.props.back();
    }
}