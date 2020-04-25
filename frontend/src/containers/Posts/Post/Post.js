import React from "react";
import {useParams} from "react-router-dom";
import PostView from "../../../components/PostListView/PostView/PostView";

//Hook for class Post GET by slug field
function Post() {
    let {post__slug} = useParams();
    return (
        <PostView post__slug={post__slug}/>
    );
}

export default Post;