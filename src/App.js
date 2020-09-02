import React from "react";
import MyCard from "./MyCard";
import axios from "axios";
import Followers from "./Followers";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userdata: {},
      followersdata: [],
      username: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/tatkaef")
      .then((res) => {
        console.log(res.data);
        this.setState({ userdata: res.data });
      })
      .catch((err) => console.log("error:", err));

    axios
      .get("https://api.github.com/users/tatkaef/followers")
      .then((res) => {
        console.log(res.data);
        this.setState({ followersdata: res.data });
      })
      .catch((err) => console.log("error:", err));
  }

  render() {
    return (
      <div className="app">
        <h1>Github user:</h1>
        <MyCard userdata={this.state.userdata} />
        <h1>Github followers</h1>
        <Followers followersdata={this.state.followersdata} />
      </div>
    );
  }
}

export default App;
