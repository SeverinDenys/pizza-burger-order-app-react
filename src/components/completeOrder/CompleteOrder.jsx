/* eslint-disable react/prop-types */

const CompleteOrder = ({
  menuItems,
  resetAmountForItem,

  setIsVisibleModal,
}) => {
  const totalPrice = menuItems.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const handleButtonClick = () => {
    setIsVisibleModal(true);
  };

  return (
    <div className="completeOrderContainer">
      <h2 className="completeOrderContainer__Title">Your order</h2>
      {menuItems
        .filter((item) => item.amount !== 0)
        .map((item) => (
          <div className="completeOrderContainer__Item" key={item.id}>
            <span className="itemName">
              {item.name}{" "}
              <span
                className="removeItem"
                onClick={() => resetAmountForItem(item.id)}
              >
                remove
              </span>
            </span>
            <span className="itemPrice">
              ${item.price * item.amount}
            </span>
          </div>
        ))}
      <hr className="divider" />
      <div className="totalPrice">
        <span>Total price:</span>
        <span className="priceValue">${totalPrice}</span>
      </div>

      <button
        className="completeOrderButton"
        onClick={handleButtonClick}
      >
        Complete order
      </button>

      {/* Conditionally render PaymentDetails */}
    </div>
  );
};

export default CompleteOrder;
