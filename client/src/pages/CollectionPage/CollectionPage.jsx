import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import {
  CollectionPageContainer,
  CollectionTitleContainer,
  CollectionItemsContainer,
} from "./CollectionPage.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitleContainer>{title}</CollectionTitleContainer>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
//NOTE:pass in the second parameter ownProps. this is necessary bc unlike other selectors, this selector needs a part of the state  depending one the URL parameter!
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
