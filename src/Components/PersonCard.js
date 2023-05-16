import React from "react";

class PersonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = { //objeto this.state que es la edad actual
            age: this.props.age
        };
    }
    
    incrementAge = () =>{
        console.log(this.state);
        this.setState({
            age: this.state.age + 1 //uilizando setState se puede cambiar el estado, en este caso suma 1
        });    

    }


    render(){
        return(
            <div>
                <h2>{this.props.firstName} {this.props.lastName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair color: {this.props.hairColor}</p>
                <button onClick={this.incrementAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}


export default PersonCard;  