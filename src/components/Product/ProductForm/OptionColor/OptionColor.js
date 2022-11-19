import styles from "../ProductForm.module.scss";
import shortid from "shortid";
import clsx from "clsx";


const OptionColor = (props) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color =>
          <li key={shortid()}>
            <button type="button" onClick={() => props.setOptionColor(color)} className={clsx(prepareColorClassName(color), color === props.optionColor && styles.active)} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default OptionColor