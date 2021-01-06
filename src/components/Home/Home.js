import React, { Component } from 'react';
import "./Home.css";

class Home extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    redirectToBasicInfo = () => {
        this.props.history.push('/basic');
    }

    render() {
        return (
            <div className="Home">
               <div className="createResume">
                <p className="createHeader">Build your resume here. Click below to create one!</p>
                <span className="glyphicon glyphicon-plus" id="plusSign" data-toggle="modal" data-target="#myModal" onClick={() => this.redirectToBasicInfo()}></span>
               </div>
            </div>
        )
    }
}

export default Home