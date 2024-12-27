/* eslint-disable react/prop-types */

import { useState } from "react";

const regex = /^[A-Za-z\s]+$/;

const PaymentDetails = ({ isPaid, setIsPaid }) => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add payment logic here

    /// i need to check if the first e.target.value.name === regex;
    if (!regex.test(formData.name)) {
      alert("Name must contain alphabetic letters only!");
      return;
    }

    // / to check if cardNumber has specifically 16digits
    if (formData.cardNumber.length !== 16) {
      alert("card Number should include 16 digits");
      return;
    }

    /// to check if cardNumber has specifically 16digits
    if (formData.cvv.length !== 3) {
      alert("card CVV should include 3 digits");
      return;
    }

    setIsPaid(true);
  };

  return (
    <div
      className={isPaid ? "payment-form-submitted" : "payment-form"}
    >
      {isPaid ? (
        <div className="payment-form-submitted">
          <h2>Payment successful!</h2>
        </div>
      ) : (
        <div className="inner-form">
          <h2>Enter card details</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="cardNumber"
              value={formData.cardNumber}
              placeholder="Enter card number"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="cvv"
              value={formData.cvv}
              placeholder="Enter CVV"
              onChange={handleChange}
              required
            />
            <button type="submit" className="pay-button">
              Pay
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
