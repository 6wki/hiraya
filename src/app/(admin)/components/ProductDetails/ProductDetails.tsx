"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import styles from "./ProductDetails.module.css";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { addProduct, getProductsNames } from "@/utils/firebaseActions";
import { useQuery } from "@tanstack/react-query";
import { uploadToCloudinary } from "@/utils/cloudinaryUpload";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuillEditor from "@/app/lib/QuillEditor";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

type FormValues = {
  name: string;
  price: string;
  category: string;
  desc: string;
  image: string;
};

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  }
);

const ProductDetails = () => {
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
    register,
    reset,
  } = useForm<FormValues>();

  const currencies = [
    {
      value: "khimar",
      label: "Khimar",
    },
    {
      value: "abaya",
      label: "Abaya",
    },
    {
      value: "jilbab",
      label: "Jilbab",
    },
  ];

  // Fetching Data

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productNames"],
    queryFn: getProductsNames,
    initialData: [],
  });

  if (isLoading) {
    console.log("Loading data");
  }

  if (isError) {
    console.log("There was an error loading data");
  }

  if (data.length > 0) {
    // console.log(data);
  }

  // upload image

  const [primaryImage, setPrimaryImage] = React.useState<File | null>(null);
  const [secondaryImage, setSecondaryImage] = React.useState<File[]>([]);
  const [imageUrls, setImageUrls] = React.useState<string[]>([]);

  const handleImageUpload = async () => {
    const uploadedUrls: string[] = [];

    // Upload primary image
    if (primaryImage) {
      const primaryUrl = await uploadToCloudinary(primaryImage);
      uploadedUrls.push(primaryUrl);
    }

    // Upload secondary images and push their URLs to the array
    const secondaryUrls = await Promise.all(
      secondaryImage.map(uploadToCloudinary)
    );
    uploadedUrls.push(...secondaryUrls);

    return uploadedUrls;
  };

  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

  // PrimaryImage

  function handleImageUploadPrimaryImage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && allowedTypes.includes(uploadedFile.type)) {
      setPrimaryImage(uploadedFile);
    } else {
      console.log("Invalid file type. Allowed types: JPEG, JPG, PNG.");
    }
  }

  function handleImageDeletePrimaryImage() {
    setPrimaryImage(null);
  }

  // SecondaryImage

  const [imageError, setImageError] = React.useState<String>("");
  const maxImages = 4;

  function handleImageUploadSecondaryImage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setImageError("");
    const uploadedFile = event.target.files?.[0];
    if (
      uploadedFile &&
      allowedTypes.includes(uploadedFile.type) &&
      secondaryImage.length < maxImages
    ) {
      setSecondaryImage([...secondaryImage, uploadedFile]);
    } else {
      console.log("Invalid file type or maximum images reached.");
    }
  }

  function handleImageDeleteSecondaryImage(index: number) {
    const updatedImages = secondaryImage.filter((_, i) => i !== index);
    setSecondaryImage(updatedImages);
  }
  // Submit the form

  const [loading, setLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [desc, setDesc] = React.useState("");

  const subForm = async (data: any, e: any) => {
    reset({
      category: "",
      name: "",
      price: "",
    });
    if (!primaryImage) {
      alert("Primary image is required");
      return;
    }

    // Upload images and get URLs
    try {
      setLoading(true); // Start loading
      const uploadedUrls = await handleImageUpload();

      // Filter out any undefined or empty values from uploadedUrls
      const filteredUrls = uploadedUrls.filter((url) => url);

      const nameLowerCased = data.name.toLowerCase();
      const formDataWithImages = {
        // ...data,
        name: nameLowerCased,
        price: data.price,
        desc: desc,
        category: data.category,
        primaryImg: uploadedUrls[0] || null,
        secondary: filteredUrls.slice(1, 5),
      };
      // Save product data to Firebase collection
      await addProduct("product", formDataWithImages);
      setIsSuccess(true);
      toast.success("Product added successfully!", {
        onClose: () => setIsSuccess(false),
      });

      // Clear image state and inputs values
      setPrimaryImage(null);
      setSecondaryImage([]);
      reset({
        category: "",
        name: "",
        price: "",
      });

      // Clear Quill Editor

      setDesc("");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleEditorChange = (value: string) => {
    // Do something with the updated value
    setDesc(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      onSubmit={handleSubmit(subForm)}
      autoComplete="off"
    >
      {/* Product Name */}
      <Controller
        control={control}
        name="name"
        rules={{
          required: "Product name is required",
          minLength: {
            value: 3,
            message: "Product name must be at least 3 characters",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.name}
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            style={{ width: "100%" }}
            helperText={errors.name && errors.name.message}
          />
        )}
      />

      {/* Product Price */}
      <Controller
        control={control}
        name="price"
        rules={{
          required: "Product price is required",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.price}
            label="Price"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumericFormatCustom as any,
            }}
            variant="outlined"
            helperText={errors.price && errors.price.message}
            style={{ width: "100%" }}
          />
        )}
      />
      {/* Product Category */}
      <Controller
        control={control}
        name="category"
        rules={{
          required: "Select a category barak allah fiki",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            id="outlined-select-currency"
            select
            label="Category"
            error={!!errors.category}
            helperText={errors.category && errors.category.message}
            style={{ width: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      {/* Product Description */}
      {/* <Controller
        control={control}
        name="description"
        rules={{
          required: "Product description is required",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors.description}
            id="outlined-basic"
            label="Product Description"
            variant="outlined"
            helperText={errors.description && errors.description.message}
            style={{ width: "100%" }}
          />
        )}
      /> */}
      <QuillEditor onChange={handleEditorChange} value={desc} />
      {/* Product Images */}
      <div className={styles.upload}>
        <div className="primary">
          <p>Primary</p>
          <div className="products-images">
            <div
              className={primaryImage ? styles.uploadedArea : styles.uploadArea}
            >
              {primaryImage ? (
                <>
                  <img
                    className={styles.image}
                    src={URL.createObjectURL(primaryImage)}
                    alt="Uploaded"
                  />
                  <div
                    className={styles.deleteButton}
                    onClick={handleImageDeletePrimaryImage}
                  >
                    {/* <Trash2 /> */}
                    <img src="/trash.svg" alt="" />
                  </div>
                </>
              ) : (
                <>
                  {/* <UploadIcon /> */}
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleImageUploadPrimaryImage}
                  />
                  <p>Add Images</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.secondary}>
          <p>Secondary</p>
          <div className={styles.imageContainer}>
            {secondaryImage.map((image, index) => (
              <div className={styles.uploadedArea} key={index}>
                <img
                  className={styles.image}
                  src={URL.createObjectURL(image)}
                  alt={`Uploaded ${index}`}
                />
                <div
                  className={styles.deleteButton}
                  onClick={() => handleImageDeleteSecondaryImage(index)}
                >
                  {/* <Trash2 /> */}
                  <img src="/trash.svg" alt="" />
                </div>
              </div>
            ))}
            {secondaryImage.length < maxImages && (
              <div className={styles.uploadArea}>
                {/* <UploadIcon /> */}
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleImageUploadSecondaryImage}
                />
                <p>Add Images</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button className={`pinkyButton ${styles.button}`} disabled={loading}>
        {loading ? <CircularProgress size={20} /> : "Add Product"}
      </button>
    </Box>
  );
};

export default ProductDetails;
