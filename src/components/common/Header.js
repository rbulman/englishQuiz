import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active" style={{color: 'black' }}>主页</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active" style={{color: 'black' }}>练习</Link>
            {" | "}
            <Link to="/login" activeClassName="active" style={{color: 'black' }}>登录</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object
};

export default connect()(Header);