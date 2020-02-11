import React, { Component } from 'react';
import './Navbar.scss';
import menuIcon from '../../assets/icons/white-menu.jpg';
import searchIcon from '../../assets/icons/search.png';
import closeIcon from '../../assets/icons/close.png';
import { connect } from 'react-redux';
import * as action from '../../actions/actions';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: true,
            showSearchInputBox: false
        }
    }

    searchInputHandler = (location) => {
        if (location.pathname !== '/employee') {
            this.setState({
                showSearch: false,
                showSearchInputBox: false
            })
        }
        else {
            this.setState({
                showSearch: true
            })
        }
    }

    openSearchTextBox = () => {
        this.setState({
            showSearchInputBox: true
        })
    }

    closeSearchTextBox = () => {
        this.props.onChange();
        this.setState({
            showSearch: true,
            showSearchInputBox: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the location has changed
        if (prevProps.location !== this.props.location) {
            this.searchInputHandler(this.props.location);
            this.props.onChange();
        }
    }

    render() {
        let searchInputBox = (
            <span>
                <input type="text" className="display-inline form-control" placeholder="Search" onChange={this.props.onChange.bind(this)} />
                <img src={closeIcon} width="20" height="20" className="align" alt="" onClick={() => this.closeSearchTextBox()} />
            </span>
        );
        let defaultSearch = (
            <div>
                <img src={searchIcon} width="20" height="20" className="align" alt="" onClick={() => this.openSearchTextBox()} />
            </div>
        )
        return (
            <nav className="navbar aqua-marine" >
                <div className="navbar-brand white">
                    <div className="row">
                        <div className="col-6">
                            <img src={menuIcon} width="20" height="20" className="align" alt="" />
                            <span className={this.state.showSearchInputBox ? 'nav-title pad-left' : 'pad-left'}>Employee Management Sysytem</span>
                        </div>
                        <div className="col-6">
                            <div className="float-right">
                                {
                                    (this.state.showSearch) ?
                                        (this.state.showSearchInputBox ? searchInputBox : defaultSearch)
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (e) => dispatch({
            type: action.SEARCH_TEXT,
            payload: {
                search: e ? e.target.value : null,
            }
        })
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Navbar));