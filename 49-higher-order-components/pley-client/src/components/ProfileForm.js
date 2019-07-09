import React from "react";

class ProfileForm extends React.Component {
  state = {
    name: this.props.restaurant.name,
    location: this.props.restaurant.location,
    cuisine: this.props.restaurant.cuisine
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateRestaurant(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <textarea
              type="text"
              name="location"
              rows={4}
              value={this.state.location}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cuisine">Cuisine</label>
            <input
              type="text"
              name="cuisine"
              value={this.state.cuisine}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Update Profile" />
        </form>
      </div>
    );
  }
}

export default ProfileForm;
