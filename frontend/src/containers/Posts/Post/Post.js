import React from "react";
import {Route, useParams} from "react-router-dom";
import PostView from "../../../components/PostListView/PostView/PostView";
import NoMatchPage from "../../NoMatchPage/NoMatchPage";

//Hook for class Post GET by slug field
function Post() {
    let {post__slug} = useParams();
    return (
        <div>
            <PostView post__slug={post__slug}/>
            {/*<Route component={NoMatchPage}/>*/}
            {/*<Route path="*">*/}
            {/*    <NoMatchPage />*/}
            {/*</Route>*/}
        </div>
    );
}

export default Post;