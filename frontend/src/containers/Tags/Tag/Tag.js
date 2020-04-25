import React from "react";
import {BrowserRouter, useParams} from "react-router-dom";
import TagView from "../../../components/TagsListView/TagView/TagView";

function Tag() {
    let {tag__slug} = useParams();
    return (
        <TagView tag__slug={tag__slug}/>
    );
}

export default Tag;