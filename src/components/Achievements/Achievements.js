import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import "./Achievements.css";

class Achievements extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            achievementsArray: [],
            addedAchievement: ' ',
            achievementToSave: [],
            addRow: false,
            backToProjects: true
        }
    }

    componentDidMount() {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.status && this.props.status !== ' ')) {
            let achievements = [];
            for(let i = 0; i < this.props.achievements.length; i++) {
                achievements[i] = this.props.achievements[i];
            }
            for(let i = 0; i < achievements.length; i++) {
                if(achievements[i] === ' ') {
                    achievements.splice(i, 1);
                }
            }
            this.setState({
                achievementToSave: achievements,
                isModalOpen: true
            })
        }
        else {  
            this.setState({
                isModalOpen: true
            })
        }
       
    }

    achievementInpHandler = (e, rowId) => {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.status && this.props.status !== ' ')) {
            let achievement = [];
            for(let i = 0; i < this.state.achievementToSave.length; i++) {
                achievement[i] = this.state.achievementToSave[i];
            }
            for(let i = 0; i < achievement.length; i++) {
                if(rowId === i) {
                    if(achievement[i] !== e.target.value) {
                        achievement[i] = e.target.value
                    }
                }
            }
            this.setState({
                achievementToSave: achievement,
                addedAchievement: this.state.addRow && rowId === achievement.length? e.target.value: ' '
                   
            })
        }
        else {
            this.setState({
                addedAchievement: e.target.value
            })
        }
    }

    addAchievementHandler = () => {
        this.setState(state => {
            return {
                achievementsArray: state.achievementsArray.concat(
                    "a"
                   
                ),
                achievementToSave: state.achievementToSave.concat(state.addedAchievement),
                addRow: true
            }
        })
    }

    render() {
        console.log("achToSave ", this.state.achievementToSave);
        let openModal = null;
        if(this.state.isModalOpen) {
            if((this.props.editBool && this.props.editBool != ' ') || (this.props.status && this.props.status !== ' ')) {
                openModal = <div id="myModal5" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Achievements</h4>
                                        </div>
                                        <div class="modal-body">
                                            <table className="achievementTbl">
                                                {this.state.achievementToSave.map((dt, rowId) => (
                                                    <tr className="achievementRow">
                                                            <div className="achDiv">
                                                                <span className="achSpan">Enter an achievement you're proud of :)</span>
                                                                <textarea type="textarea" className="form-control" id="writeSomething" defaultValue={rowId <= this.props.achievements.length - 1? dt: ' '} onChange={(e) => this.achievementInpHandler(e, rowId)}></textarea>
                                                            </div>
                                                        <hr/>
                                                    </tr>
                                                ))}
                                            </table>
                                            <button type="button" className="btn" id="addAchievementBtn" data-toggle="modal" data-target="#myModal6" onClick={() => this.addAchievementHandler()}>Add an achievement</button>
                                        </div>
                                        <div>
                                            {
                                                 this.props.status && this.props.status !== ' ' && !this.props.statusBasicInfo ?
                                                 <div class="modal-footer">
                                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal6" onClick={() => this.props.storeAchievementsInfo(this.props.history.push("/preview"),
                                                        this.state.achievementToSave, this.state.addedAchievement)}>Next</button>
                                                    <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal4" onClick={() => this.props.storeBackToProjectsInfo(this.props.history.push("/projects"), this.state.backToProjects)}>Back</button>
                                            </div> :
                                             <div class="modal-footer">
                                                {
                                                    this.props.statusBasicInfo ?
                                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal6" onClick={() => this.props.storeAchievementsInfo(this.props.history.push("/preview"),
                                                    this.state.achievementToSave, this.state.addedAchievement)}>Submit</button> :
                                                    <div></div>
                                                }   
                                            </div>
                                            }
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
            }
            else {
                openModal = <div id="myModal5" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Achievements</h4>
                                        </div>
                                        <div class="modal-body">
                                            <table className="achievementTbl">
                                                {this.state.achievementsArray.map(row => (
                                                    <tr className="achievementRow">
                                                        <div className="achDiv">
                                                            <span className="achSpan">Enter an achievement you're proud of :)</span>
                                                            <textarea type="textarea" className="form-control" id="writeSomething"  onChange={(e) => this.achievementInpHandler(e)}></textarea>
                                                        </div>
                                                        <hr />
                                                    </tr>
                                                ))}
                                            </table>
                                            <button type="button" className="btn" id="addAchievementBtn" data-toggle="modal" data-target="#myModal6" onClick={() => this.addAchievementHandler()}>Add an achievement</button>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal6" onClick={() => this.props.storeAchievementsInfo(this.props.history.push("/preview"),
                                                this.state.achievementToSave, this.state.addedAchievement)}>Next</button>
                                            <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal4" onClick={() => this.props.storeBackToProjectsInfo(this.props.history.push("/projects"), this.state.backToProjects)}>Back</button>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>
            }
            
        }

        return (
            <div className="achievements">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        achievements: state.achievementsInfo.achievementArray,
        editBool: state.editAchInfo.editAchInfo,
        status: state.basicInfo.status,
        statusBasicInfo: state.editAchInfo.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeAchievementsInfo: (directToPreview, achievementArray, lastRowOfAchievement) => dispatch({type: actionTypes.STORE_ACHIEVEMENTSINFO,
                                direct: directToPreview, achievementArray: achievementArray, lastRowOfAchievement: lastRowOfAchievement}),
        storeBackToProjectsInfo: (direct, backToProjects) => dispatch({type: actionTypes.STORE_EDITPROJECTSINFO, direct: direct, backToProjects: backToProjects})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Achievements)