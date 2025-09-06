function ItemCard({name, quantity, purpose}) {
    return (
        <div>
            <h2>{name}</h2>
            <p> {quantity}</p>
            <p> {purpose}</p>
        </div>
    )
}

export default ItemCard