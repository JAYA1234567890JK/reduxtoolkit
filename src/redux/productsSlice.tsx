import { CloseFullscreen } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export interface CartTypes {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface State {
  filterData: {}[];
  showSucess: boolean;
  products: {
    quantity: number;
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }[];
  loading: boolean;
  shopingCart: CartTypes[];
  favarateToCartArr: {
    quantity: number;
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }[];
  couponApplied: boolean;
  payAfter: any;
}

const initialState: State = {
  products: [],
  shopingCart: [],
  favarateToCartArr: [],
  filterData: [],
  loading: false,
  showSucess: false,
  payAfter: false,
  couponApplied: false,
};

export const getProducts = createAsyncThunk(
  "getProducts",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const reponse = await fetch("https://fakestoreapi.com/products");

      const data = await reponse.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const isProduct = state.shopingCart.some(
        (product) => product.id === payload
      );
      if (!isProduct) {
        const productToAdd = state.products.find(
          (product) => product.id === payload
        );
        if (productToAdd) {
          state.shopingCart.push({ ...productToAdd, quantity: 1 });
        }
      }
    },

    favarateToCart: (state, action) => {
      const { payload } = action;

      if (state.favarateToCartArr.length === 0) {
        state.favarateToCartArr.push(payload);
        return;
      }
      const favrateFilters = state.favarateToCartArr.find(
        (item) => item.id == payload.id
      );
      if (favrateFilters == undefined) {
        state.favarateToCartArr.push(payload);
      } else {
        state.favarateToCartArr = state.favarateToCartArr.filter(
          (item) => item.id !== payload.id
        );
      }
    },

    incrementItemQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.shopingCart.find((item) => item.id === id);
      if (cartItem && cartItem.quantity < 10) {
        cartItem.quantity += 1;
      }
    },

    decrementQuanity: (state, action) => {
      console.log(action, "hsfssadsad");

      const { id } = action.payload;
      const cartItemIndex = state.shopingCart.findIndex(
        (item) => item.id === id
      );
      if (cartItemIndex !== -1) {
        const cartItem = state.shopingCart[cartItemIndex];
        if (cartItem.quantity > 1) {
          cartItem.quantity -= 1;
        } else {
          state.shopingCart.splice(cartItemIndex, 1);
        }
      }
    },

    couponAppliedToggle: (state) => {
      state.couponApplied = !state.couponApplied;
    },
    payToggle: (state, action) => {
      state.payAfter = action.payload;
    },
    payCloseToggle: (state) => {
      state.payAfter = null;
    },

    clearCart: (state) => {
      state.shopingCart = [];
    },

    showToggling: (state) => {
      state.showSucess = !state.showSucess;
    },
    popup: (state) => {
      state.showSucess = false;
    },

    updatedQuery: (state, action) => {
      const query = action.payload;
      let updatedData = [...state.products];
      updatedData = updatedData.filter((item) => {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
      if (query === "") {
        state.filterData = state.products;
      } else {
        state.filterData = updatedData;
      }
    },
  },

  extraReducers: (builder) => (
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    }),
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.filterData = action.payload;
    }),
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    })
  ),
});

export const {
  addToCart,
  incrementItemQuantity,
  decrementQuanity,
  updatedQuery,
  clearCart,
  showToggling,
  favarateToCart,
  payToggle,
  payCloseToggle,
  couponAppliedToggle,
  popup,
} = productsSlice.actions;
export default productsSlice.reducer;
