import OrderItem from "../orderItem/orderItem";
import CompleteOrder from "../completeOrder/CompleteOrder";
import { useState } from "react";
import PaymentDetails from "../paymentDetails/PaymentDetails";

const menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    id: 0,
    price: 14,
    emoji: "🍕",
    amount: 0,
  },
  {
    name: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    emoji: "🍔",
    id: 1,
    amount: 0,
  },
  {
    name: "Beer",
    ingredients: ["grain, hops, yeast, water"],
    price: 12,
    emoji: "🍺",
    id: 2,
    amount: 0,
  },
];

const OrderContainer = () => {
  const [menuItems, setMenuItems] = useState(menuArray);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const addItem = (id) => {
    const newItem = menuItems.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    setMenuItems(newItem);
  };

  const resetAmountForItem = (id) => {
    const deletedItem = menuItems.map((item) =>
      item.id === id ? { ...item, amount: 0 } : item
    );
    setMenuItems(deletedItem);
  };

  const isOrder = menuItems.some((item) => item.amount > 0);

  return (
    <main>
      <OrderItem menuItems={menuItems} addItem={addItem} />
      {isOrder && !isPaid && (
        <CompleteOrder
          menuItems={menuItems}
          resetAmountForItem={resetAmountForItem}
          isVisibleModal={isVisibleModal}
          setIsVisibleModal={setIsVisibleModal}
        />
      )}

      {isVisibleModal && (
        <PaymentDetails isPaid={isPaid} setIsPaid={setIsPaid} />
      )}
    </main>
  );
};

export default OrderContainer;
