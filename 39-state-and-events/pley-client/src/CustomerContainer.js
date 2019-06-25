import React from 'react'
import CustomerCard from './CustomerCard'

const fakeCustomer = {
  id: 1,
  name: "Danny Funk",
  bio: "Cronut cray selfies lumbersexual tousled banh mi roof. Pinterest shabby chic thundercats sustainable pop-up yolo. Organic post-ironic pug chambray readymade put a bird on it portland vinegar. Meh try-hard tofu knausgaard intelligentsia asymmetrical put a bird on it.",
  dogs: true,
  children: true,
  avatar_url: "https://robohash.org/Danny-Funk.png?size=250x250&set=set1",
  dietary_info: "Microdosing occupy muggle magic flexitarian trust fund pickled meggings paleo. Mlkshk fanny pack ethical quinoa ennui scenester actually. Chambray offal squid kitsch. Green juice offal lomo distillery deep v meggings. 90's kombucha kickstarter tofu pitchfork cold-pressed.",
  average_rating: 2.6666666666666665,
  average_tip_rating: 2.6666666666666665
}

class CustomerContainer extends React.Component {
  render(){
    return (
      <div className="customer-container">
        <h3>{this.props.category}</h3>
        <div className="card-container">
          <CustomerCard {...fakeCustomer}/>
        </div>
      </div>
    )
  }
}

export default CustomerContainer