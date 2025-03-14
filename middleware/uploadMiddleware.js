import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../libs/cloudinary.js";

// Function to create dynamic storage options
const createStorage = (folderName) =>
  new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: folderName, // Dynamic folder selection
      allowed_formats: ["jpg", "png", "jpeg", "pdf"],
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    },
  });

// ✅ Modify multer to handle multiple files
const uploadProductImages = multer({ storage: createStorage("product-images") });
const uploadAffiliationCertificate = multer({ storage: createStorage("school-certificates") });

export { uploadProductImages, uploadAffiliationCertificate }; // Export the updated upload function
