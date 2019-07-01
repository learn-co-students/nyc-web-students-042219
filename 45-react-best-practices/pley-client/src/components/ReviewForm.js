import React from 'react'

class ReviewForm extends React.Component {
  state = {
    content: "",
    rating: 1,
    tip_rating: 1
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({...this.state, customer_id: this.props.customerID})
    })
    .then(res => res.json())
    .then(data => {
      this.props.addReview(data)
    })

  }

  render(){
    return (
      <div className="new-review-sidebar">
        <form onSubmit={this.handleSubmit} className="review-form">
          <textarea 
            onChange={this.handleChange} 
            name="content" 
            value={this.state.content} 
            placeholder="Review this customer..." />
          <select 
            onChange={this.handleChange} 
            name="rating" 
            value={this.state.rating}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <br/>
          <select 
            onChange={this.handleChange} 
            name="tip_rating" 
            value={this.state.tip_rating}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <input type="submit" value="Submit Review" />
        </form>
      </div>
    )
  }
}

export default ReviewForm