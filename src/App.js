import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Links from './components/Links/Links';
import Feature from './components/Feature/Feature';
import Title from './components/Titles/Title';
import Recent from './components/Recent/Recent';
import Contact from './components/Contact/Contact';


function App(props) {
  return (
    <div className="App">
      <div className="site-top__cover">
        <Navbar menufirst="home" menusecond="categories" menuthird="about" menufour="contact"/>
        <Header/>
      </div>
      <Links/>
      <Title titlefirst="Featured Posts"/>
      <div className="feature">
        <div className="feature-container">
          <div className="feature-cards">
            <Feature cardtitle="The Road Ahead" cardspan="The road ahead might be paved - it might not be." cardavatar="Mat Vogels"/>
            <Feature cardtitle="From Top Down" cardspan="Once a year, go someplace you’ve never been before." cardavatar="William Wong"/>
          </div>
        </div>
      </div>
      <Title titlefirst="Most Recent"/>
      <div className="recent">
        <div className="recent-container">
          <div className="recent-cards">
            <Recent recentTitle="Still Standing Tall" recentSpan="Life begins at the end of your comfort zone." recentUser="William Wong"/>
            <Recent recentTitle="Sunny Side Up" recentSpan="No place is ever as bad as they tell you it’s going to be." recentUser="Mat Vogels"/>
            <Recent recentTitle="Water Falls" recentSpan="We travel not to escape life, but for life not to escape us." recentUser="Mat Vogels"/>
            <Recent recentTitle="Through the Mist" recentSpan="Travel makes you see what a tiny place you occupy in the world." recentUser="William Wong"/>
            <Recent recentTitle="Awaken Early" recentSpan="Not all those who wander are lost." recentUser="Mat Vogels"/>
            <Recent recentTitle="Try it Always" recentSpan="The world is a book, and those who do not travel read only one page." recentUser="Mat Vogels"/>
          </div>
        </div>
      </div>
      <div className="site-bottom__cover">
        <Title style={{ color: "#EFEFEF"}} titlefirst="Stay in Touch"/>
        <Contact/>
        <Navbar menufirst="home" menusecond="categories" menuthird="about" menufour="contact"/>
      </div>
    </div>
  );
}

export default App;
