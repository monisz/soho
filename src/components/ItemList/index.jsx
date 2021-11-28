import { Item } from "../Item";
import "./styles.css";

export const ItemList = ({productos}) => {

    return (
        <>
            {productos && productos.map(element => {
                return (
                    <div className="items" key={element.title} > 
                        <Item producto={element} />
                    </div>
                )
            })}
        </>
    )
}