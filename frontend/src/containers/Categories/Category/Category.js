import React from "react";
import {useParams} from "react-router-dom";
import CategoryView from "../../../components/CategoryList/CategoryView/CategoryView";

function Category() {
    let {category__slug} = useParams();
    return (
        <CategoryView category__slug={category__slug}/>
    );
}

export default Category;