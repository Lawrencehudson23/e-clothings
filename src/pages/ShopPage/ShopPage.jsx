import React from "react";
import { Route } from "react-router-dom";
//higher order  component
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

//NOTE: match location history
import CollectionPageContainer from "../CollectionPage/CollectionPage.container";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverview.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
