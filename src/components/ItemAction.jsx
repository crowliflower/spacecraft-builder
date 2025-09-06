import styles from "./ItemAction.module.css"

function ItemAction({itemID, onDelete}) {
    return (
        <div>
            <button 
                className={styles.button} 
                onClick={() => onDelete(itemID)}
            >
                Delete
            </button>
        </div>
    );
}

export default ItemAction;