import React from 'react';
import './common/Statemant.css'

class  Statemant extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentClassName : "first",
            statemant : props.statemant ,
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.wind_scroll=415;
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        if(window.scrollY >= this.wind_scroll){
           if(this.state.currentClassName === 'first'){
               this.setState({ currentClassName : 'second' });
           }
        }
        else{
            if(this.state.currentClassName !== 'first'){
               this.setState({ currentClassName : 'first' })
            }
        }
    }

    render(){
        return (
            <div className={this.state.currentClassName} onScroll={this.handleScroll}>
                <h2>{this.state.statemant}</h2>
            </div>
        )
    }
    
}

export default Statemant;
