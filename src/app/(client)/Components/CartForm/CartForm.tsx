"use client";

import { Controller, useForm } from "react-hook-form";
import styles from "./cartForm.module.css";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAddress, setAddress } from "@/redux/slices/addressSlice";
import Address from "../Address/Address";

type FormValues = {
  email: string;
  firstName: string;
  secondName: string;
  address: string;
  Hausnummer: string;
  postalCode: string;
  city: string;
  phoneNumber: number;
};

const CartForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const dispatch = useDispatch();

  const handleSubmitForm = (e: any) => {
    dispatch(setAddress(e));
  };

  const addressData = useSelector(selectAddress);

  return (
    <div>
      {!addressData ? (
        <form className={styles.form}>
          <h2 className="secondTitle">Contact</h2>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address.",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{ width: "100%" }}
                helperText={errors.email && errors.email.message}
              />
            )}
          />
          <h2 className="secondTitle">Delivery address</h2>
          <div className={styles.section}>
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: "First name is required",
                minLength: {
                  value: 3,
                  message: "First name must be at least 3 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.firstName}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  helperText={errors.firstName && errors.firstName.message}
                />
              )}
            />
            <Controller
              control={control}
              name="secondName"
              rules={{
                required: "Second name is required",
                minLength: {
                  value: 3,
                  message: "Second name must be at least 3 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.secondName}
                  id="outlined-basic"
                  label="Second Name"
                  variant="outlined"
                  style={{ width: "100%" }}
                  helperText={errors.secondName && errors.secondName.message}
                />
              )}
            />
          </div>
          <Controller
            control={control}
            name="city"
            rules={{
              required: "City is required",
              minLength: {
                value: 3,
                message: "City must be at least 3 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.city}
                id="outlined-basic"
                label="City"
                variant="outlined"
                style={{ width: "100%" }}
                helperText={errors.city && errors.city.message}
              />
            )}
          />
          <div className={styles.section}>
            <Controller
              control={control}
              name="Hausnummer"
              rules={{
                required: "Hausnummer is required",
                minLength: {
                  value: 3,
                  message: "Hausnummer must be at least 3 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.Hausnummer}
                  id="outlined-basic"
                  label="Hausnummer"
                  variant="outlined"
                  style={{ width: "100%" }}
                  helperText={errors.Hausnummer && errors.Hausnummer.message}
                />
              )}
            />
            <Controller
              control={control}
              name="postalCode"
              rules={{
                required: "Code postal is required",
                minLength: {
                  value: 3,
                  message: "Code postal must be at least 3 characters",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.postalCode}
                  id="outlined-basic"
                  label="Code postal"
                  variant="outlined"
                  style={{ width: "100%" }}
                  helperText={errors.postalCode && errors.postalCode.message}
                />
              )}
            />
          </div>
          <button
            onClick={handleSubmit(handleSubmitForm)}
            className="pinkyButton"
          >
            Checkout
          </button>
        </form>
      ) : (
        <Address />
      )}
    </div>
  );
};

export default CartForm;
