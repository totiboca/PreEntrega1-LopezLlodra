import CartWidget from './CartWidget';
const ItemListContainer=(promps) => {
    return(
        <>
        <p>{promps.mensaje}</p>
        <CartWidget />
        </>
    )
}


export default ItemListContainer;