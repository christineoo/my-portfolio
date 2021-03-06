import React, {PropTypes} from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="dummy"></div>
            <div className="footer-links">
                <a target="_blank" href="https://github.com/christineoo">
                    <img src={require('../../images/logo-github.svg')} alt="github icon"/>
                </a>
                <a target="_blank" href="http://christineoo.github.io/">
                    <img src={require('../../images/jekyll.png')} alt="jekyll icon"/>
                </a>
            </div>
            <div className="copyright">
                <img src={require('../../images/copyright.png')} alt="jekyll icon"/>
                2016. All Rights Reserved.
            </div>
        </div>
    )
};

export default Footer;