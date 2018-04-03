import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const initialState = { recipes: {}, search: { results: [], meta: {} } };
const mockStore = configureStore();
let store;
it("renders without crashing", () => {
  store = mockStore(initialState);

  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
