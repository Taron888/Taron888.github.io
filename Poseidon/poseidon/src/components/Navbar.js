import React from 'react';
import './common/Navbar.css';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {header : "Heading"}
        this.handleScroll = this.handleScroll.bind(this)
        this.wind_scroll=100;
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
       
        if(window.scrollY >= this.wind_scroll){
            if(this.state.header === "Heading"){
                this.setState({ header : "Menu"});
            }
        }else{
            if(this.state.header !== "Heading" ){
                this.setState({ header : "Heading"});
            }
        }
    }

    render(){
        return (
            <div className={this.state.header} onScroll={this.handleScroll}>
                <h1>Poseidon</h1>
                <ul>
                  <li><a href="#Heading">Home</a></li>
                  <li><a href="#Section1">About Us</a></li>
                  <li><a href="#Section2">Our Models</a></li>
                  <li><a href="#Section3">Price</a></li>
                  <li><a href="#Footer">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;