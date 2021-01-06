import React, { Component } from 'react';

import * as actionTypes from '../../store/action';
import { connect } from 'react-redux';
import "./Links.css";

class Links extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            email: ' ',
            github: ' ',
            linkedIn: ' ',
            profileLink: ' ',
            contactNo: 0,
            backToBasicInfo: true,
          /*   regexForEmail: (\W|^)[\w.+\-]*@gmail\.com(\W|$) */
        }
    }

    componentDidMount() {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
            || (this.props.status && this.props.status !== ' ')) {
            this.setState({
                email: this.props.email,
                github: this.props.github,
                linkedIn: this.props.linkedIn,
                profileLink: this.props.profileLink,
                contactNo: this.props.contact,
                modalIsOpen: true
            })
        }
        else {
            this.setState({
                modalIsOpen: true
            })
        }
    }

    emailInpHandler = e => {
        this.setState({
            email: e.target.value
        })
    }

    githubInpHandler = e => {
        this.setState({
            github: e.target.value
        })
    }

    linkedInpInpHandler = e => {
        this.setState({
            linkedIn: e.target.value
        })
    }

    profileInpHandler = e => {
        this.setState({
            profileLink: e.target.value
        })
    }

    contactInpHandler = e => {
        this.setState({
            contactNo: e.target.value
        })
    }

    render() {

        console.log("[contact]", this.state.contactNo);

        let testEmail = false;
        const regexForEmail = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$");
        if(regexForEmail.test(this.state.email)) {
            testEmail = true;
        }

        let testContact = false;
        const regexForContact = new RegExp("^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$");
        if(regexForContact.test(this.state.contactNo)) {
            testContact = true;
        }

        let testGithub = false;
        const regexForGithub = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@github\.com$");
        if(regexForGithub.test(this.state.github)) {
            testGithub = true;
        }

        let testLinkedIn = false;
        const regexForLinkedIn = new RegExp("^[a-z0-9](\.?[a-z0-9]){5,}@linkedin\.com$");
        if(regexForLinkedIn.test(this.state.linkedIn)) {
            testLinkedIn = true;
        }

        console.log(testEmail);
        let openModal = null;
        if(this.state.modalIsOpen) { 
            if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ') ||
            (this.props.status && this.props.status !== ' ')) {
                openModal = <div id="myModal1" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Important links</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div classNae="emailInpDiv">
                                                <span className="emailInpSpan">Enter your email</span>
                                                <input type="text" className="form-control" id="emailInput"  defaultValue={this.props.email} onChange={(e) =>  this.emailInpHandler(e)} />
                                                {
                                                    !testEmail && this.state.email.length > 0 && this.state.email !== ' ' ?
                                                    <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}> /** Email format is not correct. **/</span> :
                                                    <span style={{color: 'green', fontFamily: '"Lobster", cursive'}}>Ex: abcd123@gmail.com</span>
                                                }
                                            </div>
                                            <div className="githubInpDiv">
                                                <span className="githubInpSpan">Enter your github link</span>
                                                <input type="text" className="form-control" id="githubInput" defaultValue={this.props.github} onChange={(e) => this.githubInpHandler(e)} />
                                                {
                                                    !testGithub && this.state.github.length > 0 && this.state.github !== ' ' ?
                                                    <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}> /** Github format is not correct. **/</span> :
                                                    <span style={{color: 'green', fontFamily: '"Lobster", cursive'}}>Ex: abcd123@github.com</span>
                                                }
                                            </div>
                                            <div className="linkedInDiv">
                                                <span className="linkedInSpan">Enter link to your linkedIn profile</span>
                                                <input type="text" className="form-control" id="linkedInInput" defaultValue={this.props.linkedIn} onChange={(e) => this.linkedInpInpHandler(e)} />
                                                {
                                                    !testLinkedIn && this.state.linkedIn.length > 0 && this.state.linkedIn !== ' ' ?
                                                    <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}> /** LinkedIn format is not correct. **/</span> :
                                                    <span style={{color: 'green', fontFamily: '"Lobster", cursive'}}>Ex: abcd123@linkedin.com</span>
                                                }
                                            </div>
                                            <div className="profileDiv">
                                                <span className="profileSpan">Enter your profile link</span>
                                                <input type="text" className="form-control" id="profileInput" defaultValue={this.props.profileLink} onChange={(e) =>  this.profileInpHandler(e)} />
                                            </div>
                                            <div className="mobMoDiv">
                                                <span className="mobMoSpan">Enter your mobile number</span>
                                                <input type="number" className="form-control" id="mobNoInput" defaultValue={this.props.contact} onChange={(e) => this.contactInpHandler(e)} />
                                                {
                                                    !testContact && this.state.contactNo.toString().length > 0 && this.state.contactNo !== ' ' ?
                                                    <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>/** Contact format is not correct. **/</span> :
                                                    <span style={{color: 'green', fontFamily: '"Lobster", cursive'}}>Ex: 9089786756 (10 digits)</span>
                                                }
                                            </div>

                                        </div>
                                        <div>
                                            {
                                                this.props.status && this.props.status !== ' ' && !this.props.statusBasicInfo ?
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal2" disabled={!testEmail || !testContact || !testGithub || !testLinkedIn} onClick={() => this.props.storeLinksInfo(this.props.history.push("/workex"),
                                                        this.state.email, this.state.github, this.state.linkedIn, this.state.profileLink, this.state.contactNo)}>Next</button>
                                                    <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal" onClick={() => this.props.storeBackToBasicInfo(this.props.history.push("/basic"), this.state.backToBasicInfo)}>Back</button>
                                            </div> :
                                             <div className="modal-footer">
                                             {
                                                 (this.props.editBool1 && this.props.editBool1 !== ' ') ?
                                                 <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal2" disabled={!testEmail || !testContact || !testGithub || !testLinkedIn} onClick={() => this.props.storeLinksInfo(this.props.history.push("/workex"),
                                                     this.state.email, this.state.github, this.state.linkedIn, this.state.profileLink, this.state.contactNo)}>Next</button> :
                                                     this.props.statusBasicInfo ?
                                                     <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal6" disabled={!testEmail || !testContact || !testGithub || !testLinkedIn} onClick={() => this.props.storeLinksInfo(this.props.history.push("/preview"),
                                                     this.state.email, this.state.github, this.state.linkedIn, this.state.profileLink, this.state.contactNo)}>Submit</button> :
                                                     <div></div>
                                             }
                                         </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
            }
            //condition...
            else {
                openModal = <div id="myModal1" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Important links</h4>
                                        </div>
                                        <div class="modal-body">
                                            <div className="emailInpDiv">
                                                <span className="emailInpSpan">Enter your email</span>
                                                <input type="text" className="form-control" id="emailInput" onChange={(e) =>  this.emailInpHandler(e)} />
                                            </div>
                                            <div className="githubInpDiv">
                                                <span className="githubInpSpan">Enter your github link</span>
                                                <input type="text" className="form-control" id="githubInput" onChange={(e) => this.githubInpHandler(e)} />
                                            </div>
                                            <div className="linkedInDiv">
                                                <span className="linkedInSpan">Enter link to your linkedIn profile</span>
                                                <input type="text" className="form-control" id="linkedInInput" onChange={(e) => this.linkedInpInpHandler(e)} />
                                            </div>
                                            <div className="profileDiv">
                                                <span className="profileSpan">Enter your profile link</span>
                                                <input type="text" className="form-control" id="profileInput" onChange={(e) =>  this.profileInpHandler(e)} />
                                            </div>
                                            <div className="mobMoDiv">
                                                <span className="mobMoSpan">Enter your mobile number</span>
                                                <input type="number" className="form-control" id="mobNoInput" onChange={(e) => this.contactInpHandler(e)} />
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal2" onClick={() => this.props.storeLinksInfo(this.props.history.push("/workex"),
                                                this.state.email, this.state.github, this.state.linkedIn, this.state.profileLink, this.state.contactNo)}>Next</button>
                                            <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal" onClick={() => this.props.storeBackToBasicInfo(this.props.history.push("/basic"), this.state.backToBasicInfo)}>Back</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
            }
        }

        return (
            <div className="links">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.linksInfo.email,
        github: state.linksInfo.github,
        linkedIn: state.linksInfo.linkedIn,
        profileLink: state.linksInfo.profileLink,
        contact: state.linksInfo.contact,
        editBool: state.editLinksInfo.editLinksInfo,
        editBool1: state.editLinksInfo.backToLinks,
        status: state.basicInfo.status,
        statusBasicInfo: state.editLinksInfo.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeLinksInfo: (directToWorkEx, email, github, linkedIn, profile, contact) => dispatch({type: actionTypes.STORE_LINKSINFO,
        direct: directToWorkEx, email: email, github: github, linkedIn: linkedIn, profile: profile, contact: contact}),
        storeBackToBasicInfo: (direct, editBool) => dispatch({type: actionTypes.STORE_EDITBASICINFO, direct: direct, editBasicInfo1: editBool})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links)