import shopActionTypes from "./shop.types";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync,
} from "./shop.actions";

describe("fetchCollectionsStart action", () => {
  it("should create the fetchCollectionsStart action", () => {
    expect(fetchCollectionsStart().type).toEqual(
      shopActionTypes.FETCH_COLLECTIONS_START
    );
  });
});

describe("fetchCollectionsSuccess action", () => {
  it("should create the fetchCollectionsSuccess action", () => {
    const mockCollectionMap = {
      hats: {
        id: 1,
      },
    };
    const action = fetchCollectionsSuccess(mockCollectionMap);

    expect(action.type).toEqual(shopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionMap);
  });
});

describe("fetchCollectionsFailure action", () => {
  it("should create the fetchCollectionsFailure action", () => {
    const action = fetchCollectionsFailure("error");

    expect(action.type).toEqual(shopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual("error");
  });
});

// WARNING: dispatch test
describe("fetchCollectionsStartAsync action", () => {
  it("should create the fetchCollectionsStartAsync action", () => {
    const mockActionCreator = fetchCollectionsStartAsync();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart());
  });
});
