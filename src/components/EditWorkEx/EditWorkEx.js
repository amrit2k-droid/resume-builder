import React, { Component } from 'react';

import { connect } from 'react-redux';
import "../WorkEx/WorkEx.css";

class EditWorkEx extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            designation: ' ',
            company: ' ',
            id: ' ',
            checked: false
        }
    }

    componentDidMount() {
        this.setState({
            isModalOpen: true
        })
    }

    designationHandler = (e) => {

    }

    companyHameHandler = e => {

    }

    workedFromHandler = e => {

    }

    workedTillHandler = e => {

    }

    render() {

      //  console.log("[EDITWORKEX] ", this.props.workExRows);
        let openModal = null;
        if(this.state.isModalOpen) {
            openModal = <div id="myModal7" class="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Achievements</h4>
                                </div>
                                <div class="modal-body">
                                    <table>
                                        {this.props.designationArray.map((dt, rowId) => (
                                            <tr>
                                                <div className="workExDiv">
                                                    <div className="designationDiv">
                                                        <span className="roleSpan">Designation in current company.</span>
                                                        <input type="text" className="form-control" id="designationInp" defaultValue={dt} onChange={(e) => this.designationHandler(e)} />
                                                    </div>
                                                    <div className="companyDiv">
                                                        <span className="companySpan">Company Name</span>
                                                        <input type="text" className="form-control" id="companyInput" onChange={(e) => this.companyNameHandler(e)} />
                                                    </div>
                                                    <div className="workSpanDiv">
                                                        <span className="workedFrom"> Worked from</span>
                                                        <input type="date" className="form-control" id="startWorkDt" onChange={(e) => this.workedFromHandler(e)} />
                                                        {this.state.id === rowId && this.state.checked ?
                                                             ' ' :
                                                              <div>  
                                                              <span className="workedTill">till</span>
                                                              <input type="date" className="form-control" id="endWorkDt" onChange={(e) => this.workedTillHandler(e)} />
                                                           </div>
                                                        }
                                                        <input type="checkbox" onChange={(ev) => this.checkIfPresentlyWorking(ev, rowId)} />&nbsp;
                                                        <span className="presntlyWorkingSpan">Presently working</span> 
                                                    </div>
                                                </div> 
                                         </tr>
                                        ))}
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    {openModal}
                                </div>
                            </div>
                        
                            </div>
                        </div>
        }
        return (
            <div className="editWorkEx">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        designationArray: state.workExInfo.designationArray,
        companyArray: state.workExInfo.companyArray,
        startDateArray: state.workExInfo.startDateArray,
        endDateArray: state.workExInfo.endDateArray,
    }
}

export default connect(mapStateToProps, null)(EditWorkEx)