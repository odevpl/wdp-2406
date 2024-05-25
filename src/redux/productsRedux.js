/* selectors */
export const getAll = ({ products }) => products;

export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getFavorites = ({ products }) =>
  products.filter(item => item.isFavorite === true);

export const getCompares = ({ products }) =>
  products.filter(item => item.isCompare === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_FAVORITE_PRODUCT = createActionName('TOGGLE_FAVORITE_PRODUCT');
const TOGGLE_COMPARE_PRODUCT = createActionName('TOGGLE_COMPARE_PRODUCT');

/* action creators */
export const toggleFavoriteProduct = payload => ({
  type: TOGGLE_FAVORITE_PRODUCT,
  payload: payload,
});

export const toggleCompareProduct = payload => ({
  type: TOGGLE_COMPARE_PRODUCT,
  payload: payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_COMPARE_PRODUCT: {
      const compareLength = statePart.filter(product => product.isCompare === true)
        .length;
      if (
        compareLength >= 4 &&
        !statePart.find(product => product.id === action.payload).isCompare
      )
        return statePart;
      else
        return statePart.map(product =>
          product.id === action.payload
            ? { ...product, isCompare: !product.isCompare }
            : product
        );
    }

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
