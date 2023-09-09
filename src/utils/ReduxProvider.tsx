// "use client";

// import { persistor, store } from "@/redux/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         {children}
//       </PersistGate>
//     </Provider>
//   );
// };

// export default ReduxProvider;

"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

persistStore(store); // persist the store

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  // if (typeof window === "undefined") {
  //   return <Provider store={store}>{children}</Provider>;
  // }
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export default ReduxProvider;
