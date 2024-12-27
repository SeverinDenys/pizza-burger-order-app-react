/* eslint-disable react/prop-types */

// import CompleteOrder from "../completeOrder/CompleteOrder";

const OrderItem = ({ menuItems, addItem }) => {
  //   console.log("id", id);
  //   console.log("item", item);
  //   // it already shows me the right id of the right item. I need to implement the functionality like, if id === item.id then item.price += item.price. snd save it to the new state

  //   // create a copy of the current item
  //   const updatedItem = { ...item };
  //   const newPrice = updatedItem.price + item.price;
  //   console.log("newPrice", newPrice);

  //   const updatedOrder = {
  //     ...item,
  //     price: newPrice,
  //     quantity: 1,
  //   };

  //   setOrderItemAmount(updatedOrder);

  //   const updatedPrice = (item.price += menuItems.find(
  //     (menuItem) => menuItem.id === item.id
  //   ).price);

  //   console.log("updatedItem", updatedItem);
  //   console.log("orderItemAmount", orderItemAmout);

  //   setOrderItemAmount([updatedOrder]);

  //   console.log("updatedOrder", updatedOrder);
  //   setOrderItemAmount(updatedOrder);
  //   // setOrderItemAmount(newOrder);

  //   console.log("newOrder", newOrder);
  //   console.log(newOrder);
  //   console.log("orderItemAmount", orderItemAmout);
  // };

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
      {/* // if any items from orderContainer are added - display completeOrderContainer */}
    </>
  );
};

export default OrderItem;
