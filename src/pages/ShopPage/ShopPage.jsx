import React, { useState } from "react";
import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collections }) => (
        <CollectionPreview key={id} {...collections} />
      ))}
    </div>
  );
};
export default ShopPage;
