import React from "react";
import {useParams} from "react-router-dom";
import TagView from "../../../components/TagsListView/TagView/TagView";

function Tag() {
    let {tag__slug, page_tag} = useParams();
    return (
        <TagView tag__slug={tag__slug} page_tag={page_tag}/>
    );
}

export default Tag;