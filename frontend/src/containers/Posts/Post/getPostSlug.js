import React, {Component} from "react";
import {useParams} from "react-router-dom";
import PostView from "../../../components/PostList/PostView/PostView";

//Hook for class Post TODO: replace
function getPostSlug() {
    let {slug} = useParams();
        return (
            <div>
                <PostView post_slug={ slug } />
            </div>
        );
    }
export default getPostSlug;