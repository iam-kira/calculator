import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div className='button'>


        <div >
          <button name="CE" onClick={e => this.props.onClick(e.target.name)} class="button ">CE</button>
          <button name="(" onClick={e => this.props.onClick(e.target.name)} class="button">(</button>
          <button name=")" onClick={e => this.props.onClick(e.target.name)} class="button ">)</button>
          <button name="/" onClick={e => this.props.onClick(e.target.name)} class="button">/</button>
        </div>
        <div >
          <button name="7" onClick={e => this.props.onClick(e.target.name)} class="button">7</button>
          <button name="8" onClick={e => this.props.onClick(e.target.name)} class="button">8</button>
          <button name="9" onClick={e => this.props.onClick(e.target.name)} class="button">9</button>
          <button name="*" onClick={e => this.props.onClick(e.target.name)} class="button ">x</button>
        </div>
        <div >
          <button name="4" onClick={e => this.props.onClick(e.target.name)} class="button">4</button>
          <button name="5" onClick={e => this.props.onClick(e.target.name)} class="button">5</button>
          <button name="6" onClick={e => this.props.onClick(e.target.name)} class="button">6</button>
          <button name="-" onClick={e => this.props.onClick(e.target.name)} class="button">-</button>
        </div>
        <div>
          <button name="1" onClick={e => this.props.onClick(e.target.name)} class="button">1</button>
          <button name="2" onClick={e => this.props.onClick(e.target.name)} class="button">2</button>
          <button name="3" onClick={e => this.props.onClick(e.target.name)} class="button">3</button>
          <button name="+" onClick={e => this.props.onClick(e.target.name)} class="button">+</button>

        </div>
        <div >
          <button name="." onClick={e => this.props.onClick(e.target.name)} class="button">.</button>
          <button name="0" onClick={e => this.props.onClick(e.target.name)} class="button">0</button>
          <button name="C" onClick={e => this.props.onClick(e.target.name)} class="button">C</button>
          <button name="=" onClick={e => this.props.onClick(e.target.name)} class="button">=</button>
        </div>

      </div>
    );
  }
}
export default Button;