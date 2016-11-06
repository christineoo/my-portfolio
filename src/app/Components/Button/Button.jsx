import React, {PropTypes} from 'react'

const Button = ({children, hrefLink}) => {
    return (
        <a target="_blank" className="link-button" href={hrefLink}>{children}</a>
    )
};

Button.propTypes = {
    href: PropTypes.string
};

export default Button;