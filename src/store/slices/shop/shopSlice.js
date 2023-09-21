import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    items: [],
    itemSelected: {},
    onItemDetail: false,
    loading: false,
    shoppingCart: [],
    shopListOpen: false,
    countTotal: 0,
    
  },
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    handleShopList: (state, action) => {
      state.shopListOpen = action.payload;
    },
    getItems: (state, action) => {
      state.items = action.payload;
    },
    itemDetail: (state, action) => {
      state.itemSelected = action.payload;
    },
    deatailView: (state, action) => {
      state.onItemDetail = action.payload
    },
    bringByCategory: (state, action) => {
      state.items = action.payload;
    },
    itemsAdded: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.shoppingCart.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.count++;
      } else {
        state.shoppingCart.push({ ...newItem, count: 1 });
      }
      state.countTotal += 1;
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      const existingItem = state.shoppingCart.find(
        (item) => item.id === itemToRemove
      );

      if (existingItem) {
        existingItem.count--;

        if (existingItem.count === 0) {
          state.shoppingCart = state.shoppingCart.filter(
            (item) => item.id !== itemToRemove
          );
        }
        state.countTotal -= 1;
      }
    },
    cleanEverything: (state, action) => {
      state.shoppingCart = [];
      state.countTotal = 0;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoading,
  getItems,
  bringByCategory,
  itemsAdded,
  handleShopList,
  removeItem,
  itemsAmount,
  itemDetail,
  deatailView,
  getTotalPrice,
  cleanEverything,
} = shopSlice.actions;
