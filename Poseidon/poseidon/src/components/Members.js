import React from 'react';
import './common/Members.css'

class Members extends React.Component{
    constructor(props){
        super(props);
        this.state = { currentClassName : "firstmemb"};
        this.handleScroll = this.handleScroll.bind(this);
        this.wind_scroll = 650;
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        if(window.scrollY >= this.wind_scroll){
            if(this.state.currentClassName === "firstmemb"){
                this.setState({ currentClassName : "secondmemb"});
            }
        }else{
            if(this.state.currentClassName !== "firstmemb" ){
                this.setState({ currentClassName : "firstmemb"});
            }
        }
    }

    render(){
        return (
            <div className="Members">
                <section className={this.state.currentClassName} onScroll={this.handleScroll}>
                <div></div>
                <h3>Allan  ( Media Director )</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam. Ut accusamus sint molestias sit inventore perspiciatis? Voluptatibus, fuga dicta, nisi minima deleniti quo incidunt explicabo quaerat dolorum atque eos!</p>
                <button>Contact Me</button>
                </section>

                <section className={this.state.currentClassName} onScroll={this.handleScroll}>
                <div></div>
                <h3>Jullite ( Artist )</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam. Ut accusamus sint molestias sit inventore perspiciatis? Voluptatibus, fuga dicta, nisi minima deleniti quo incidunt explicabo quaerat dolorum atque eos!</p>
                <button>Contact Me</button>
                </section>

                <section className={this.state.currentClassName} onScroll={this.handleScroll}>
                <div></div>
                <h3>Alice ( Desygner )</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, totam. Ut accusamus sint molestias sit inventore perspiciatis? Voluptatibus, fuga dicta, nisi minima deleniti quo incidunt explicabo quaerat dolorum atque eos!</p>
                <button>Contact Me</button>
                </section>
            </div>
        )
    }
}

export default Members;