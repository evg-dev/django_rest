import React, from "react";
import PostListView from "../../components/PostListView/PostListView";
import {useParams} from "react-router-dom";

function Posts() {
    let {page} = useParams();
    return (
        <PostListView page={page}/>
    );
}

export default Posts;