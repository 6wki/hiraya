// addressSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

interface AddressState {
  addressData: Address | null;
}

interface Address {
  // Define your address fields here
  email: string;
  firstName: string;
  secondName: string;
  postalCode: string;
  city: string;
  Hausnummer: string;
  // Add other address fields
}

const initialState: AddressState = {
  addressData: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<Address>) => {
      state.addressData = action.payload;
    },
    // clearAddress: (state) => {
    //   state.addressData = null;
    // },
  },
});

const persistConfig = {
  key: "address",
  storage,
};

export const { setAddress } = addressSlice.actions;
export const selectAddress = (state: { address: any }) =>
  state.address.addressData!;

export const addressReducer = addressSlice.reducer;
export default persistReducer(persistConfig, addressSlice.reducer);
