import shopActionTypes from "./shop.types";
import shopReducer, { INITIAL_STATE } from "./shop.reducer";

describe("shopReducer", () => {
  it("should return initial state", () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should set isFetching to true if fetchCollectionsState action fired", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: shopActionTypes.FETCH_COLLECTIONS_START,
      }).isFetching
    ).toBe(true);
  });
  it("should set isFetching to false and collections to payload if fetchCollectionsSuccess action fired", () => {
    const mockItems = [{ id: 1 }, { id: 2 }];

    expect(
      shopReducer(INITIAL_STATE, {
        type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems,
      })
    ).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      collections: mockItems,
    });
  });

  it("should set isFetching to false and errorMessage to payload if fetchCollectionsFailure action fired", () => {
    expect(
      shopReducer(INITIAL_STATE, {
        type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: "error",
      })
    ).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      errorMessage: "error",
    });
  });
});
