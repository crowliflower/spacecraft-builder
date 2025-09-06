import ItemCard from "./ItemCard.jsx";
import ItemAction from "./ItemAction.jsx";

function InventoryDisplay({inventory, onDelete}) {
    return (
        <div>
            <h2>Inventory</h2>
            {
                inventory.map((item) => (
                    <div key={item.id} className="itemBox" >
                        <div>
                            <ItemCard 
                                name={item.name}
                                quantity={item.quantity}
                                purpose={item.purpose}
                            />
                        </div>

                        <div>
                            <ItemAction 
                                itemID={item.id} 
                                onDelete={onDelete}
                            />
                        </div>
                    </div>
                        
                ))
            }
        </div>
    );
}

export default InventoryDisplay;