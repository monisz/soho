import { Item } from "../Item";
import "./styles.css";

export const ItemList = ({productos}) => {

    return (
        <>
            {productos && productos.map(element => {
                return (
                    <div className="items" key={element.title} > 
                        <Item producto={element} />
                        <Item producto={element} />
                        <Item producto={element} />
                        <Item producto={element} />
                        <Item producto={element} />
                        <Item producto={element} />
                        <Item producto={element} />
                        <Item producto={element} />
                    </div>
                )
            })}
        </>
    )

/* return (
        <>
            {
                productData && productData.map(el => {
                    return (
                        <div key={el.title}>
                            <h4>{el.title}</h4>
                            <img src={el.images[0]} />
                            <h4>ARS $ {el.price}</h4>
                            <p>{el.details}</p>
                        </div>
                    )
                })
            }
        </>
    ) */


}