import OptionSize from "./OptionSize/OptionSize";
import OptionColor from "./OptionColor/OptionColor";
import Button from "../../Button/Button";
import styles from "../Product.module.scss";

const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize
        sizes={props.sizes}
        setOptionSize={props.setOptionSize}
        optionSize={props.optionSize}
      />
      <OptionColor
        colors={props.colors}
        setOptionColor={props.setOptionColor}
        optionColor={props.optionColor}
      />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>

    </form>
  )
}
export default ProductForm

