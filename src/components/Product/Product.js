import styles from './Product.module.scss';
import {useMemo, useState} from "react";
import ProductImage from "./ProductImage/ProductImage";
import ProductForm from "./ProductForm/ProductForm";
import PropTypes from 'prop-types';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[1]);
  const [currentSize, setCurrentSize] = useState(props.sizes[1]);
  const getPrice = useMemo(() => {
    return props.basePrice + currentSize.additionalPrice
  }, [currentSize]);

  const addToCart = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('=============')
    console.log('Name: ', props.title)
    console.log('Price: ', getPrice)
    console.log('Color: ', currentColor)
    console.log('Size: ', currentSize.name)
  }

  return (
    <article className={styles.product}>
      <ProductImage color={currentColor} title={props.title} name={props.name}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm handleSubmit={addToCart}
                     sizes={props.sizes}
                     setOptionSize={setCurrentSize}
                     optionSize={currentSize}
                     colors={props.colors}
                     setOptionColor={setCurrentColor}
                     optionColor={ currentColor}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default Product