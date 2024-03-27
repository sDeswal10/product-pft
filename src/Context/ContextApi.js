import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props)=>{
    const [selectedItem, setSelectedItem] = useState();
    const [productData, setProductData] = useState([]);

    const selectItem = (items, data)=>{
        setSelectedItem(items);
        setProductData(data)
    }

    return(
        <Context.Provider value={{selectedItem, setSelectedItem, productData, setProductData}}>
            {props.children}
        </Context.Provider>
    )
}