import React from "react";
import { useSearchParams } from "react-router-dom";

function ProductBrand() {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <p>Filtro: {searchParams.get("filter")}</p>
            <p>Marca: {searchParams.get("brand")}</p>
            <p>Ordenar por: {searchParams.get("orderBy")}</p>
        </>
    );
}

export default ProductBrand;