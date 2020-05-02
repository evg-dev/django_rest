import React from "react";
import PostListView from "../../components/PostListView/PostListView";
import {Route, useParams} from "react-router-dom";
import PostView from "../../components/PostListView/PostView/PostView";
import NoMatchPage from "../NoMatchPage/NoMatchPage";

function Posts() {
    let {page} = useParams();
    return (
        <div>
            <PostListView page={page}/>
            {/*<Route path="*">*/}
            {/*    <NoMatchPage />*/}
            {/*</Route>*/}
        </div>


    );
}

export default Posts;