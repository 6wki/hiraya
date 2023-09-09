// EditAddressForm.tsx
import { setAddress } from "@/redux/slices/addressSlice";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styles from "./editAddressForm.module.css";

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

const EditAddressForm = ({ initialAddressData, onCancel }) => {
  const [formData, setFormData] = useState(initialAddressData);
  const dispatch = useDispatch();

  const {
    handleSubmit: handleValidationSubmittion,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const handleSubmit = (data) => {
    dispatch(setAddress(data));
    onCancel(); // Close the edit form after submission
  };

  const handleCancel = () => {
    onCancel(); // Close the edit form without saving changes
  };

  return (
    <>
      <h2>Edit Address</h2>
      <form
        className={styles.form}
        onSubmit={handleValidationSubmittion(handleSubmit)}
      >
        {/* Form fields for editing the address */}
        <h2 className="secondTitle">Contact</h2>
        <Controller
          control={control}
          name="email"
          defaultValue={formData.email}
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
        {/* Personal Informations */}
        <div className={styles.section}>
          <Controller
            control={control}
            defaultValue={formData.firstName}
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
            defaultValue={formData.secondName}
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
          defaultValue={formData.city}
          rules={{
            required: "City is required",
            minLength: {
              value: 2,
              message: "City must be at least 2 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.city}
              id="outlined-basic"
              label="Second Name"
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
            defaultValue={formData.Hausnummer}
            rules={{
              required: "Hausnummer is required",
              minLength: {
                value: 1,
                message: "Hausnummer must be at least 1 character",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.Hausnummer}
                id="outlined-basic"
                label="Second Name"
                variant="outlined"
                style={{ width: "100%" }}
                helperText={errors.Hausnummer && errors.Hausnummer.message}
              />
            )}
          />
          <Controller
            control={control}
            name="postalCode"
            defaultValue={formData.postalCode}
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

        {/* Add other address fields here */}
        <button className="pinkyButton" type="submit">
          Save
        </button>
        <button className="pinkyButton" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditAddressForm;
