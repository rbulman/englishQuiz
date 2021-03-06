//used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';
import CurrentUser from './common/CurrentUser';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header 
                    loading={this.props.loading}
                />
                <CurrentUser />
                {this.props.children}
            </div>
        );
    }
}


App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0,
        user: state.user
    };
}
export default connect(mapStateToProps)(App);