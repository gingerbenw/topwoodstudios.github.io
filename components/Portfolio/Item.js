import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ name, category, image }) => (
  <a href="single-project.html" className="portfolio_item">
    <img src={image} alt={name} className="img-responsive" />
    <div className="portfolio_item_hover">
      <div className="portfolio-border clearfix">
        <div className="item_info">
          <span>{name}</span>
          <em>{category}</em>
        </div>
      </div>
    </div>
  </a>
);

Item.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
};

export default Item;
