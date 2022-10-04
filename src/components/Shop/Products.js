import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price:6,
        title:'My Book',
        description:'First book'
    },
    {
        id: 'p2',
        price:4,
        title:'My Second Book',
        description:'Second book'
    },
    {
        id: 'p3',
        price:5,
        title:'My Third Book',
        description:'Third book'
    },


]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(product => (<ProductItem
              title={product.title}
              price={product.price}
              description={product.description}
              id={product.id}
              key={product.id}
          />))}
      </ul>
    </section>
  );
};

export default Products;
