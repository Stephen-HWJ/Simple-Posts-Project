import React from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import PostCard from "./card";
import { fetchPostsIfNeeded } from "../redux/postsActions";

class CardList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { posts, ifFetching } = this.props;
    if (ifFetching || posts.length <= 0) {
      console.log(this.props);
    }
    return ifFetching || posts.length <= 0 ? (
      <Text>LOADING...</Text>
    ) : (
      posts.map((post, index) => (
        <PostCard title={post.title} body={post.body} id={index} key={index} />
      ))
    );
  }
}

const mapStateToProps = (state) => {
  const { posts, ifFetching } = state;
  return { posts, ifFetching };
};

export default connect(mapStateToProps)(CardList);
