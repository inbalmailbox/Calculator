import React, { Component } from 'react';
import axios from 'axios';
import CalKeyBoard from './CalKeyBoard';
import DisplayPanel from './DisplayPanel';
import DisplayHistory from './DisplayHistory';

export class Calcs extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            firstInput: 0,
            secondInput:0,
            calcAction: "",
            displayValue: 0,
            Message: ""
        }

        this.onKey2 = this.onKey2.bind(this);
        this.onKey = this.onKey.bind(this);
        this.onEqualsKey = this.onEqualsKey.bind(this)
        this.onChangeUser = this.onChangeUser.bind(this)
        
    }

    onKey = (newName) => {
        
        this.setState({
            firstInput:  newName
        });
    }

    onKey2 = (newName) => {
        this.setState({ secondInput: newName });
       
    }

    onChangeUser = (calcOperator) => {    
            this.setState({ calcAction: calcOperator });
    }

    onEqualsKey = () => {

        this.populateCalcsResult();
    }


    populateCalcsResult() {

        let var1 = parseFloat(this.state.firstInput);
        let var2 = parseFloat(this.state.secondInput);
        let calcAction = this.state.calcAction;

        if (calcAction == "") {
            this.setState({ Message: "יש לבחור פעולה"})
            return false;
        }
        else {

            
            axios.get("api/Calcs/GetResult", { params: { inputNum1: var1, inputNum2: var2, calcAction: calcAction } }).then(result => {

                const response = result.data;
                this.setState({ Message: response });
            }) .catch(error => this.setState({ Message: error }) )
        }
    }

    render() {

        return (
            <div>          
                 <div className="container">             
                    <div className="container-box">                   
                        <CalKeyBoard onEqualsKey={this.onEqualsKey}
                            onKey={this.onKey} onKey2={this.onKey2}
                            onChangeUser={this.onChangeUser}
                        />
                        </div>
                        <div>
                        <DisplayPanel val={this.state.Message} />
                    </div>
                    <div>
                        <DisplayHistory  />
                    </div>
                    </div>
                </div>
        );
       
    }
}