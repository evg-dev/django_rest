import React from "react";
import {BrowserRouter, useParams} from "react-router-dom";
import TagView from "../../../components/TagsList/TagView/TagView";

function Tag() {
    let {tag__slug} = useParams();
    console.log({tag__slug});
    return (
        <TagView tag__slug={tag__slug}/>
    );
}

export default Tag;