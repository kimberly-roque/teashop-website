import React from 'react';

export default class ProductListItem extends React.component {

  render() {
    return (
      <div className="card-container col-3">
        <div className="image">
          <img src="{this.props.product.image}" alt="tea image"/>
        </div>
        <div className="name">
          {this.props.name}
        </div>
        <div className="price">
          ${this.props.price}
        </div>
        <div className="description">
          ${this.props.description}
        </div>
      </div>
    );
  }
}
