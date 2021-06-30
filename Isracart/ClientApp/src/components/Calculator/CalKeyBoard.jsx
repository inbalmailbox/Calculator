import React, { Component } from 'react';

class CalKeyBoard extends Component {

    constructor(props) {
        super(props);
      
    }

  

    render() {
        return (
            <div className="form-fields">
                                                     
                <input name="calcFInput" type="number" onChange={(event) => this.props.onKey(event.target.value)} />
                <select onChange={(ev) => this.props.onChangeUser(ev.target.value)}>
                    <option value="">בחר</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input name="calcSInput" type="number" onChange={(event) => this.props.onKey2(event.target.value)} />

             
                <button onClick={() => this.props.onEqualsKey()}
                    className="btn btn-danger btn-sm" >=</button>

            </div>
        );
    }
}

export default CalKeyBoard;
