import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import "./SkillSet.css";

class SkillSet extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            skills: ["Select a skill", "C", "C++", "Java", "C#", "HTML", "CSS", "JavaScript",
                      "ReactJs", "VueJs", "Python", "Haskell", "Ruby", "Rails", "Sharepoint",
                      "Angular", "Bootstrap", "Git", "Dev-tools", "NodeJs"
                    ],
            selectedSkills: [],
            skillToSave: [],
            skillEachRow: ' ',
            editedSkill: ' ',
            showMessage: false,
            showMessageArray: null,
            backToWorkEx: true
        }
    }

    componentDidMount() {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
        || (this.props.status && this.props.status !== ' ')) {
            let skills = [];
            for(let i = 0; i < this.props.skills.length; i++) {
                skills[i] = this.props.skills[i];
            }
            for(let i = 0; i < skills.length; i++) {
                if(skills[i] === ' ') {
                    skills.splice(i, 1);
                }
            }
            this.setState({
                skillToSave: skills,
                isModalOpen: true
            })
        }
        else {
            this.setState({
                isModalOpen: true
            })
        }
    }

    selectSkillHandler = (e, id) => {
        let showMessage = false;
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
        || (this.props.status && this.props.status !== ' ')) {
            let showMsg = new Map();
            let skills = [];
            for(let i = 0; i < this.state.skillToSave.length; i++) {
                skills[i] = this.state.skillToSave[i];
            }
            for(let i = 0; i < skills.length; i++) {
                if(id === i) {
                    if(skills[i] !== e.target.value) {
                        skills[i] = e.target.value;
                    }
                }
            }
            for(let i = 0; i < this.state.skillToSave.length; i++) {
                if(e.target.value === this.state.skillToSave[i]) {
                    showMessage = true;
                   showMsg.set(id, "Already selected. Select some other value.");
                    e.target.value = this.state.skills[0];
                    break;
                }
            }
            this.setState({
                skillToSave: skills,
                showMessage: showMessage,
                showMessageArray: showMsg
            })
        }
        else {
            let showMsg = new Map();
            for(let i = 0; i < this.state.skillToSave.length; i++) {
                if(e.target.value === this.state.skillToSave[i]) {
                   showMessage = true;
                   showMsg.set(id, "Already selected. Select some other value.");
                   e.target.value = this.state.skills[0];
                   break;
                }
            }
            this.setState({
                skillEachRow: e.target.value,
                showMessage: showMsg,
                showMessageArray: showMsg
            })
        }
    }

    addSkillHandler = () => {
        let skills = [];
        for(let i = 0; i < this.state.skills.length; i++) {
            skills[i] = this.state.skills[i];
        }
        this.setState(state => {
            return {
                selectedSkills: state.selectedSkills.concat(
                   "a"
                ),
                skillToSave: state.skillToSave.concat(state.skillEachRow),
                showMessage: false
            }
        })
    } 

    render() {

        console.log(this.state.showMessageArray);

        let openModal = null;
        if(this.state.isModalOpen) {
            if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
            || (this.props.status && this.props.status !== ' ')) {
                openModal = <div id="myModal3" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Skills</h4>
                                </div>
                                <div class="modal-body">
                                <table className="skillSetTbl">
                                        {this.state.skillToSave.map((dt,rowId) =>(
                                            <tr className="skillSetRow">
                                                <div className="selectSkillDiv">
                                                    <select defaultValue={dt} onChange={(e) => this.selectSkillHandler(e, rowId)} className="skillSelect">
                                                        {this.state.skills.map((skill, id) => (
                                                            <option value={skill}>{skill}</option>
                                                        ))}
                                                    </select>
                                                    {this.state.showMessage ?
                                                     <span className="showMessage">{this.state.showMessageArray.get(rowId)}</span> :
                                                     ' '
                                                    }
                                                </div>
                                                <hr />
                                            </tr>
                                            
                                        ))}
                                    </table>
                                    <button type="button" className="btn" onClick={() => this.addSkillHandler()} id="skillSetBtn">Add Skill</button> 
                                </div>
                                <div>
                                    {
                                        this.props.status && this.props.status !== ' ' && !this.props.statusBasicInfo ?
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal4" onClick={() => this.props.storeSkillsInfo(this.props.history.push("/projects"),
                                                this.state.skillToSave, this.state.skillEachRow)}>Next</button>
                                            <button type="button" class="btn btn-success"  style={{float: 'left'}} data-toggle="modal" data-target="#myModal2" onClick={() => this.props.storeBackToWorkExInfo(this.props.history.push("/workex"), this.state.backToWorkEx)}>Back</button>
                                        </div> :
                                        <div class="modal-footer">
                                        {
                                            this.props.editBool1 && this.props.editBool1 !== ' ' ?
                                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal4" onClick={() => this.props.storeSkillsInfo(this.props.history.push("/projects"),
                                                this.state.skillToSave, this.state.skillEachRow)}>Next</button> :
                                            this.props.statusBasicInfo ?
                                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal6" onClick={() => this.props.storeSkillsInfo(this.props.history.push("/preview"),
                                        this.state.skillToSave, this.state.skillEachRow)}>Submit</button> :
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
                openModal = <div id="myModal3" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Skills</h4>
                                </div>
                                <div class="modal-body">
                                <table className="skillSetTbl">
                                        {this.state.selectedSkills.map((row, rowId) =>(
                                            <tr className="skillSetRow">
                                                <div className="selectSkillDiv">
                                                    <select onChange={(e) => this.selectSkillHandler(e, rowId)} className="skillSelect">
                                                        {this.state.skills.map((skill, id) => (
                                                            <option value={skill}>{skill}</option>
                                                        ))}
                                                    </select>
                                                    {this.state.showMessage ?
                                                     <span className="showMessage">{this.state.showMessageArray.get(rowId)}</span> :
                                                     ' '
                                                    }
                                                </div>
                                                <hr />
                                            </tr>
                                            
                                        ))}
                                    </table>
                                    <button type="button" className="btn" onClick={() => this.addSkillHandler()} id="skillSetBtn">Add Skill</button> 
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal4" onClick={() => this.props.storeSkillsInfo(this.props.history.push("/projects"),
                                    this.state.skillToSave, this.state.skillEachRow)}>Next</button>
                                 <button type="button" class="btn btn-success"  style={{float: 'left'}} data-toggle="modal" data-target="#myModal2" onClick={() => this.props.storeBackToWorkExInfo(this.props.history.push("/workex"), this.state.backToWorkEx)}>Back</button>
                                </div>
                            </div>
                        
                            </div>
                        </div>
            }
            
        }
        return (
            <div className="skillset">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        skills: state.skillSetInfo.skillArray,
        editBool: state.editSkillsInfo.editSkillsInfo,
        editBool1: state.editSkillsInfo.backToSkills,
        status: state.basicInfo.status,
        statusBasicInfo: state.editSkillsInfo.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeSkillsInfo: (directToProjects, skillToSave, lastSkill) => dispatch({type: actionTypes.STORE_SKILLSINFO, direct: directToProjects, skillToSave: skillToSave, lastSkill: lastSkill}),
        storeBackToWorkExInfo: (directToWorkEx, backToWorkEx) => dispatch({type: actionTypes.STORE_EDITWORKEXINFO, direct: directToWorkEx, backToWorkEx: backToWorkEx})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillSet)