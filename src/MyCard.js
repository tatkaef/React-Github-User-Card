import React from "react";

class MyCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.userdata);
    return (
      <div>
        <h2>{this.props.userdata.login}</h2>
        <img src={this.props.userdata.avatar_url} />
        <p>{this.props.userdata.name}</p>
        <p>{this.props.userdata.location}</p>
        <p>{this.props.userdata.bio}</p>
      </div>
    );
  }
}
export default MyCard;
