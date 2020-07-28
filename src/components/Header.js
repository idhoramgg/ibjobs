import React, {Component} from 'react';
import { withRouter } from 'react-router'

import './header.css';

class Header extends Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let keyword = this.state.search
        console.log(keyword);
    }

    render() {
        const vid = "https://www.w3schools.com/tags/movie.mp4"
        return (
            <div className="head-content">
    
            <div className="head">
                <video autoPlay="autoplay" width="100%" height="500px" loop="loop" muted>
                    <source src={vid} type="video/mp4"/>    
                </video>
            </div>
    
            <div className="main-head">
                <h3>A Great workplace combines exceptional colleagues and hard problems</h3>
                <form type="submit" onSubmit={this.handleSubmit}>
                    <input type="text" 
                    name="search"
                    value={this.state.search}
                    onChange={this.handleChange} 
                    placeholder="Search jobs by keyword" />
                </form>
            </div>
    
            </div>
        );
    }
 
}

export default Header;