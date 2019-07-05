import React from "react";
import ProfileForm from "../components/ProfileForm";

class ProfilePage extends React.Component {
  state = {
    restaurant: null
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/restaurants/1")
      .then(r => r.json())
      .then(restaurant => this.setState({ restaurant }));
  }

  updateRestaurant = restaurant => {
    fetch(
      `http://localhost:3000/api/v1/restaurants/${this.state.restaurant.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ restaurant: restaurant })
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then(restaurant =>
        this.setState({ restaurant }, () => alert("Updated!"))
      )
      .catch(() => alert("Bad request."));
  };

  render() {
    return (
      <div className="profile-page">
        <h1>My Profile</h1>
        {this.state.restaurant && (
          <ProfileForm
            restaurant={this.state.restaurant}
            updateRestaurant={this.updateRestaurant}
          />
        )}
      </div>
    );
  }
}

export default ProfilePage;
