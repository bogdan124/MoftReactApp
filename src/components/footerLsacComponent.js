import React, { Component } from 'react';




export class FooterLsac extends Component{
    render(){
        return(
            <footer className="page-section bg-dark-lighter footer pb-60 pt-30 Moft-footer-Prime" >
                <div className="container">
                    
                    {/* Footer Logo */}
                    <div className="local-scroll mb-30 wow fadeInUp Moft-footer" data-wow-duration="1.5s">
                        <a href="https://lsacbucuresti.ro" target="_blank"><img src={process.env.PUBLIC_URL +"/static/img/lsacColor.png"} width="178" height="136"/></a>
                    </div>
                    {/*  End Footer Logo */}
                    
                    {/*  Social Links */}
                    <div className="footer-social-links mb-30 mb-xs-60">
                        <a href="https://www.facebook.com/events/697811747359800/" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/lsacbucuresti/" title="Facebook" target="_blank"><i className="fa fa-instagram"></i></a>
                    </div>
                    {/*  End Social Links */}
                    
                    {/*  Footer Text */}
                    <div className="footer-text">
                        
                        {/*  Copyright */}
                        <div className="footer-copy font-alt">
                            <a href="https://lsacbucuresti.ro" target="_blank">© LSAC Bucuresti 2020</a>
                        </div>
                        {/*  End Copyright */}
                        
                    </div>
                    {/*  End Footer Text */}
                    
                 </div>
                 
                
                       
                 {/* Top Link */}
                 <div className="local-scroll">
                     <a href="#top" className="link-to-top"><i className="fa fa-caret-up"></i></a>
                    {/* <button className=" chatbot-to-down ">
                        MoftBot<i className="fa fa-robot"></i>
                    </button>
                    <div className="chat-window">
                        <div className="close-window" id="close-window-id">                            
                                <h5><a href="javascript:void()" className="chatbot-close-a">Chatbot</a></h5>       
                                <button className="chatbox__title__close">
                                    <span>
                                        <svg viewBox="0 0 12 12" width="12px" height="12px">
                                            <line stroke="#FFFFFF" x1="11.75" y1="0.25" x2="0.25" y2="11.75"></line>
                                            <line stroke="#FFFFFF" x1="11.75" y1="11.75" x2="0.25" y2="0.25"></line>
                                        </svg>
                                    </span>
                                </button>                           
                        </div>
                        <iframe src="/chatbot" className="iframe-chatbot "></iframe>
                    </div> */}  
                 </div>
                 {/* End Top Link */}
                 
            </footer>
        );
    }
}