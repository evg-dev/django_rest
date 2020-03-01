import React, {Component} from "react";

class TagsList extends Component {

    state = {
        tags: []
    };

    async loadTags() {
        this.setState({
            tags: await fetch("/api/v0/tag/").then(response => response.json())
        })

    }

    componentDidMount() {
        this.loadTags();
    }

    render() {
        return (
            <ul className="content-list">
                {this.state.tags.map((tag) => (
                    <div className="tag-list" key={tag._id}>
                        <p>{tag.name}</p>
                        <p>{tag.slug}</p>
                    </div>
                ))}
            </ul>
        );
    }
}


export default TagsList
