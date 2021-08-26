import React, { Component } from 'react';

import './btn-add.css';

export default class BtnAdd extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value  //.toUpperCase()
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return ( 
      <form className = "item-add-form d-flex"
            onSubmit={this.onSubmit}>
        
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="Добавить еще ,,," 
               value={this.state.label} />
         <button className="btn btn-outline-secondary">
            Добавить 
          </button>
      </form>   
    )
  }
}