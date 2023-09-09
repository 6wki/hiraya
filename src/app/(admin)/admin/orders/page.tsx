import { getOrders } from "@/utils/firebaseActions";
import DataGridDemo from "../../components/Tables/OrdersTable/OrdersTable";

const page = async () => {
  const orders = await getOrders();

  return (
    <div className="containerAdjust topSpace">
      <div className="containerSettingsAdmin">
        <h1 className="titleAdmin">Orders</h1>
        <DataGridDemo orders={orders} />
      </div>
    </div>
  );
};

export default page;
