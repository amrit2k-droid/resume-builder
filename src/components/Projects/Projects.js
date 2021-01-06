import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import "./Projects.css";

class Projects extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            projectsArray: [],
            checked: false,
            id: ' ',
            projectNameArray: [],
            projectName: ' ',
            projectDescArray: [],
            projectDesc: ' ',
            projectStDtArray: [],
            projectStDate: ' ',
            projectEndDtArray: [],
            projectEndDate: ' ',
            inProgress:  ' ',
            addRow: false,
            backToSkills: true,
            checkPrEndDate: null,
            checkPrEndDateBool: false,
            checkPrEndDate1: null,
            checkPrEndDateBool1: false,
            checkPrStartDate: null,
            checkPrStartDateBool: false,
            demoArray: []
        }
    }

    componentDidMount() {
      if((this.props.editBool && this.props.editBool != ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
      || (this.props.status && this.props.status !== ' ')) {
          let projectName = [];
          for(let i = 0; i < this.props.projectName.length; i++) {
              projectName[i] = this.props.projectName[i];
          }
          for(let i = 0; i < projectName.length; i++) {
              if(projectName[i] === ' ') {
                  projectName.splice(i, 1);
              }
          }

          let projectDesc = [];
          for(let i = 0; i < this.props.projectDesc.length; i++) {
              projectDesc[i] = this.props.projectDesc[i];
          }
          for(let i = 0; i < projectDesc.length; i++) {
              if(projectDesc[i] === ' ') {
                  projectDesc.splice(i, 1);
              }
          }

          let projectStartDate = [];
          for(let i = 0; i < this.props.projectStartDate.length; i++) {
              projectStartDate[i] = this.props.projectStartDate[i];
          }
          for(let i = 0; i < projectStartDate.length; i++) {
              if(projectStartDate[i] === ' ') {
                  projectStartDate.splice(i, 1);
              }
          }

        let projectEndDate = [];
        for(let i = 0; i < this.props.projectEndDate.length; i++) {
            projectEndDate[i] = this.props.projectEndDate[i];
        }
        for(let i = 0; i < projectEndDate.length; i++) {
            if(projectEndDate[i] === ' ' || projectEndDate[i] === undefined) {
                projectEndDate.splice(i, 1);
            }
        }
        if(this.props.inProgress != ' ' && this.props.projectEndDate[this.props.projectEndDate.length - 1] === undefined) {
            projectEndDate.push(this.props.inProgress);
        }
        else if(this.props.inProgress != ' ' && this.props.projectEndDate[this.props.projectEndDate.length - 1] != undefined) {
            projectEndDate.splice(projectEndDate.length - 1, 1);
            projectEndDate.push(this.props.inProgress);
        }
         
          this.setState({
              projectNameArray: projectName,
              projectDescArray: projectDesc,
              projectStDtArray: projectStartDate,
              projectEndDtArray: projectEndDate,
              inProgress: this.props.inProgress,
              isModalOpen: true,
              checked: projectEndDate[projectEndDate.length - 1] === "present"? true: false,
              id: projectEndDate[projectEndDate.length - 1] === "present"? projectEndDate.length - 1: ' ',
          })
      }
      else {
        this.setState({
            isModalOpen: true
        })
      }
    }

    pjtNameHandler = (e, id) => {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
             || (this.props.status && this.props.status !== ' ')) {
            let projectName = [];
            for(let i = 0; i < this.state.projectNameArray.length; i++) {
                projectName[i] = this.state.projectNameArray[i];
            }
            for(let i = 0; i < projectName.length; i++) {
                if(id === i) {
                    if(projectName[i] !== e.target.value) {
                        projectName[i] = e.target.value
                    }
                }
            }
            this.setState({
                projectNameArray: projectName,
                projectName: this.state.addRow && id === projectName.length? e.target.value: ' '
            })
        }
        else {
            this.setState({
                projectName: e.target.value
            })
        }
    }

    pjtDescHandler = (e, id) => {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
            || (this.props.status && this.props.status !== ' ')) {
            let projectDesc = [];
            for(let i = 0; i < this.state.projectDescArray.length; i++) {
                projectDesc[i] = this.state.projectDescArray[i];
            }
            for(let i = 0; i < projectDesc.length; i++) {
                if(id === i) {
                    if(projectDesc[i] !== e.target.value) {
                        projectDesc[i] = e.target.value;
                    }
                }
            }
            this.setState({
                projectDescArray: projectDesc,
                projectDesc: this.state.addRow && id === projectDesc.length? e.target.value: ' '
            })
        }
        this.setState({
            projectDesc: e.target.value
        })
    }

    pjtStDtHandler = (e, id) => {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
            || (this.props.status && this.props.status !== ' ')) {
            let projectStartDate = [];
            for(let i = 0; i < this.state.projectStDtArray.length; i++) {
                projectStartDate[i] = this.state.projectStDtArray[i];
            }
            for(let i = 0; i < projectStartDate.length; i++) {
                if(id === i) {
                    if(projectStartDate[i] !== e.target.value) {
                        projectStartDate[i] = e.target.value
                    }
                }
            }
            let checkPrStartDate = new Map();
            let checkPrStartDateBool = false;
            if(id > 0) {
                if(e.target.value < this.state.projectEndDtArray[id - 1]) {
                    checkPrStartDate.set(id, "Select a date greater than than the last end date.");
                    checkPrStartDateBool = true;
                    e.target.value = ' ';
                }
            }
            this.setState({
                projectStDtArray: projectStartDate,
                projectStDate: this.state.addRow && id === projectStartDate.length? e.target.value: ' ',
                checkPrStartDate: checkPrStartDate,
                checkPrStartDateBool: checkPrStartDateBool
            })
        }
        else {
            this.setState({
                projectStDate: e.target.value
            })
        }
    }

    pjtEndDtHandler = (e, id) => {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
            || (this.props.status && this.props.status !== ' ')) {
            let projectEndDate = [];
            for(let i = 0; i < this.state.projectEndDtArray.length; i++) {
                projectEndDate[i] = this.state.projectEndDtArray[i];
            }
            for(let i = 0; i < projectEndDate.length; i++) {
                if(id === i) {
                    if(projectEndDate[i] !== e.target.value) {
                        projectEndDate[i] = e.target.value
                    }
                }
            }
            let checkPrEndDate = new Map();
            let checkPrEndDateBool = false;
            let checkPrEndDate1 = new Map();
            let checkPrEndDateBool1 = false;
            let demoArray = [];
            if(e.target.value < this.state.projectStDtArray[id] && !this.state.checkPrEndDateBool1) { 
           //     alert("checkpt0");
                checkPrEndDateBool = true;
                checkPrEndDate.set(id, "Select a date after the start date."); 
                e.target.value = ' ';
            }
            if(this.state.projectStDtArray.length > id + 1) {
                if(this.state.projectEndDtArray[id] <= this.state.projectStDtArray[id + 1]) {
                    if(e.target.value > this.state.projectStDtArray[id + 1]) {
                //      alert("checkpt1");
                        checkPrEndDateBool1 = true;
                        checkPrEndDateBool = false;
                        checkPrEndDate1.set(id, "Select a date before the next start date.");
                       
                        e.target.value = ' ';
                    }
                }
                
            }
            if(!this.state.checked) {
                for(let i = 0; i < projectEndDate.length; i++) {
                    if(projectEndDate[i] === "present") {
                        projectEndDate[i] = e.target.value;
                    }
                }
            }
            this.setState({
                projectEndDtArray: projectEndDate,
                projectEndDate: this.state.addRow && id === projectEndDate.length? e.target.value: ' ',
                checkPrEndDate: checkPrEndDate,
                checkPrEndDateBool: checkPrEndDateBool,
                checkPrEndDate1: checkPrEndDate1,
                checkPrEndDateBool1: checkPrEndDateBool1,
                demoArray: demoArray
            })
        }
        else {
            this.setState({
                projectEndDate: e.target.value
            })
        }
    }

    addProjectHandler = () => {
        this.setState(state => {
            return {
                projectsArray: state.projectsArray.concat("a"),
                projectNameArray: state.projectNameArray.concat(state.projectName),
                projectDescArray: state.projectDescArray.concat(state.projectDesc),
                projectStDtArray: state.projectStDtArray.concat(state.projectStDate),
                projectEndDtArray: state.projectEndDtArray.concat(state.projectEndDate),
                addRow: true
            }
        })
    }

    pjtInprogressHandler = (e, id) => {
       /*  this.setState({
            checked: e.target.checked,
            id: id,
            inProgress: "present"
        }) */
        this.setState(state => {
            return {
                checked:  !state.checked,
                id: id
            }
        })
    }

    render() {
        console.log("bool", this.state.checkPrEndDate);
        console.log("bool1", this.state.checkPrEndDate1);
        let openModal = null;
        if(this.state.isModalOpen) {
            if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
                || (this.props.status && this.props.status !== ' ')) {
                openModal = <div id="myModal4" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Projects</h4>
                                </div>
                                <div class="modal-body">
                                    <table className="pjtTbl">
                                        {this.state.projectNameArray.map((dt, rowId) => (
                                            <tr className="pjtRow">
                                                <div className="projectsDiv">
                                                    <div className="pjtNameDiv">
                                                        <span className="pjtNameSpan">Enter the project title</span>
                                                        <input type="text" className="form-control" id="pjtNameInp" defaultValue={rowId <= this.props.projectName.length - 1? dt: ' '} onChange={(e) => this.pjtNameHandler(e, rowId)} />
                                                    </div>
                                                    <div className="pjtDescDiv">
                                                        <span className="pjtDescSpan">Describe the project in brief</span>
                                                        <textarea type="textarea" className="form-control" id="pjtDescInput" defaultValue={rowId <= this.props.projectDesc.length - 1? this.state.projectDescArray[rowId]: ' '} onChange={(e) => this.pjtDescHandler(e, rowId)}></textarea>
                                                    </div>
                                                    <div className="pjtStDateDiv">
                                                        <span className="pjtStDateSpan">When did the project start?</span>
                                                        <input  type="date" className="form-control" id="pjtStDateInp" defaultValue={rowId <= this.props.projectStartDate.length - 1? this.state.projectStDtArray[rowId]: ' '} onChange={(e) => this.pjtStDtHandler(e, rowId)} />
                                                        {
                                                            this.state.checkPrStartDateBool ?
                                                            <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkPrStartDate.get(rowId)}</span> :
                                                            <span></span>
                                                        }
                                                    </div>
                                                    {this.state.id === rowId && this.state.checked ?
                                                        ' ' :
                                                        <div className="pjtEndDtDiv">
                                                            <span className="pjtStDtSpan">When did the project end?</span>
                                                            <input type="date" className="form-control" id="pjtEndDtInp" defaultValue={rowId <= this.props.projectEndDate.length - 1? this.state.projectEndDtArray[rowId]: ' '} onChange={(e) => this.pjtEndDtHandler(e, rowId)} />
                                            
                                                            {
                                                                 this.state.checkPrEndDateBool ?
                                                                <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkPrEndDate.get(rowId)}</span> :
                                                                <span></span>
                                                            }
                                                            {
                                                                 this.state.checkPrEndDateBool1 ?
                                                                 <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkPrEndDate1.get(rowId)}</span> :
                                                                 <span></span>
                                                            }
                                                            
                                                           {/*  {
                                                                this.state.checkPrEndDateBool1 ?
                                                                <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkPrEndDate1.get(rowId)}</span> :
                                                                <span></span>
                                                            } */}
                                                        </div>
                                                    }
                                                    <div className="inProgressDiv">
                                                        <input type="checkbox" className="inProgressInp" defaultChecked={this.state.projectEndDtArray[rowId] === "present"} onChange={(e) => this.pjtInprogressHandler(e, rowId)} />&nbsp;
                                                        <span className="inProgressInp">Project in progress</span>
                                                    </div>
                                                </div>
                                                <hr />
                                            </tr>
                                        ))}
                                    </table>
                                    <button type="button" className="btn" id="projectsBtn" onClick={() => this.addProjectHandler()} disabled={this.state.checked}>Add a project</button>
                                </div>
                                <div>
                                    {
                                         this.props.status && this.props.status !== ' ' && !this.props.statusBasicInfo ?
                                         <div class="modal-footer">
                                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal5" onClick={() => this.props.storeProjectInfo(this.props.history.push("/achievements"),
                                                this.state.projectName, this.state.projectDesc, this.state.projectStDate, this.state.projectEndDate,
                                                this.state.projectNameArray, this.state.projectDescArray, this.state.projectStDtArray, this.state.projectEndDtArray, this.state.checked)}>Next
                                            </button>
                                            <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal3" onClick={() => this.props.storeBackToSKillsInfo(this.props.history.push("/skills"), this.state.backToSkills)}>
                                            Back
                                            </button>
                                        </div> :
                                        <div class="modal-footer">
                                            {
                                                this.props.editBool1 && this.props.editBool1 !== ' ' ?
                                                <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal5" onClick={() => this.props.storeProjectInfo(this.props.history.push("/achievements"),
                                                    this.state.projectName, this.state.projectDesc, this.state.projectStDate, this.state.projectEndDate,
                                                    this.state.projectNameArray, this.state.projectDescArray, this.state.projectStDtArray, this.state.projectEndDtArray, this.state.checked)}>Next
                                                </button> :
                                                this.props.statusBasicInfo ?
                                                <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal6" onClick={() => this.props.storeProjectInfo(this.props.history.push("/preview"),
                                                    this.state.projectName, this.state.projectDesc, this.state.projectStDate, this.state.projectEndDate,
                                                    this.state.projectNameArray, this.state.projectDescArray, this.state.projectStDtArray, this.state.projectEndDtArray, this.state.checked)}>Submit
                                                </button> :
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
                openModal = <div id="myModal4" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Projects</h4>
                                </div>
                                <div class="modal-body">
                                    <table className="pjtTbl">
                                        {this.state.projectsArray.map((pjt, rowId) => (
                                            <tr className="pjtRow">
                                                <div className="projectsDiv">
                                                    <div className="pjtNameDiv">
                                                        <span className="pjtNameSpan">Enter the project title</span>
                                                        <input type="text" className="form-control" id="pjtNameInp" onChange={(e) => this.pjtNameHandler(e)} />
                                                    </div>
                                                    <div className="pjtDescDiv">
                                                        <span className="pjtDescSpan">Describe the project in brief</span>
                                                        <textarea type="textarea" className="form-control" id="pjtDescInput" onChange={(e) => this.pjtDescHandler(e)}></textarea>
                                                    </div>
                                                    <div className="pjtStDateDiv">
                                                        <span className="pjtStDateSpan">When did the project start?</span>
                                                        <input  type="date" className="form-control" id="pjtStDateInp" onChange={(e) => this.pjtStDtHandler(e)} />
                                                    </div>
                                                    {this.state.checked && this.state.id === rowId ?
                                                        ' ' :
                                                        <div className="pjtEndDtDiv">
                                                            <span className="pjtStDtSpan">When did the project end?</span>
                                                            <input type="date" className="form-control" id="pjtEndDtInp" onChange={(e) => this.pjtEndDtHandler(e)} />
                                                        </div>
                                                    }
                                                    <div className="inProgressDiv">
                                                        <input type="checkbox" className="inProgressInp" onChange={(e) => this.pjtInprogressHandler(e, rowId)} />&nbsp;
                                                        <span className="inProgressInp">Project in progress</span>
                                                    </div>
                                                </div>
                                                <hr />
                                            </tr>
                                        ))}
                                    </table>
                                    <button type="button" className="btn" id="projectsBtn" onClick={() => this.addProjectHandler()} disabled={this.state.checked}>Add a project</button>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal5" onClick={() => this.props.storeProjectInfo(this.props.history.push("/achievements"),
                                        this.state.projectName, this.state.projectDesc, this.state.projectStDate, this.state.projectEndDate,
                                        this.state.projectNameArray, this.state.projectDescArray, this.state.projectStDtArray, this.state.projectEndDtArray, this.state.checked)}>Next
                                    </button>
                                    <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal3" onClick={() => this.props.storeBackToSKillsInfo(this.props.history.push("/skills"), this.state.backToSkills)}>
                                    Back
                                    </button>
                                </div>
                            </div>
                        
                            </div>
                        </div>
            }
        }

        return (
            <div className="projects">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projectName: state.projectsInfo.projectNameArray,
        projectDesc: state.projectsInfo.projectDescArray,
        projectStartDate: state.projectsInfo.projectStDateArray,
        projectEndDate: state.projectsInfo.projectEndDtArray,
        inProgress: state.projectsInfo.status,
        editBool: state.editProjectsInfo.editProjectsInfo,
        editBool1: state.editProjectsInfo.backToProjects,
        status: state.basicInfo.status,
        statusBasicInfo: state.editProjectsInfo.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeProjectInfo: (direct, pjtName, pjtDesc, pjtStDate, pjtEndDate, pjtNameArray,
                           pjtDescArray, pjtStDateArray, pjtEndDtArray, inProgress) => dispatch({type: actionTypes.STORE_PROJECTSINFO,
                           directToAchievements: direct, pjtName: pjtName, pjtDesc: pjtDesc, pjtStDate: pjtStDate, pjtEndDate: pjtEndDate, pjtNameArray: pjtNameArray,
                           pjtDescArray: pjtDescArray, pjtStDateArray: pjtStDateArray, pjtEndDtArray: pjtEndDtArray, status: inProgress}),
        storeBackToSKillsInfo: (direct, backToSkills) => dispatch({type: actionTypes.STORE_EDITSKILLSINFO, direct: direct, backToSkills: backToSkills})                   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)