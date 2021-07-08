import React from "react";
import {FilterItem} from "../types/FilterItem";

interface Itens {

    // products: ProductsItem[],
    // setProducts: () => void;
    filters: FilterItem[]
}

const ProductsContext = React.createContext<Itens>({} as Itens);

export default ProductsContext;