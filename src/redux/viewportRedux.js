import initialState from './initialState';

const initialViewport = initialState.viewport;

/* selectors */
export const getViewport = state => {
  return state.viewport.type;
};

/* actions */
const createActionName = actionName => `app/viewport/${actionName}`;
const CHANGE_VIEWPORT_TYPE = createActionName('CHANGE_VIEWPORT_TYPE');

/* action creators */
export const changeViewport = payload => ({
  type: CHANGE_VIEWPORT_TYPE,
  payload: payload,
});

/* reducer */
const viewportReducer = (viewport = initialViewport, action) => {
  switch (action.type) {
    case CHANGE_VIEWPORT_TYPE:
      return { ...viewport, type: action.payload };
    default:
      return viewport;
  }
};
export default viewportReducer;
