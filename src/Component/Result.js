import React, { Component } from 'react';

class Result extends Component {


    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <h1 id='ex' > {result}</h1>
            </div>
        )
            ;
    }
}


export default Result;