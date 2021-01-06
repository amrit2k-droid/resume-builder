import React from 'react'

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import "./PreviewResume.css";

class PreviewResume extends React.Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            name: ' ',
            role: ' ',
            cover: ' ',
            email: ' ',
            github: ' ',
            linkedIn: ' ',
            profileLink: ' ',
            contact: ' ',
            designation: [],
            company: [],
            startDate: [],
            endDate: [],
            isWorking: ' ',
            skills: [],
            projectName: [],
            projectDesc: [],
            projectStartDate: [],
            projectEndDate: [],
            projectInProgress: ' ',
            achievement: [],
            editWorkEx: true,
            editBasicInfo: true,
            editLinksInfo: true,
            editProjectsInfo: true,
            editAchInfo: true,
            editSkillsInfo: true,
            statusBasicInfo: true
        }
    }

    componentDidMount() {
       const name = this.props.name;
       const role = this.props.role;
       const cover = this.props.cover;
       const email = this.props.email;
       const github = this.props.github;
       const linkedIn = this.props.linkedIn;
       const profileLink = this.props.profileLink;
       const contact = this.props.contact;
       let designation = [];
       for(let i = 0; i < this.props.designationArray.length; i++) {
           designation.push(this.props.designationArray[i]);
       }
       for(let i = 0; i < designation.length; i++) {
           if(designation[i] === ' ') {
               designation.splice(i, 1);
           }
       }

       let company = [];
       for(let i = 0; i < this.props.companyArray.length; i++) {
           company.push(this.props.companyArray[i]);   
       }
       for(let i = 0; i < company.length; i++) {
           if(company[i] === ' ') {
               company.splice(i, 1);
           }
       }

       let startDate = [];
       for(let i = 0; i < this.props.startDateArray.length; i++) {
           startDate.push(this.props.startDateArray[i]);
       }
       for(let i = 0; i < startDate.length; i++) {
           if(startDate[i] === ' ') {
               startDate.splice(i, 1);
           }
       }

       let endDate = [];
       for(let i = 0; i < this.props.endDateArray.length; i++) {
         endDate.push(this.props.endDateArray[i]);
       }
       for(let i = 0; i < endDate.length; i++) {
           if(endDate[i] === ' ' || endDate[i] === undefined) {
             endDate.splice(i, 1);
           }
       }
       if(this.props.isWorking != ' ' && this.props.endDateArray[this.props.endDateArray.length - 1] === undefined) {
           endDate.push(this.props.isWorking);
       }
       else if(this.props.isWorking != ' ' && this.props.endDateArray[this.props.endDateArray.length - 1] != undefined) {
           endDate.splice(endDate.length - 1, 1);
           endDate.push(this.props.isWorking);
       }

       let skills = [];
       for(let i = 0; i < this.props.skillArray.length; i++) {
           skills.push(this.props.skillArray[i]);
       }
       for(let i = 0; i < skills.length; i++) {
           if(skills[i] === ' ') {
               skills.splice(i, 1);
           }
       }

       let projectName = [];
       for(let i = 0; i < this.props.projectNameArray.length; i++) {
        projectName.push(this.props.projectNameArray[i]);
       }
       for(let i = 0; i < projectName.length; i++) {
           if(projectName[i] === ' ') {
            projectName.splice(i, 1);
           }
       }

       let projectDesc = [];
       for(let i = 0; i < this.props.projectDescArray.length; i++) {
           projectDesc.push(this.props.projectDescArray[i]);
       }
       for(let i = 0; i < projectDesc.length; i++) {
           if(projectDesc[i] === ' ') {
               projectDesc.splice(i, 1);
           }
       }

       let pjtStartDate = [];
       for(let i = 0; i < this.props.projectStartDateArray.length; i++) {
           pjtStartDate.push(this.props.projectStartDateArray[i]);
       }
       for(let i = 0; i < pjtStartDate.length; i++) {
           if(pjtStartDate[i] === ' ') {
               pjtStartDate.splice(i, 1);
           }
       }

       let pjtEndDate = [];
       for(let i = 0; i < this.props.projectEndDateArray.length; i++) {
           pjtEndDate.push(this.props.projectEndDateArray[i]);
       }
       for(let i = 0; i < pjtEndDate.length; i++) {
           if(pjtEndDate[i] === ' ' || pjtEndDate[i] === undefined) {
               pjtEndDate.splice(i, 1);
           }
       }
       if(this.props.isProjectInProgress != ' ' && this.props.projectEndDateArray[this.props.projectEndDateArray.length - 1] === undefined) {
            pjtEndDate.push(this.props.isProjectInProgress);
       }
       else if(this.props.isProjectInProgress != ' ' && this.props.projectEndDateArray[this.props.projectEndDateArray.length - 1] != undefined) {
            pjtEndDate.splice(pjtEndDate.length - 1, 1);
            pjtEndDate.push(this.props.isProjectInProgress);
       }

       let achievement = [];
       for(let i = 0; i < this.props.achievementArray.length; i++) {
           achievement.push(this.props.achievementArray[i]);
       }
       for(let i = 0; i < achievement.length; i++) {
           if(achievement[i] === ' ') {
               achievement.splice(i, 1);
           }
       }

       this.setState({
            isModalOpen: true,
            name: name,
            role: role,
            cover: cover,
            email: email,
            github: github,
            linkedIn: linkedIn,
            profileLink: profileLink,
            contact: contact,
            designation: designation,
            company: company,
            startDate: startDate,
            endDate: endDate,
            skills: skills,
            projectName: projectName,
            projectDesc: projectDesc,
            projectStartDate: pjtStartDate,
            projectEndDate: pjtEndDate,
            achievement: achievement
       })
       
    }

    directToEditBasicInfo = () => {
        this.props.history.push("/basic");
    }

    render() {

        //test the props
        console.log("isworking", this.props.isWorking);

        let openModal = null;
        if(this.state.isModalOpen) {
            openModal = <div id="myModal6" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header" id="resumeHeader">
                                <button type="button" class="close" data-dismiss="modal" >&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Resume</h4>
                                </div>
                                <div class="modal-body">
                                   <div className="resume">
                                        <div className="topPortion">
                                           <h4 className="showName">
                                               {
                                                    this.props.name.length !== 0 && this.props.name !== ' ' ?
                                                   <b>{this.props.name}</b> :
                                                   <b style={{color: 'red'}}>Name not provided.</b>  
                                               }
                                              
                                            </h4>
                                            <span class="glyphicon glyphicon-pencil" id="editBasicInfo" data-toggle="modal" data-target="#myModal" onClick={() => this.props.storeEditBasicInfo(this.state.editBasicInfo, this.props.history.push("/basic"))}></span>
                                            {
                                                this.props.role.length !== 0 && this.props.role !== ' ' ?
                                                <h6 className="showRole">{this.props.role}</h6> :
                                                <h6 className="showRole" style={{color: 'red'}}>Current role not provided.</h6>
                                            }
                                            {
                                                this.props.cover.length !== 0 && this.props.cover !== ' ' ?
                                                <p className="showCover">{this.props.cover}</p> :
                                                <p className="showCover" style={{color: 'red'}}>Cover statement not provided.</p>
                                            }
                                           
                                           <hr />
                                        </div>
                                        <div className="middlePortion">
                                            <div className="showEmailDiv">
                                                <h4 className="showLinks">
                                                    <b>Links</b>
                                                    <span class="glyphicon glyphicon-pencil" id="editLinksInfo" data-toggle="modal" data-target="#myModal1" onClick={() => this.props.storeLinksInfo(this.state.editLinksInfo, this.props.history.push("/links"), this.state.statusBasicInfo)}></span>
                                                </h4>
                                                <span className="showEmailSpan"><b>Email:</b></span>&nbsp;
                                                {
                                                    this.props.email.length !== 0 && this.props.email !== ' ' ?
                                                    <p className="email">{this.props.email}</p> :
                                                    <p className="email" style={{color: 'red'}}>Data not provided.</p>
                                                }
                                            </div>
                                            <div className="showGithubDiv">
                                                <span className="showGithubSpan"><b>Github:</b></span>&nbsp;
                                                {
                                                    this.props.github.length !== 0 && this.props.github !== ' ' ?
                                                    <p className="github">{this.props.github}</p> :
                                                    <p className="github" style={{color: 'red'}}>Data not provided.</p>
                                                }
                                                
                                            </div>
                                            <div className="showLinkedInDiv">
                                                <span className="showLinkedInSpan"><b>LinkedIn:</b></span>&nbsp;
                                                {
                                                    this.props.linkedIn.length !== 0 && this.props.linkedIn !== ' ' ?
                                                    <p className="linkedIn">{this.props.linkedIn}</p> :
                                                    <p className="linkedIn" style={{color: 'red'}}>Data not provided.</p>
                                                }
                                            </div>
                                            <div className="showProfileLinkDiv">
                                                <span className="showProfileLinkSpan"><b>Profile link:</b></span>&nbsp;
                                                {
                                                    this.props.profileLink.length !== 0 && this.props.profileLink !== ' ' ?
                                                    <p className="profileLink">{this.props.profileLink}</p> :
                                                    <p className="profileLink" style={{color: 'red'}}>Data not provided.</p>
                                                }
                                            </div>
                                            <div className="showContactDiv">
                                                <span className="showContactSpan"><b>Contact:</b></span>&nbsp;
                                                {
                                                    this.props.contact.toString().length !== 0 && this.props.contact.toString() !== ' ' ?
                                                    <p className="contact">{this.props.contact}</p> :
                                                    <p className="contact" style={{color: 'red'}}>No data provided.</p>
                                                }
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="leftPortion">
                                            <div className="showWorkExDiv">
                                                <h5 className="workEx">
                                                    <b>Work Experience</b>
                                                    <span class="glyphicon glyphicon-pencil" id="editWorkInfo" data-toggle="modal" data-target="#myModal2" onClick={() => this.props.storeEditWorkExInfo(this.state.editWorkEx,this.props.history.push("/workex"), this.state.statusBasicInfo)}></span>
                                                </h5>
                                                {
                                                    this.state.company.length === 0 && this.state.designation.length === 0 ?
                                                    <p style={{color:'red', fontFamily: '"Montserrat", sans-serif'}}>Data not provided.</p> :
                                                    <table className="showWorkExTbl">
                                                        {this.state.company.map((dt, rowId) => (
                                                            <tr className="showWorkExRow">
                                                                {
                                                                    dt.length !== 0 && dt !== ' ' ?
                                                                    <h5 className="company"><b>{dt}</b></h5> :
                                                                    <h5 className="company" style={{color: 'red'}}>Company data not provided.</h5>
                                                                }
                                                                
                                                                {
                                                                    this.state.designation[rowId].length !== 0 && this.state.designation[rowId] !== ' ' ?
                                                                    <p className="designation">{this.state.designation[rowId]}</p> :
                                                                    <p className="designation" style={{color: 'red'}}>Designation data not provided.</p> 
                                                                }
                                                                <div className="startToEndDate">
                                                                    {
                                                                        this.state.startDate[rowId] !== ' ' && this.state.startDate[rowId] !== undefined ?
                                                                        <span className="start">({this.state.startDate[rowId]}</span> :
                                                                        <span className="start" style={{color: 'red'}}>(NA</span>
                                                                    }&nbsp;
                                                                    <span className="to">to</span>&nbsp;
                                                                    {
                                                                        this.state.endDate[rowId] !== ' ' && this.state.endDate[rowId] !== undefined ?
                                                                        <span className="end">{this.state.endDate[rowId]})</span> :
                                                                        <span className="end" style={{color: 'red'}}>NA)</span>
                                                                    }
                                                                </div>
                                                                <hr />
                                                            </tr>
                                                        ))}
                                                    </table>
                                                }
                                            </div>
                                            <div className="showSkillsDiv">
                                                <h5 className="skills">
                                                    <b>Skills</b>
                                                    <span class="glyphicon glyphicon-pencil" id="showSkillsInfo" data-toggle="modal" data-target="#myModal3" onClick={() => this.props.storeSkillsInfo(this.state.editSkillsInfo, this.props.history.push("/skills"), this.state.statusBasicInfo)}></span>
                                                </h5>
                                                {
                                                    this.state.skills.length === 0 ?
                                                    <p style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>Data not provided.</p> :
                                                    <table className="showSkillsTbl">
                                                        {this.state.skills.map(dt => (
                                                            <tr className="showsSkillsRow">
                                                                <button className="btn"  className="skillsRowTag" readOnly={true}>{dt}</button>
                                                            </tr>
                                                        ))}
                                                    </table>    
                                                }
                                            </div>
                                        </div>
                                        <div className="rightPortion">
                                            <div className="showProjectsDiv">
                                                <h5 className="projects">
                                                    <b>Projects</b>
                                                    <span class="glyphicon glyphicon-pencil" id="showProjectsInfo" data-toggle="modal" data-target="#myModal4" onClick={() => this.props.storeProjectsInfo(this.state.editProjectsInfo, this.props.history.push("/projects"), this.state.statusBasicInfo)}></span>
                                                </h5>
                                                {
                                                    this.state.projectName.length === 0 && this.state.projectDesc.length === 0 ?
                                                    <p style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>Data not provided.</p> :
                                                    <table className="showProjectsTbl">
                                                        {this.state.projectName.map((dt, rowId) => (
                                                            <tr className="showProjectsRow">
                                                                {
                                                                    dt.length !== 0 && dt !== ' ' ?
                                                                    <h5 className="projectName">{dt}</h5> :
                                                                    <p style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>Project Name not provided.</p>
                                                                }
                                                                {
                                                                    this.state.projectDesc[rowId].length !== 0 && this.state.projectDesc[rowId] !== ' ' ?
                                                                    <p className="projectDesc">{this.state.projectDesc[rowId]}</p> :
                                                                    <p style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>Project Description not provided.</p>
                                                                }
                                                                <div className="startToEndDate1">
                                                                    {
                                                                        this.state.projectStartDate[rowId] !== ' ' && this.state.projectStartDate[rowId] !== undefined ?
                                                                        <span className="start">({this.state.projectStartDate[rowId]}</span> :
                                                                        <span className="start" style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>(NA</span>
                                                                    }&nbsp;
                                                                    <span className="to">to</span>&nbsp;
                                                                    {
                                                                        this.state.projectEndDate[rowId] !== ' ' && this.state.projectEndDate[rowId] !== undefined ?
                                                                        <span className="end">{this.state.projectEndDate[rowId]})</span> :
                                                                        <span className="end" style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>NA)</span>
                                                                    }
                                                                </div>
                                                                <hr />
                                                            </tr>
                                                        ))}
                                                    </table>
                                                }
                                            </div>
                                            <div className="showAchDiv">
                                                <h5 className="achievement">
                                                    <b>Achievements</b>
                                                    <span class="glyphicon glyphicon-pencil" id="showAchInfo" data-toggle="modal" data-target="#myModal5" onClick={() => this.props.storeAchievementsInfo(this.state.editAchInfo, this.props.history.push("/achievements"), this.state.statusBasicInfo)}></span>
                                                </h5> 
                                                {
                                                    this.state.achievement.length === 0 ?
                                                    <p style={{color: 'red', fontFamily: '"Montserrat", sans-serif'}}>Data not provided.</p> :
                                                    <ul className="showAchUnList">
                                                        {this.state.achievement.map(dt => (
                                                            <li className="showAchList">
                                                                {
                                                                    dt.length !== 0 && dt !== ' ' ?
                                                                    <p className="showAch">{dt}</p> :
                                                                    <p className="showAch" style={{color: 'red'}}>Data not provided.</p>
                                                                }
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </div>
                                        </div>
                                   </div>
                                </div>
                                <div class="modal-footer" id="Resumefooter">
                                <button type="button" className="btn btn-success"  id="printresume" onClick={() => window.print()}>Print as Pdf</button>
                                </div>
                            </div>
                        
                            </div>
                        </div>
        }

        return (
            <div className="previewResume">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       name: state.basicInfo.name,
       role: state.basicInfo.role,
       cover: state.basicInfo.cover,
       email: state.linksInfo.email,
       github: state.linksInfo.github,
       linkedIn: state.linksInfo.linkedIn,
       profileLink: state.linksInfo.profileLink,
       contact: state.linksInfo.contact,
       designationArray: state.workExInfo.designationArray,
       companyArray: state.workExInfo.companyArray,
       startDateArray: state.workExInfo.startDateArray,
       endDateArray: state.workExInfo.endDateArray,
       isWorking: state.workExInfo.isActive,
       skillArray: state.skillSetInfo.skillArray,
       projectNameArray: state.projectsInfo.projectNameArray,
       projectDescArray: state.projectsInfo.projectDescArray,
       projectStartDateArray: state.projectsInfo.projectStDateArray,
       projectEndDateArray: state.projectsInfo.projectEndDtArray,
       isProjectInProgress: state.projectsInfo.status,
       achievementArray: state.achievementsInfo.achievementArray
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeEditWorkExInfo: (editBool, direct, status) => dispatch({type: actionTypes.STORE_EDITWORKEXINFO, editBool: editBool, direct: direct, statusBasicInfo: status}),
        storeEditBasicInfo: (editBasicInfo, direct) => dispatch({type: actionTypes.STORE_EDITBASICINFO, editBasicInfo: editBasicInfo, direct: direct}),
        storeLinksInfo: (editLinksInfo, direct, status) => dispatch({type: actionTypes.STORE_EDITLINKSINFO, editLinksInfo: editLinksInfo, direct: direct, statusBasicInfo: status}),
        storeSkillsInfo: (editSkillsInfo, direct, status) => dispatch({type: actionTypes.STORE_EDITSKILLSINFO, editSkillsInfo: editSkillsInfo, direct: direct, statusBasicInfo: status}),
        storeProjectsInfo: (editProjectsInfo, direct, status) => dispatch({type: actionTypes.STORE_EDITPROJECTSINFO, editProjectsInfo: editProjectsInfo, direct: direct, statusBasicInfo: status}),
        storeAchievementsInfo: (editAchInfo, direct, status) => dispatch({type: actionTypes.STORE_EDITACHIEVEMENTSINFO, editAchInfo: editAchInfo, direct: direct, statusBasicInfo: status})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewResume)