import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HeaderApp } from './components/headerComponent'
import { FooterLsac } from './components/footerLsacComponent'
import { ContentApp } from './components/contentPageComponent'
/*
  things to NOTE:
  if a class,file has in it's name Component 
  then we will find it in components folder.
  In uniqueComponents we will find components
   that are used just once or twice.
*/

/*
  here is defined the application component
  all that is rendered on the page will be in this class
*/
class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderApp/>
       <ContentApp pageToDisplay="home"/>
       <FooterLsac/>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,document.getElementById('root')
);

