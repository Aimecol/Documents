import {AmazonHeader} from '../components/shared/AmazonHeader.js';
import {ProductsGrid} from '../components/amazon/ProductsGrid.js';
import {products} from '../data/products.js';

products.loadFromBackend().then(() => {
  const amazonHeader = new AmazonHeader('.js-amazon-header').create();
  const productsGrid = new ProductsGrid('.js-products-grid').create();
  productsGrid.setAmazonHeader(amazonHeader);
});
