import './App.css';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Start from './components/Start';

export default class App extends Component {
  pageSize=5;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  } 
  render() {
    return (
        <div>
          <BrowserRouter>
            {!(window.location.pathname==="/start")&&<NavBar/>}
            <LoadingBar
              color='#f11946'
              height={3}
              progress={this.state.progress}
            />
            <Routes>
              <Route exact path="/NewsHorse" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>
              <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
              <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>
              <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
              <Route exact path="/start" element={<Start/>}></Route>
            </Routes>
          </BrowserRouter>
          
        </div>
    );
  }
}


