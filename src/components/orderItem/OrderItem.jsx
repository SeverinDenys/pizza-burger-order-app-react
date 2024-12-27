/* eslint-disable react/prop-types */

const OrderItem = ({ menuItems, addItem }) => {
  return (
    <>
      <div className="orderContainer">
        {menuItems.map((item) => (
          <div
            className="orderContainer__ItemContainer"
            key={item.id}
          >
            <div className="orderContainer__ItemContainer--img">
              <span>{item.emoji}</span>
            </div>
            <div className="orderContainer__ItemContainer--ingredients">
              <h2>{item.name}</h2>
              <p>{item.ingredients.join(", ")}</p>
              <h3>${item.price}</h3>
            </div>
            <div className="orderContainer__ItemButton">
              <button onClick={() => addItem(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderItem;
