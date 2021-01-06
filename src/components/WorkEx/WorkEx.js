import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import "./WorkEx.css";

class WorkEx extends Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            addEx: false,
            rows: [],
            count: [],
            presentCount: -1,
            ifPresentlyWorking: false,
            checkValue: ' ',
            checked: false,
            id: ' ',
            designationArray: [],
            designation: ' ',
            companyArray: [],
            company: ' ',
            startDateArray: [],
            startDate: ' ',
            endDateArray: [],
            endDate: ' ',
            active: ' ',
            editedDesignation: ' ',
            addRow: false,
            backToLinks: true,
            checkEndDate: null,
            checkStartDateBool: false,
            checkEndDateBool: false,
            checkStartDate: null,
            checkEndDateBool1: false,
            checkEndDate1: null
        }
    }

    componentDidMount() {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ')
        || (this.props.status && this.props.status !== ' ')) {
            let designation = [];
            for(let i = 0; i < this.props.designation.length; i++) {
                designation[i] = this.props.designation[i];
            }
            for(let i = 0; i < designation.length; i++) {
                if(designation[i] === ' ') {
                    designation.splice(i, 1);
                }
            }

            let company = [];
            for(let i = 0; i < this.props.company.length; i++) {
                company[i] = this.props.company[i];   
            }
            for(let i = 0; i < company.length; i++) {
                if(company[i] === ' ') {
                    company.splice(i, 1);
                }
            }

            let startDate = [];
            for(let i = 0; i < this.props.startDate.length; i++) {
                startDate[i] = this.props.startDate[i];
            }
            for(let i = 0; i < startDate.length; i++) {
                if(startDate[i] === ' ') {
                    startDate.splice(i, 1);
                }
            }

            /* let endDate = [];
            for(let i = 0; i < this.props.endDate.length; i++) {
                endDate[i] = this.props.endDate[i];
            }
                for(let i = 0; i < endDate.length; i++) {
                if(endDate[i] === ' ') {
                    endDate.splice(i, 1);
                }
                if(endDate[i] === "present") {
                    endDate.splice(i, 1);
                }
            } */

            let endDate = [];
            for(let i = 0; i < this.props.endDate.length; i++) {
              endDate.push(this.props.endDate[i]);
            }
            for(let i = 0; i < endDate.length; i++) {
                if(endDate[i] === ' ' || endDate[i] === undefined) {
                  endDate.splice(i, 1);
                }
            }
            if(this.props.progress != ' ' && this.props.endDate[this.props.endDate.length - 1] === undefined) {
                endDate.push(this.props.progress);
            }
            else if(this.props.progress != ' ' && this.props.endDate[this.props.endDate.length - 1] != undefined) {
                endDate.splice(endDate.length - 1, 1);
                endDate.push(this.props.progress);
            }
      /* if(this.props.progress != ' ' && this.props.endDate[this.props.endDate.length - 1] === undefined && this.state.checked) {
           endDate.push(this.props.progress);
       }
       else if(this.props.progress != ' ' && this.props.endDate[this.props.endDate.length - 1] != undefined && this.state.checked) {
           endDate.splice(endDate.length - 1, 1);
           endDate.push(this.props.progress);
       } */

            this.setState({
                designationArray: designation,
                companyArray: company,
                startDateArray: startDate,
                endDateArray: endDate,
                active: this.props.progress,
                modalIsOpen: true,
                id: endDate[endDate.length - 1] === "present"? endDate.length - 1: ' ',
                checked: endDate[endDate.length - 1] === "present"? true: false
            })
        }
        else {
            this.setState({
                modalIsOpen: true
            })
        }
    }

    designationHandler = (e, id) => {
        if((this.props.editBool && this.props.editBool != ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ') ||
        (this.props.status && this.props.status !== ' ')) {
            let designation = [];
            for(let i = 0; i < this.state.designationArray.length; i++) {
                designation[i] = this.state.designationArray[i];
            }
            for(let i = 0; i < designation.length; i++) {
                if(id === i) {
                    if(designation[i] !== e.target.value) {
                        designation[i] = e.target.value;
                    }
                }
            }
            this.setState({
                designationArray: designation,
                designation: this.state.addRow && id === designation.length? e.target.value: ' '
            })
        }
        else {
            this.setState(state => {
                return {
                    designation: e.target.value,
                }
            })
        }
    }

    companyNameHandler = (e, id) => {
       if((this.props.editBool && this.props.editBool != ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ') ||
       (this.props.status && this.props.status !== ' ')) {
           let company = [];
           for(let i = 0; i < this.state.companyArray.length; i++) {
                company[i] = this.state.companyArray[i];
           }
           for(let i = 0; i < company.length; i++) {
               if(id === i) {
                   if(company[i] !== e.target.value) {
                       company[i] = e.target.value;
                   }
               }
           }
           this.setState({
               companyArray: company,
               company: this.state.addRow && id === company.length? e.target.value: ' '
           })
       }
       else {
            this.setState({
                company: e.target.value
            })
       }
    }

    workedFromHandler = (e, id) => {
      if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ') ||
      (this.props.status && this.props.status !== ' ')) {
          let startDate = [];
          for(let i = 0; i < this.state.startDateArray.length; i++) {
              startDate[i] = this.state.startDateArray[i];
          }
          for(let i = 0; i < startDate.length; i++) {
              if(id === i) {
                  if(startDate[i] !== e.target.value) {
                      startDate[i] = e.target.value;
                  }
              }
          }
          let checkStartDate = new Map();
          let checkStartDateBool = false;
          if(id > 0) {
              if(e.target.value < this.state.endDateArray[id - 1]) {
                checkStartDate.set(id, "Select a date greater than the last end date.");
                checkStartDateBool = true;
                e.target.value = ' ';
              }
         }
          this.setState({
              startDateArray: startDate,
              startDate: this.state.addRow && id === startDate.length? e.target.value: ' ',
              checkStartDate: checkStartDate,
              checkStartDateBool: checkStartDateBool
          })
      }
      else {
        this.setState({
            startDate: e.target.value
        })
      }
    }

    workedTillHandler = (e, id) => {
        if((this.props.editBool && this.props.editBool !== ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ') ||
        (this.props.status && this.props.status !== ' ')) {
            let endDate = [];
            for(let i = 0; i < this.state.endDateArray.length; i++) {
                endDate[i] = this.state.endDateArray[i];
            }
            for(let i = 0; i < endDate.length; i++) {
                if(id === i) {
                    if(endDate[i] !== e.target.value) {
                        endDate[i] = e.target.value;
                    }
                }
            }
            let checkEndDate = new Map();
            let checkEndDateBool = false;
            if(e.target.value < this.state.startDateArray[id] && !this.state.checkEndDateBool1) {
                checkEndDate.set(id, "Select a date after the start date.");
                checkEndDateBool = true;
                e.target.value = ' ';
            }
            let checkEndDate1 = new Map();
            let checkEndDateBool1 = false;
            if(this.state.startDateArray.length > id + 1) { 
                if(this.state.endDateArray[id] <= this.state.startDateArray[id + 1])
                if(e.target.value > this.state.startDateArray[id + 1]) {
                    checkEndDate1.set(id, "Select a date before the next start date.");
                    checkEndDateBool1 = true;
                    e.target.value = ' ';
                }
            }

            if(!this.state.checked) {
                for(let i = 0; i < endDate.length; i++) {
                    if(endDate[i] === "present") {
                        endDate[i] = e.target.value;
                    }
                }
            }
            this.setState({
                endDateArray: endDate,
                endDate: this.state.addRow && id === endDate.length? e.target.value: ' ',
                checkEndDate: checkEndDate,
                checkEndDateBool: checkEndDateBool,
                checkEndDate1: checkEndDate1,
                checkEndDateBool1: checkEndDateBool1
                /* active: this.state.checked? "present": ' '     //bug here */
            })
        }
        else {
            this.setState({
                endDate: e.target.value,
               /*  active: this.state.checked? "present": ' '    // bug here */
            })
        }
    }

    checkIfPresentlyWorking = (e, id) => {
       this.setState(state => {
           return {
               ...state,
               checked: !state.checked,
               id: id,
               /* active: !state.checked? "present": ' ' */
           }
       })
    }  

    addWorkExpHandler = () => {
    
       this.setState(state => {
           return {
               rows: state.rows.concat(
                            "a"
                ),
                count: state.count.concat(state.presentCount + 1),
                designationArray: state.designationArray.concat(state.designation),
                companyArray: state.companyArray.concat(state.company),
                startDateArray: state.startDateArray.concat(state.startDate),
                endDateArray: state.endDateArray.concat(state.endDate),
                addRow: true
           }
       });
    }
    render() {
        console.log("[checked] ", this.state.checked);

        //filter rows array
        let rowsCopy = [];
        for(let i = 0 ; i < this.state.rows.length; i++) {
            rowsCopy[i] = this.state.rows[i];
        }
        

        let rowsCopy0 = [];
       if(this.state.checked) {
           
           /*  rowsCopy[rowsCopy.length - 1].props.children[2].props.children[2].props.children[0].props.children = ' ' */
           for(let i = 0; i < rowsCopy.length; i++) {
               rowsCopy0[i] = rowsCopy[i];
           }
       }
       else {
           for(let i = 0; i < this.state.rows.length; i++) {
               rowsCopy0[i] = this.state.rows[i];
           }
       }
        let openModal = null;
        if(this.state.modalIsOpen) {
            if((this.props.editBool && this.props.editBool != ' ') || (this.props.editBool1 && this.props.editBool1 !== ' ') ||
            (this.props.status && this.props.status !== ' ')) {
                openModal = <div id="myModal2" className="modal fade" role="dialog">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Work Experience</h4>
                    </div>
                    <div class="modal-body">
                        <table className="workExTbl">
                           {this.state.designationArray.map((dt, rowId) => (
                               <tr className="workExTblRow">
                                   <div className="workExDiv">
                                        <div className="designationDiv">
                                            <span className="roleSpan">Designation in current company.</span>
                                            <input type="text" className="form-control" id="designationInp"  defaultValue={rowId <= this.props.designation.length - 1? dt: ' '} onChange={(e) => this.designationHandler(e, rowId)} />
                    
                                        </div>
                                        <div className="companyDiv">
                                            <span className="companySpan">Company Name</span>
                                            <input type="text" className="form-control" id="companyInput" defaultValue={rowId <= this.props.company.length - 1? this.state.companyArray[rowId]: ' '} onChange={(e) => this.companyNameHandler(e, rowId)} />
                                           {/*  <span class="glyphicon glyphicon-pencil" id="editCompany" onClick={() => this.editWorkExHandler(rowId)}></span> */}
                                        </div>
                                        <div className="workSpanDiv">
                                            <span className="workedFrom"> Worked from</span>
                                            <input type="date" className="form-control" id="startWorkDt" defaultValue={rowId <= this.props.startDate.length - 1? this.state.startDateArray[rowId]: ' '} onChange={(e) => this.workedFromHandler(e, rowId)} />
                                            {
                                                this.state.checkStartDateBool ?
                                                <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkStartDate.get(rowId)}</span> :
                                                <span></span>
                                            }
                                            {this.state.id === rowId && this.state.checked ?
                                                    ' ' :
                                                <div>  
                                                    <span className="workedTill">till</span>
                                                    <input type="date" className="form-control" id="endWorkDt" defaultValue={rowId <= this.props.endDate.length - 1? this.state.endDateArray[rowId]: ' '} onChange={(e) => this.workedTillHandler(e, rowId)} />
                                                    {
                                                        this.state.checkEndDateBool ?
                                                        <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkEndDate.get(rowId)}</span> :
                                                        this.state.checkEndDateBool1 ?
                                                        <span style={{color: 'red', fontFamily: '"Lobster", cursive'}}>{this.state.checkEndDate1.get(rowId)}</span> :
                                                        <span></span>
                                                    }
                                                    
                                                </div>
                                            }
                                            <input type="checkbox" defaultChecked={this.state.endDateArray[rowId] === "present"} onChange={(ev) => this.checkIfPresentlyWorking(ev, rowId)} />&nbsp;
                                            <span className="presntlyWorkingSpan">Presently working</span> 
                                        </div>
                                   </div>
                                   <hr />
                               </tr>
                           ))}
                        </table>
                       
                        <button className="btn" onClick={() => this.addWorkExpHandler()}  disabled={this.state.checked }>Add Experience</button>
                    </div>
                    <div>
                        {
                             this.props.status && this.props.status !== ' ' && !this.props.statusBasicInfo ?
                             <div class="modal-footer">
                                <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal3" 
                                        onClick={() => this.props.storeWorkExInfo(this.props.history.push("/skills"),
                                        this.state.designation, this.state.company, this.state.startDate, this.state.endDate,
                                        this.state.designationArray, this.state.companyArray, this.state.startDateArray, this.state.endDateArray, this.state.checked, this.state.rows)}>
                                Next</button>
                                <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal1" 
                                        onClick={() => this.props.storeBackToLinksInfo(this.props.history.push("/links"), this.state.backToLinks)}>
                                Back</button>
                            </div> :
                             <div class="modal-footer">
                                 {
                                     this.props.editBool1 && this.props.editBool1 !== ' ' ?
                                     <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal3" 
                                            onClick={() => this.props.storeWorkExInfo(this.props.history.push("/skills"),
                                            this.state.designation, this.state.company, this.state.startDate, this.state.endDate,
                                            this.state.designationArray, this.state.companyArray, this.state.startDateArray, this.state.endDateArray, this.state.checked, this.state.rows)}>
                                    Next</button>:
                                    this.props.statusBasicInfo ?
                                    <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal6" 
                                        onClick={() => this.props.storeWorkExInfo(this.props.history.push("/preview"),
                                        this.state.designation, this.state.company, this.state.startDate, this.state.endDate,
                                        this.state.designationArray, this.state.companyArray, this.state.startDateArray, this.state.endDateArray, this.state.checked, this.state.rows)}>
                                    Submit</button> :
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
                openModal = <div id="myModal2" className="modal fade" role="dialog">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title" style={{fontFamily: "'Lobster', cursive"}}>Work Experience</h4>
                                </div>
                                <div class="modal-body">
                                    <table className="workExTbl">
                                       {this.state.rows.map((row, rowId) => (
                                           <tr className="workExTblRow">
                                                <div className="workExDiv">
                                                    <div className="designationDiv">
                                                        <span className="roleSpan">Designation in current company.</span>
                                                        <input type="text" className="form-control" id="designationInp" onChange={(e) => this.designationHandler(e)} />
                                                       {/*  <span class="glyphicon glyphicon-pencil" id="editWorkEx" onClick={() => this.editDesignationHandler(rowId)}></span> */}
                                                    </div>
                                                    <div className="companyDiv">
                                                        <span className="companySpan">Company Name</span>
                                                        <input type="text" className="form-control" id="companyInput" onChange={(e) => this.companyNameHandler(e)} />
                                                        {/* <span class="glyphicon glyphicon-pencil" id="editCompany" onClick={() => this.editCompanyHandler(rowId)}></span> */}
                                                    </div>
                                                    <div className="workSpanDiv">
                                                        <span className="workedFrom"> Worked from</span>
                                                        <input type="date" className="form-control" id="startWorkDt" onChange={(e) => this.workedFromHandler(e)} />
                                                        <span class="glyphicon glyphicon-pencil" id="editStartDate" onClick={() => this.editStartDateHandler(rowId)}></span>
                                                        {this.state.id === rowId && this.state.checked ?
                                                             ' ' :
                                                              <div>  
                                                              <span className="workedTill">till</span>
                                                              <input type="date" className="form-control" id="endWorkDt" onChange={(e) => this.workedTillHandler(e)} />
                                                             {/*  <span class="glyphicon glyphicon-pencil" id="editEndDate" onClick={() => this.editEndDateHandler(rowId)}></span> */}
                                                           </div>
                                                        }
                                                        <input type="checkbox" onChange={(ev) => this.checkIfPresentlyWorking(ev, rowId)} />&nbsp;
                                                        <span className="presntlyWorkingSpan">Presently working</span> 
                                                    </div>
                                                </div>

                                               <hr/>
                                           </tr>
                                       ))}
                                    </table>
                                   
                                    <button className="btn" onClick={() => this.addWorkExpHandler()}  disabled={this.state.checked }>Add Experience</button>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#myModal3" 
                                        onClick={() => this.props.storeWorkExInfo(this.props.history.push("/skills"),
                                        this.state.designation, this.state.company, this.state.startDate, this.state.endDate,
                                        this.state.designationArray, this.state.companyArray, this.state.startDateArray, this.state.endDateArray, this.state.checked, this.state.rows)}>
                                Next</button>
                                <button type="button" class="btn btn-success" style={{float: 'left'}} data-toggle="modal" data-target="#myModal1" 
                                        onClick={() => this.props.storeBackToLinksInfo(this.props.history.push("/links"), this.state.backToLinks)}>
                                Back</button>
                                </div>
                            </div>
                        
                            </div>
                        </div>
            }
            
        }

        return (
            <div className="workex">
                {openModal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       editBool: state.editWorkExInfo.edit,
       designation: state.workExInfo.designationArray,
       company: state.workExInfo.companyArray,
       startDate: state.workExInfo.startDateArray,
       endDate: state.workExInfo.endDateArray,
       progress: state.workExInfo.isActive,
       editBool1: state.editWorkExInfo.backToWorkEx,
       status: state.basicInfo.status,
       statusBasicInfo: state.editWorkExInfo.status
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeWorkExInfo: ( directToProjects, designation, company, startDate, endDate, designationArray, companyArray, startDateArray, endDateArray, isActive, rows) => dispatch({type: actionTypes.STORE_WORKEXINFO, 
                           directToProjects: directToProjects, designation: designation, company: company,
                            startDate: startDate, endDate: endDate, designationArray: designationArray, companyArray: companyArray, 
                            startDateArray: startDateArray, endDateArray: endDateArray, isActive: isActive, rows: rows}),
        storeBackToLinksInfo: (direct, backToLinks) => dispatch({type: actionTypes.STORE_EDITLINKSINFO, direct: direct, backToLinks: backToLinks})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkEx)