import React from "react";

class Followers extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.followersdata);
    return (
      <div>
        {this.props.followersdata.map((person) => (
          <div>
            <h2>{person.login}</h2>
            <img src={person.avatar_url} />
            <p>{person.name}</p>
            <p>{person.location}</p>
            <p>{person.bio}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Followers;
