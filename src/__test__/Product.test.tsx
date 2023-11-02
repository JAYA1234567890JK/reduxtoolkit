import reducer, {
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
  getProducts,
  popup,
} from "../redux/productsSlice";
import { State } from "../redux/productsSlice";

const initialState: State = {
  products: [
    {
      quantity: 4,
      id: 4,
      title: "jaya",
      price: 2,
      description: "shsah",
      image: "js",
    },
  ],
  shopingCart: [
    {
      quantity: 1,
      id: 1,
      title: "jaya",
      price: 2,
      description: "shsah",
      image: "js",
    },
    {
      quantity: 4,
      id: 3,
      title: "jaya",
      price: 2,
      description: "shsah",
      image: "js",
    },
  ],
  favarateToCartArr: [],

  filterData: [],
  loading: false,
  showSucess: false,
  payAfter: false,
  couponApplied: false,
};

describe("Redux Actions", () => {
  it("should create an action to add a product to the cart", () => {
    const expectedAction = {
      type: incrementItemQuantity.type,
      payload: { id: 1 },
    };

    const action2 = { type: "products/addToCart", payload: 4 };

    const newSate = reducer(initialState, action2);

    expect(incrementItemQuantity({ id: 1 })).toEqual(expectedAction);
  });
  test("", () => {
    const action = { type: "products/addToCart", payload: 1 };
    reducer(initialState, action);
    const action2 = { type: "products/addToCart", payload: 0 };
    reducer(initialState, action2);
  });

  it("should fulfill with data on a successful request", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};

    const data = {
      id: 1,
      name: "jagan",
      price: 200,
      image: "image",
      category: "men",
    };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(data),
    });

    await getProducts()(dispatch, getState, extra);
  });
  it("should reject with an error on a failed request", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = {};
    global.fetch = jest.fn().mockResolvedValue({ ok: false });
    await getProducts()(dispatch, getState, extra);
    expect(dispatch).toHaveBeenCalledTimes(2);
  });

  it("should create an action to add or remove a product from favarateToCartArr", () => {
    const initialState2 = {
      products: [
        {
          quantity: 4,
          id: 4,
          title: "jaya",
          price: 2,
          description: "shsah",
          image: "js",
        },
      ],
      shopingCart: [
        {
          quantity: 1,
          id: 1,
          title: "jaya",
          price: 2,
          description: "shsah",
          image: "js",
        },
        {
          quantity: 1,
          id: 3,
          title: "jaya",
          price: 2,
          description: "shsah",
          image: "js",
        },
      ],
      favarateToCartArr: [
        {
          quantity: 1,
          id: 1,
          title: "jaya",
          price: 2,
          description: "shsah",
          image: "js",
        },
      ],

      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };

    const action3 = {
      type: "products/favarateToCart",
      payload: {
        quantity: 1,
        id: 1,
        title: "jaya",
        price: 2,
        description: "shsah",
        image: "js",
      },
    };
    const action4 = {
      type: "products/favarateToCart",
      payload: {
        quantity: 1,
        id: 2,
        title: "jaya",
        price: 2,
        description: "shsah",
        image: "js",
      },
    };

    const newSate1 = reducer(initialState, action3);
    const newSate3 = reducer(initialState2, action4);
    const newSate5 = reducer(initialState2, action3);

    // expect(favarateToCart({ id: 1 })).toEqual(expectedAction);
  });

  it("should create an action to increment item quantity in the cart", () => {
    const action9 = {
      type: "products/incrementItemQuantity",
      payload: { id: 1 },
    };
    const newSate9 = reducer(initialState, action9);

    const action16 = { type: "products/incrementItemQuantity", payload: 10 };
    const newSate16 = reducer(initialState, action16);

    // expect(decrementQuanity({ id: 1 })).toEqual(expectedAction);
  });
  it("should create an action to decrement item quantity in the cart", () => {
    const action10 = { type: "products/decrementQuanity", payload: { id: 1 } };
    const action19 = { type: "products/decrementQuanity", payload: { id: 3 } };

    const newSate10 = reducer(initialState, action10);
    const newSate19 = reducer(initialState, action19);

    // expect(decrementQuanity({ id: 1 })).toEqual(expectedAction);
  });

  it("should create an action to update the query", () => {
    const action14 = { type: "products/updatedQuery", payload: "" };
    const newSate14 = reducer(initialState, action14);

    const action15 = { type: "products/updatedQuery", payload: "dfvdddxc" };
    const newSate15 = reducer(initialState, action15);
  });

  it("should create an action to clear the cart", () => {
    const initialState3 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };

    const action6 = clearCart;
    const newSate6 = reducer(initialState3, action6);
    // expect(clearCart()).toEqual(expectedAction);
  });

  it("should create an action to toggle showSucess", () => {
    const initialState3 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };
    const action7 = showToggling;
    const newSate7 = reducer(initialState3, action7);

    // expect(showToggling()).toEqual(expectedAction);
  });

  it("should create an action to toggle payAfter", () => {
    const initialState3 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };
    const action11 = payToggle;
    const newSate11 = reducer(initialState3, action11);

    // expect(payToggle(true)).toEqual(expectedAction);
  });

  it("should create an action to popup", () => {
    const initialState3 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };
    const action11 = popup;
    const newSate11 = reducer(initialState3, action11);
  }); 


  it("should create an action to closeToggle", () => {
    const initialState3 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };
    const action12 = payCloseToggle;
    const newSate12 = reducer(initialState3, action12);
    // expect(payToggle(true)).toEqual(expectedAction);
  });

  it("should create an action to toggle couponApplied", () => {
    const initialState3 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: false,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };
    const action13 = couponAppliedToggle;
    const newSate13 = reducer(initialState3, action13);
  });

  test("should", () => {
    const initialState6 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: true,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };

    const action = getProducts.pending;
    const state = reducer(initialState6, action);
    expect(state.loading).toBe(false);
  });
  test("should success", () => {
    const initialState6 = {
      products: [],
      shopingCart: [],
      favarateToCartArr: [],
      filterData: [],
      loading: true,
      showSucess: false,
      payAfter: false,
      couponApplied: false,
    };
    const action = getProducts.fulfilled;
    const state = reducer(initialState6, action);
    expect(state.loading).toBe(true);
  });
  test("should reject", () => {
    const action = getProducts.rejected;
    const state = reducer(initialState, action);
    expect(state.loading).toBe(false);
  });
});
