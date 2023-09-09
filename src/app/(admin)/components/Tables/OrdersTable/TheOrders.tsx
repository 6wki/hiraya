import { getOrders } from "@/utils/firebaseActions";

const TheOrders = async () => {
  const orders = await getOrders();
  return orders;
};

export default TheOrders;
