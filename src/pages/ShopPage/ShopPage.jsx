import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...collections }) => (
      <CollectionPreview key={id} {...collections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
