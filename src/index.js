import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import BasicInfoReducer from './store/reducers/BasicInfoReducer';
import LinksReducer from './store/reducers/LinksReducer';
import WorkExReducer from './store/reducers/WorkExReducer';
import SkillSetReducer from './store/reducers/SkillSetReducer';
import ProjectsReducer from './store/reducers/ProjectsReducer';
import AchievementsReducer from './store/reducers/AchievementsReducer';
import EditWorkExReducer from './store/reducers/EditWorkExReducer';
import EditBasicInfoReducer from './store/reducers/EditBasicInfoReducer';
import EditLinksInfoReducer from './store/reducers/EditLinksInfoReducer';
import EditProjectsInfoReducer from './store/reducers/EditProjectsInfoReducer';
import EditSkillsInfoReducer from './store/reducers/EditSkillsInfoReducer';
import EditAchInfoReducer from './store/reducers/EditAchInfoReducer';

import './index.css';
import App from './App';

const rootReducer = combineReducers({
    basicInfo: BasicInfoReducer,
    linksInfo: LinksReducer,
    workExInfo: WorkExReducer,
    skillSetInfo: SkillSetReducer,
    projectsInfo: ProjectsReducer,
    achievementsInfo: AchievementsReducer,
    editWorkExInfo: EditWorkExReducer,
    editBasicInfo: EditBasicInfoReducer,
    editLinksInfo: EditLinksInfoReducer,
    editProjectsInfo: EditProjectsInfoReducer,
    editSkillsInfo: EditSkillsInfoReducer,
    editAchInfo: EditAchInfoReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

