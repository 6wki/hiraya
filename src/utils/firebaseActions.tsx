import { db } from "@/utils/firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  addDoc,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import slugify from "slugify";

interface data {
  name: string;
  desc: string;
  price: string;
  category: string;
}

interface returnedData {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: string;
  primary: string;
  secondary: string[];
}

interface ProductData {
  name: string;
  desc: string;
  price: string;
  category: string;
}

interface Address {
  email: string;
  firstName: string;
  lastName: string;
  postalCode: string;
  city: string;
  houseNumber: string;
}

interface orderData {
  addressData: Address;
}

export const getProducts = async () => {
  try {
    let q = query(
      collection(db, "product")
      // orderBy("time", "desc")
    );
    let demands = await getDocs(q);
    const data = (await demands.docs.map((doc) => ({
      name: doc.data().name,
      desc: doc.data().desc,
      price: doc.data().price,
      category: doc.data().category,
      id: doc.id,
    }))) as returnedData[];
    return data;
  } catch (error) {
    console.error("Error getting children from Firestore:", error);
    // throw new Error("Error getting children from Firestore");
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<data[]> => {
  try {
    let q = query(collection(db, "product"), where("category", "==", category));
    let demands = await getDocs(q);
    const data = demands.docs.map((doc) => ({
      name: doc.data().name,
      desc: doc.data().desc,
      price: doc.data().price,
      category: doc.data().category,
      id: doc.id,
      primary: doc.data().primaryImg,
    })) as returnedData[];
    return data;
  } catch (error) {
    console.error("Error getting children from Firestore:", error);
    throw new Error("Error getting children from Firestore");
  }
};

export const getProductsBySlug = async (slug: string): Promise<data[]> => {
  try {
    let q = query(collection(db, "product"), where("slug", "==", slug));
    let demands = await getDocs(q);
    const data = demands.docs.map((doc) => ({
      name: doc.data().name,
      desc: doc.data().desc,
      price: doc.data().price,
      category: doc.data().category,
      id: doc.id,
      primary: doc.data().primaryImg,
    })) as returnedData[];
    return data;
  } catch (error) {
    console.error("Error getting children from Firestore:", error);
    throw new Error("Error getting children from Firestore");
  }
};

export const getProductByCategoryAndSlug = async (
  category: string,
  name: string
): Promise<returnedData | null> => {
  try {
    const url = name.replace(/-/g, " ");

    let q = query(
      collection(db, "product"),
      where("category", "==", category),
      where("name", "==", url) // Add this condition to filter by slug
    );
    let demands = await getDocs(q);

    if (demands.empty) {
      return null; // No matching product found
    }

    // Assuming that there's only one product with the same category and slug
    const doc = demands.docs[0];
    const productData: returnedData = {
      name: doc.data().name,
      desc: doc.data().desc,
      price: doc.data().price,
      category: doc.data().category,
      id: doc.id,
      primary: doc.data().primaryImg,
      secondary: doc.data().secondary,
    };

    return productData;
  } catch (error) {
    console.error("Error getting product from Firestore:", error);
    throw new Error("Error getting product from Firestore");
  }
};

export const getProductsNames = async (): Promise<string[]> => {
  try {
    let q = query(collection(db, "product"));
    let demands = await getDocs(q);
    const data = demands.docs.map((doc) => {
      return doc.data().name;
    }) as string[];
    return data;
  } catch (error) {
    console.error("Error getting children from Firestore:", error);
    throw new Error("Error getting children from Firestore");
  }
};

export const addProduct = async (
  collectionName: string,
  productData: ProductData
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), productData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding product to Firestore:", error);
    throw new Error("Error adding product to Firestore");
  }
};

export const addOrder = async (
  collectionName: string,
  orderData: orderData
): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, collectionName), orderData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding an order to Firestore:", error);
    throw new Error("Error adding an order to Firestore");
  }
};

export const getOrders = async () => {
  try {
    let q = query(
      collection(db, "orders")
      // orderBy("time", "desc")
    );
    let demands = await getDocs(q);
    const data = demands.docs.map((doc) => ({
      id: doc.id,
      addressData: doc.data().addressData,
      products: doc.data().products,
    })) as any;
    return data;
  } catch (error) {
    console.error("Error getting children from Firestore:", error);
    // throw new Error("Error getting children from Firestore");
  }
};

// Delete an existing child
export const deleteChild = async (
  collection: string,
  id: string
): Promise<void> => {
  try {
    await deleteDoc(doc(db, collection, id));
  } catch (error) {
    console.error("Error deleting child from Firestore:", error);
    throw new Error("Error deleting child from Firestore");
  }
};
