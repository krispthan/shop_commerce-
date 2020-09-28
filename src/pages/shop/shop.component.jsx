import React from 'react';
import { Route } from 'react-router-dom';
import CollcectionsOverview from '../../component/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollcectionsOverview} />
      <Route path={`${match.path}/:categoryId}`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
