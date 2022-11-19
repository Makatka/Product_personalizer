
const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>{props.children}</form>
  )
}
export default ProductForm

