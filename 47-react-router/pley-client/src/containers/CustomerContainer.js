import React from "react";
import CustomerCard from "../components/CustomerCard";

class CustomerContainer extends React.Component {
  render() {
    return (
      <div className="card-container">
        {this.props.customers.length ? (
          this.props.customers.map(customer => {
            return (
              <CustomerCard
                key={customer.id}
                {...customer}
                setCurrentCustomer={this.props.setCurrentCustomer}
              />
            );
          })
        ) : (
          <h3>No customers found</h3>
        )}
      </div>
    );
  }
}

export default CustomerContainer;
