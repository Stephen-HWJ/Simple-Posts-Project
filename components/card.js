import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

class PostCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Title>
          {this.props.title} - {this.props.id}
        </Card.Title>
        <Card.Divider />
        <Text>{this.props.body}</Text>
      </Card>
    );
  }
}

export default PostCard;
