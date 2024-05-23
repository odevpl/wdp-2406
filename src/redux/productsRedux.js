/* selectors */
export const getAll = ({ products }) => products;

export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getFavorites = ({ products }) =>
  products.filter(item => item.isFavorite === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_FAVORITE_PRODUCT = createActionName('TOGGLE_FAVORITE_PRODUCT');

/* action creators */
export const toggleFavoriteProduct = payload => ({
  type: TOGGLE_FAVORITE_PRODUCT,
  payload: payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    default:
      return statePart;
  }
}
