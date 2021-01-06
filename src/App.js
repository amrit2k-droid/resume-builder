import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import BasicInfo from './components/BasicInfo/BasicInfo';
import Links from './components/Links/Links';
import WorkEx from './components/WorkEx/WorkEx';
import SkillSet from './components/SkillSet/SkillSet';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import PreviewResume from './components/PreviewResume/PreviewResume';
import EditBasicInfo from './components/EditBasicInfo/EditBasicInfo';
import EditWorkExInfo from './components/EditWorkEx/EditWorkEx';
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/basic" component={BasicInfo} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/links" component={Links} exact={true} />
          <Route path="/workex" component={WorkEx} exact={true} />
          <Route path="/skills" component={SkillSet} exact={true} />
          <Route path="/projects" component={Projects} exact={true} />
          <Route path="/achievements" component={Achievements} exact={true} />
          <Route path="/preview" component={PreviewResume} exact={true} />
          <Route path="/editBasicInfo" component={EditBasicInfo} exact={true} />
          <Route path="/editWorkExInfo" component={EditWorkExInfo} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
