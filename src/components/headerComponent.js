import React, { Component } from 'react';
import { LogoComponent,MobileNavComponent } from './uniqueComponents'
import { ButtonHeaderApp } from './buttonHeaderComponent'

/*
  here we have the navbar 
  the other components from this page will be in uniqueComponents.js
*/

export class HeaderApp extends Component {
    render(){
      return(
         <div className="main-nav white stick-fixed small-height">
                 <div className="full-wrapper relative clearfix">
                      <LogoComponent/>
                      <MobileNavComponent/>  
                      <div className="inner-nav desktop-nav">
                          <ul className="clearlist">                            
                              <ButtonHeaderApp redirect="/" classToAdd="Moft-Buttons" textDisplay="Depre eveniment"/>
                              <ButtonHeaderApp redirect="/tickets" classToAdd="Moft-Buttons" textDisplay="Bilete"/>
                              <ButtonHeaderApp redirect="/parteners" classToAdd="Moft-Buttons" textDisplay="Parteneri"/>  
                              <ButtonHeaderApp redirect="/contact" classToAdd="Moft-Buttons" textDisplay="Contact"/>
                              <ButtonHeaderApp redirect="/login" classToAdd="Moft-Buttons" textDisplay="Autentificare"/>  
                          </ul>
                    </div>
              </div>
          </div>         
      );
    }
  }

  