// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import { fetchRockets } from "./rocketsSlice";

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

// describe("rocketSlice async actions", () => {
//   it("dispatches fetchRockets correctly", async () => {
//     const expectedActions = [
//       fetchRockets.pending.toString(),
//       fetchRockets.fulfilled.toString(),
//     ];

//     const store = mockStore({
//       rockets: { data: [], loading: false, error: null, searchTerm: "" },
//     });

//     global.fetch = jest.fn(() =>
//       Promise.resolve({
//         json: () => Promise.resolve([{ rocket: "Falcon 1" }]),
//       })
//     );

//     await store.dispatch(fetchRockets());

//     const actions = store.getActions().map((action) => action.type);

//     expect(actions).toEqual(expectedActions);
//   });
// });
import { render } from "@testing-library/react";
import rocketsSlice from "./rocketsSlice";

describe("async rocketSlice", () => {
  test("renders rockets if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ name: "Falcon 1" }],
    });
    render(<rocketsSlice />);
  });
});
