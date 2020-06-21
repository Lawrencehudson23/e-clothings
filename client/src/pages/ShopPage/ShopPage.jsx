import React, { useEffect } from "react";
import { Route } from "react-router-dom";
//higher order  component
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

//NOTE: match location history
import CollectionPageContainer from "../CollectionPage/CollectionPage.container";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverview.container";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
