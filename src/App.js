import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';


export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }


  render() {

    // JavaScript code
    function search_Q() {
      let input = document.getElementById('searchbar').value
      input = input.toLowerCase();
      let x = document.getElementsByTagName('body');
      //try to add search bar
      for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
        }
        else {
          x[i].style.display = "list-item";
        }
      }
    }

    return (
      <>
        <Navbar search={search_Q} />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key="general" pageSize={6} country={"in"} topic={"top-headlines"} category={"general"} />}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} country={"in"} topic={"top-headlines"} category={"business"} />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} country={"in"} topic={"top-headlines"} category={"entertainment"} />} ></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={6} country={"in"} topic={"top-headlines"} category={"general"} />} ></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} country={"in"} topic={"top-headlines"} category={"health"} />} ></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} country={"in"} topic={"top-headlines"} category={"science"} />} ></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} country={"in"} topic={"top-headlines"} category={"sports"} />} ></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} country={"in"} topic={"top-headlines"} category={"technology"} />} ></Route>

        </Routes>
        <Footer />
      </>
    )
  }
}

