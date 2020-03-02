import React, {Component} from "react";
import PostView from "../../../components/PostList/PostView/PostView";
import {useParams} from "react-router-dom";


class Post extends Component {
    render() {
        return (
            <PostView/>
        );
    }
}

export default Post;