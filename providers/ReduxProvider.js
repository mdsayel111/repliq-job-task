// "use client";
// import { store } from "@/redux/store";
// import { Provider } from "react-redux";

// export default function ReduxProvider({ children }) {
//   return (
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistorObject}> */}
//       {children}
//       {/* </PersistGate> */}
//     </Provider>
//   );
// }

// app/providers.jsx
"use client";

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";

export function ReduxProviders({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
