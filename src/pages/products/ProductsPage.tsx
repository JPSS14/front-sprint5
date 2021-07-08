import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FilterContext from "../../contexts/FilterContext";
import LoadingContext from "../../contexts/LoadingContext";
import MessageContext from "../../contexts/MessageContext";
import ProductsContext from "../../contexts/ProductsContext";
import ProductsService from "../../services/ProductsService";
import Breadcrumbs from "./components/Breadcrumbs";
import Filters from "./components/Filters";
import { ProductItem } from "../../types/ProductItem";

function Product({ sku, image, name, price }: { sku: number, image: string, name: string, price: string }) {
    const history = useHistory();

    function detail() {
        history.push('/product/' + sku);
    }

    return (
        <li className="products__card card" onClick={() => detail()}>
            <div className="card">
                <img className="card__img" src={image} alt="" />
                <p className="card__description">
                    {name}
                </p>
                <p className="card__price">
                    R$ {price}
                </p>
            </div>
        </li>
    );
}

function ProductsPage() {
    const [products, setProducts] = useState({ products: [{ sku: 0, image: '', name: '', price: '' }] });
    const [filters, setFilters] = useState({ filters: [{ id: '', label: '' }] });

    const { filter } = useContext(FilterContext);
    const { addRequest, removeRequest } = useContext(LoadingContext);
    const { setMessage } = useContext(MessageContext);

    // eslint-disable-next-line
    useEffect(() => loadProducts(), []);

    function loadProducts() {
        addRequest();
        ProductsService.get()
            .then((r: Products) => {
                setProducts(r);
                setFilters(r);
            })
            .catch(() => setMessage("Ocorreu um erro ao carregar os produtos..."))
            .finally(() => removeRequest());
    }

    interface Products {

        products: ProductItem[];
        filters: [filters: { id: string, label: string }]
    }

    return (
        <ProductsContext.Provider value={filters}>
            <Breadcrumbs></Breadcrumbs>
            <Filters></Filters>
            <section className="main__products products">
                <div className="products__row">
                    <ol className="products__list">
                        {products.products
                            .filter(p =>
                                filter ? p.name.toUpperCase().indexOf(filter.toUpperCase()) !== -1 : true)
                            .map(
                                p =>
                                    <Product key={p.sku} sku={p.sku} image={p.image} name={p.name} price={p.price} />
                            )
                        }
                    </ol>
                </div>
                <div className="products__row">
                    <ol className="products__list">
                    </ol>
                </div>
            </section>
        </ProductsContext.Provider>

    );
}

export default ProductsPage;