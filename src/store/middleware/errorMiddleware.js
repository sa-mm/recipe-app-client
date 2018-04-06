const errorMiddleware = store => next => action => {
  if (action.payload.name === "Error") {
    store.dispatch();
  }
  next(action);
};

export default errorMiddleware;
