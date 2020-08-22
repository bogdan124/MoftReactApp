import React, { Component } from 'react';

/* 
   This button is used in 
   header across the website is the button from the header
    
   the button has 3 parameters redirect->where to go, 
   classToAdd->the html classes 
   textDisplay->text that will be displayed
*/

export class ButtonHeaderApp extends Component{

    render(){
      return(
        <li><a href={this.props.redirect} className={this.props.classToAdd} >{this.props.textDisplay}</a></li>     
      );
    }
  }
  
