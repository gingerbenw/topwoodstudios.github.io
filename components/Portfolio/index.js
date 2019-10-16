import React from 'react';
import Item from './Item';

const Portfolio = () => {
  const workItems = [
    { name: 'One', category: 'One', image: 'http://placehold.it/1000x1000', href: '/page' },
    { name: 'Two', category: 'Two', image: 'http://placehold.it/1000x1000', href: '/page' },
    { name: 'Three', category: 'Three', image: 'http://placehold.it/1000x1000', href: '/page' },
    { name: 'Four', category: 'Four', image: 'http://placehold.it/1000x1000', href: '/page' },
    { name: 'Five', category: 'Five', image: 'http://placehold.it/1000x1000', href: '/page' },
    { name: 'Six', category: 'Six', image: 'http://placehold.it/1000x1000', href: '/page' },
    { name: 'Seven', category: 'Seven', image: 'http://placehold.it/1000x1000', href: '/page' },
  ];

  return (
    <div className="portfolio-div">
      <div className="portfolio">
        <div className="no-padding portfolio_container">

          {workItems.map((workItem, index) => {
                  const className = index % 6 === 0 ? 'col-md-6 col-sm-12' : 'col-md-3 col-sm-6';
                  return (
                    <div className={className}>
                      <Item {...workItem} />
                    </div>
                );
})}


        </div>
      </div>
    </div>

  );
};

export default Portfolio;
