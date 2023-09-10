"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  useGridApiRef,
} from "@mui/x-data-grid";
import { Dialog, DialogContent } from "@mui/material";
import styles from "./orderTable.module.css";
import { deleteChild } from "@/utils/firebaseActions";
import { toast } from "react-toastify";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Id",
    width: 200,
  },

  {
    field: "costumer",
    headerName: "From",
    width: 200,
  },
  // {
  //   field: "quantity",
  //   headerName: "Quantity",
  //   width: 150,
  //   editable: true,
  // },
  {
    field: "address",
    headerName: "Address",
    width: 250,
  },
  //   Modify this one later and make it functioning
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  {
    field: "amount",
    headerName: "Amount",
    type: "string",
    width: 110,
  },
  {
    field: "date",
    headerName: "Date",
    type: "string",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    product: "Snow",
    quantity: "58",
    adresse: "Tlemcen, 13086",
    amount: "$265",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 2,
    product: "Lannister",
    quantity: "89",
    adresse: "Tlemcen, 13086",
    amount: "$265",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 3,
    product: "Lannister",
    quantity: "87",
    adresse: "Tlemcen, 13086",
    amount: "$265",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 4,
    product: "Stark",
    quantity: "25",
    adresse: "Tlemcen, 13086",
    amount: "$265",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 5,
    product: "Targaryen",
    quantity: "35",
    adresse: "Tlemcen, 13086",
    amount: "265€",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 6,
    product: "Melisandre",
    quantity: "54",
    adresse: "Tlemcen, 13086",
    amount: "265€",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 7,
    product: "Clifford",
    quantity: "25",
    adresse: "Tlemcen, 13086",
    amount: "265€",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 8,
    product: "Frances",
    quantity: "38",
    adresse: "Tlemcen, 13086",
    amount: "265€",
    date: "03/02/2023",
    status: "Done",
  },
  {
    id: 9,
    product: "Roxie",
    quantity: "88",
    adresse: "Tlemcen, 13086",
    amount: "265€",
    date: "03/02/2023",
    status: "Done",
  },
];

export const DataGridDemo = ({ orders }: any) => {
  const [ordersData, setOrdersData] = React.useState<any[]>([]);

  React.useEffect(() => {
    setOrdersData(
      orders.map((prod: any) => ({
        // ...address,
        id: prod.id,

        products: prod.products.map(
          (prd: any) => ` ${prd.name} Qty: ${prd.quantity} Price: ${prd.price}`
        ),
        address: `${prod.addressData.city} ${prod.addressData.postalCode} ${prod.addressData.Hausnummer}`,
        email: `${prod.addressData.email}`,
        status: "Pending",
        amount: prod.products.length,
        costumer: `${prod.addressData.firstName} ${prod.addressData.secondName}`,
      }))
    );
  }, []);

  const [openPopup, setOpenPopup] = React.useState(false);
  const [selectedRowData, setSelectedRowData] = React.useState<any>(null);

  const handleRowClick = (params: any) => {
    setSelectedRowData(params.row);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setShipped(false);
  };

  // Set shipping status

  const [shipped, setShipped] = React.useState(false);

  const settingShippedStatus = () => {
    setShipped(!shipped);
    setYesOrNo(false);
  };

  const [yesOrNo, setYesOrNo] = React.useState(false);

  const apiRef = useGridApiRef();

  const doneFunction = () => {
    setYesOrNo(true);
  };

  const cancelFunction = () => {
    setYesOrNo(false);
  };

  const deleteOrder = async (id: string) => {
    try {
      await deleteChild("orders", id); // Delete the order from Firestore
      setOrdersData(ordersData.map((row: any) => ({ ...row, ...orders })));
      setOrdersData(ordersData.filter((row: any) => row.id !== id));
      toast.success("Congratulations for finishing the order!");
      setShipped(false);
      handleClosePopup();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <Box
      sx={{
        height: 400,
        maxWidth: "100vw",
        marginTop: "2rem",
        overflowY: "auto",
      }}
    >
      <DataGrid
        getRowId={(row: any) => crypto.randomUUID()}
        rows={ordersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        onRowClick={handleRowClick}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
      <Dialog
        style={{ overflow: "unset!important" }}
        maxWidth="lg"
        open={openPopup}
        onClose={handleClosePopup}
      >
        <DialogContent>
          {selectedRowData && (
            <div className={styles.popupContainer}>
              <div className={styles.left}>
                <img
                  className={styles.img}
                  src={selectedRowData.primary}
                  alt=""
                />
              </div>
              <div className={styles.right}>
                <div className={styles.header}>
                  <h1>Order Details</h1>
                  <p className={styles.status}>
                    {shipped ? "Shipped" : "Pending"}
                    <span
                      className={shipped ? styles.shipped : styles.pending}
                    />
                  </p>
                </div>
                <div className="checkbox">
                  <p>Shipped?</p>
                  <label className={styles.planeSwitch}>
                    <input type="checkbox" onClick={settingShippedStatus} />
                    <div>
                      <div>
                        <svg viewBox="0 0 13 13">
                          <path
                            d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <span className={styles.streetMiddle} />
                      <span className={styles.cloud} />
                      <span className={styles.cloud + " " + styles.two} />
                    </div>
                  </label>
                </div>
                {yesOrNo ? (
                  "Please be aware that after clicking done the order will be deleted from the database forever and an email will be sent to the client that the order is being shipped."
                ) : (
                  <div className={styles.informations}>
                    <p>
                      Products:{" "}
                      <ul>
                        {selectedRowData.products.map((prd: any) => (
                          <li key={self.crypto.randomUUID()}>{prd}</li>
                        ))}
                      </ul>
                    </p>
                    <p>
                      Costumer Name: <span>{selectedRowData.product}</span>
                    </p>
                    <p>
                      Address: <span>{selectedRowData.product}</span>
                    </p>
                    <p>
                      Amount: <span>{selectedRowData.product}</span>
                    </p>
                    <p>
                      Quantity: <span>{selectedRowData.product}</span>
                    </p>
                  </div>
                )}

                <div className={styles.buttonContainer}>
                  {shipped && (
                    <>
                      {!yesOrNo ? (
                        <button onClick={doneFunction} className={styles.done}>
                          Done <img src="/done.svg" alt="" />
                        </button>
                      ) : (
                        <div className={styles.doneOrCancel}>
                          <button
                            onClick={cancelFunction}
                            className={styles.cancel}
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => deleteOrder(selectedRowData.id)}
                            className={styles.doneSecondButton}
                          >
                            Agree
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <button onClick={handleClosePopup} className={styles.close}>
                <img src="/close.svg" alt="" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DataGridDemo;
