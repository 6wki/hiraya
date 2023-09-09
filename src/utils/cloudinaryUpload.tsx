// cloudinary-utils.ts
export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudinaryUploadUrl =
    "https://api.cloudinary.com/v1_1/djpi7lxqj/upload"; // Replace with your actual Cloudinary upload URL
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "hirayaPicturesUploading"); // Replace with your actual Cloudinary upload preset

  try {
    const response = await fetch(cloudinaryUploadUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      return data.secure_url; // Return the uploaded image URL
    } else {
      throw new Error("Failed to upload image to Cloudinary");
    }
  } catch (error: any) {
    throw new Error("Error uploading image to Cloudinary: " + error.message);
  }
}
