import React, {Component} from 'react';
import { PayPalButton } from "react-paypal-button-v2";
 
class PaypalButton extends Component {
  render() {
    return (
      <PayPalButton
        amount={this.props.total}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
            console.log("Transaction completed by " + details.payer.name.given_name);
            console.log(data);
          
        //   return fetch("/paypal-transaction-complete", {
        //     method: "post",
        //     body: JSON.stringify({
        //       orderID: data.orderID
        //     })
        //   });
        }}
      />
    );
  }
}

export default PaypalButton;