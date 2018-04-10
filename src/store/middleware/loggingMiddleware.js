const loggingMiddleware = store => next => action => {
  console.log(action.type);
  next(action);
};

export default loggingMiddleware;
