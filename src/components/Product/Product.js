import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import {useState} from "react";
import shortid from "shortid";

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[1])
  const [currentSize, setCurrentSize] = useState(props.sizes[1].name)

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>

            <ul className={styles.choices}>
              {props.sizes.map(size =>
                <li key={shortid()}>
                  <button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(size.name === currentSize && styles.active)} >{size.name}</button>
                </li>
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color =>
                <li key={shortid()}>
                  <button type="button" onClick={() => setCurrentColor(color)} className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;