import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import "./BasicInfo.css";

class BasicInfo extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            name: ' ',
            role: ' ',
            cover: ' ',
            globalStatus: true
        }
    }

    componentDidMount() {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')) {
            this.setState({
                name: this.props.name,
                role: this.props.role,
                cover: this.props.cover,
                modalIsOpen: true
            })
        }
        else {
            this.setState({
                modalIsOpen: true
            })  
        } 
    }

    nameChangeHandler = ev => {
        this.setState({
            name: ev.target.value
        })
    }

    roleChangeHandler = ev => {
        this.setState({
            role: ev.target.value
        })
    }

    coverChangeHandler = ev => {
        this.setState({
            cover: ev.target.value
        })
    }

    render() {
        console.log("[name] ", this.state.name.length);
        if(this.state.name === ' ') {
            console.log("empty!");
        }
        let openModal = null;
        if(this.state.modalIsOpen) { 
            if((this.props.editBool && this.props.editBool != ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')) {
                openModal = <div id="myModal" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Basic Info</h4>
                                </div>
                                <div class="modal-body">
                                   {/*  <p className="basicInfoWarning"> Fill out all the fields before continuing </p> */}
                                    <div className="nameDiv">
                                        <span className="nameSpan">Enter your name.</span>
                                        <input type="text" className="form-control" id="nameInput" defaultValue={this.props.name} onChange={(ev) => this.nameChangeHandler(ev)}/>
                                    </div>
                                    <div className="roleDiv">
                                        <span className="roleSpan">Enter your current role.</span>
                                        <input type="text" className="form-control" id="roleInput" defaultValue={this.props.role} onChange={(ev) => this.roleChangeHandler(ev)} />
                                    </div>
                                    <div className="coverDiv">
                                        <span className="coverSpan">
                                            Enter a cover sentence. Recruiters usually see this first.
                                        </span>
                                        <textarea type="textarea" className="form-control" id="writeSomething" defaultValue={this.props.cover} onChange={(ev) => this.coverChangeHandler(ev)}>
                                         </textarea>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                {
                                    this.props.editBool1 && this.props.editBool1 !== ' ' ?
                                    <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal1" onClick={() => this.props.storeBasicInfo(this.props.history.push("/links"), this.state.name, this.state.role, this.state.cover, this.state.globalStatus)}>Next</button> :
                                    <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal6" onClick={() => this.props.storeBasicInfo(this.props.history.push("/preview"), this.state.name, this.state.role, this.state.cover, this.state.globalStatus)}>Submit</button>
                                }
                                </div>
                            </div>
                        
                            </div>
                        </div>
            }
            else {
                openModal = <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Basic Info</h4>
                                        </div>
                                        <div class="modal-body">
                                           {/*  <p className="basicInfoWarning"> Fill out all the fields before continuing  </p> */}
                                            <div className="nameDiv">
                                                <span className="nameSpan">Enter your name.</span>
                                                <input type="text" className="form-control" id="nameInput" value={this.state.name} onChange={(ev) => this.nameChangeHandler(ev)}/>
                                            </div>
                                            <div className="roleDiv">
                                                <span className="roleSpan">Enter your current role.</span>
                                                <input type="text" className="form-control" id="roleInput" value={this.state.role} onChange={(ev) => this.roleChangeHandler(ev)} />
                                            </div>
                                            <div className="coverDiv">
                                                <span className="coverSpan">
                                                    Enter a cover sentence. Recruiters usually see this first.
                                                </span>
                                                <textarea type="textarea" className="form-control" id="writeSomething" value={this.state.cover} onChange={(ev) => this.coverChangeHandler(ev)}>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal1" onClick={() => this.props.storeBasicInfo(this.props.history.push("/links"), this.state.name, this.state.role, this.state.cover, this.state.globalStatus)}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
            }
        }

        return (
            <div className="BasicInfo">
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
        editBool: state.editBasicInfo.editBasicInfo,
        editBool1: state.editBasicInfo.editBasicInfo1
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeBasicInfo: (direct, name, role, cover, status) => dispatch({type: actionTypes.STORE_BASICINFO, direct: direct, name: name, role: role, cover: cover, status: status})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo)