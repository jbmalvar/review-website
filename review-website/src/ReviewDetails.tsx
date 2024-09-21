import React, {ChangeEvent, Component} from 'react';

type Review = {
    title: string;
    image: string;
    score: number;
}

export class ReviewDetails extends Component<{}, Review>{
    constructor(props: {}) {
        super(props);
        this.state = {title: "", image: "", score: 0};
    }
}