import { useState } from "react"

import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

import styles from "./SpacecraftBuilder.module.css"

function SpacecrafetBuilder() {
    const [inventory, setInventory] = useState([]);

    function addItem (item) {
        setInventory((prevInventory) => [...prevInventory, item]);
    }

    function deleteItem (id) {
        setInventory((prevInventory) => prevInventory.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h1>Spacecraft Builder</h1>

            <div className={styles.itemForm}>
                <ItemForm onSubmit={addItem}/>
            </div>

            <div>
                <InventoryDisplay inventory={inventory} onDelete={deleteItem}/>
            </div>
        </div>
    )
}

export default SpacecrafetBuilder