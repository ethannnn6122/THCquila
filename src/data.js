// Constants for Image Paths
const BASE = import.meta.env.BASE_URL;
const PRODPATHS = {
   Prod1: import.meta.env.VITE_PRODUCT1_PATH,
   Prod2: import.meta.env.VITE_PRODUCT2_PATH,
   Prod3: import.meta.env.VITE_PRODUCT3_PATH,
   Prod4: import.meta.env.VITE_PRODUCT4_PATH,
   Prod5: import.meta.env.VITE_PRODUCT5_PATH,
   Prod6: import.meta.env.VITE_PRODUCT6_PATH,
   Prod7: import.meta.env.VITE_PRODUCT7_PATH,
   Prod8: import.meta.env.VITE_PRODUCT8_PATH
}

// Define standard views for this product (order matters for the gallery)
const shirtViews = ["collage", "front", "left", "back", "right"];
const glassViews = ["empty", "full", "hand", "quarter"];
const hatViews = ["front", "leftfront", "rightfront", "back"];
const hoodieViews = shirtViews.slice(1)

// --- HELPER FUNCTION ---
// Automatically builds an array of image URLs based on naming scheme
// Scheme: BASE + FOLDER + PRODUCT + COLOR + View + ".png"
const generateImages = (folder, productSlug, color, views) => {
    const colorSlug = color.toLowerCase().replace(/\s+/g, '-');
    return views.map(view => {
        return `${BASE}${folder}product-${productSlug}-${colorSlug}-${view}.png`;
    });
};

export const storeProducts = [
    {
      id: 1,
      title: "THCquila Signature Tee",
      // Default image (Main view of the first color)
      img: `${BASE}${PRODPATHS.Prod1}product-tshirt-black-collage.png`,
      price: 39.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green", "Grey", "Navy"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod1, "tshirt", "Black", shirtViews),
          "Green": generateImages(PRODPATHS.Prod1, "tshirt", "Green", shirtViews),
          "Grey": generateImages(PRODPATHS.Prod1, "tshirt", "Grey", shirtViews),
          "Navy": generateImages(PRODPATHS.Prod1, "tshirt", "Navy", shirtViews)
      }
    },
    {
      id: 2,
      title: "THCquila Logo Tee",
      img: `${BASE}${PRODPATHS.Prod2}product-tshirt-black-collage.png`,
      price: 39.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green", "Grey", "Navy"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod2, "tshirt", "Black", shirtViews),
          "Green": generateImages(PRODPATHS.Prod2, "tshirt", "Green", shirtViews),
          "Grey": generateImages(PRODPATHS.Prod2, "tshirt", "Grey", shirtViews),
          "Navy": generateImages(PRODPATHS.Prod2, "tshirt", "Navy", shirtViews)
      }
    },
    {
      id: 3,
      title: "THCquila TBD Tee",
      img: `${BASE}${PRODPATHS.Prod1}product-tshirt-green-collage.png`,
      price: 39.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green", "Grey", "Navy"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod1, "tshirt", "Black", shirtViews),
          "Green": generateImages(PRODPATHS.Prod1, "tshirt", "Green", shirtViews),
          "Grey": generateImages(PRODPATHS.Prod1, "tshirt", "Grey", shirtViews),
          "Navy": generateImages(PRODPATHS.Prod1, "tshirt", "Navy", shirtViews)
      }
    },
    {
      id: 4,
      title: "THCquila TBD Tee",
      img: `${BASE}${PRODPATHS.Prod1}product-tshirt-grey-collage.png`,
      price: 39.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green", "Grey", "Navy"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod1, "tshirt", "Black", shirtViews),
          "Green": generateImages(PRODPATHS.Prod1, "tshirt", "Green", shirtViews),
          "Grey": generateImages(PRODPATHS.Prod1, "tshirt", "Grey", shirtViews),
          "Navy": generateImages(PRODPATHS.Prod1, "tshirt", "Navy", shirtViews)
      }
    },
    {
      id: 5,
      title: "THCquila TBD Tee",
      img: `${BASE}${PRODPATHS.Prod1}product-tshirt-navy-collage.png`,
      price: 39.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Green", "Grey", "Navy"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod1, "tshirt", "Black", shirtViews),
          "Green": generateImages(PRODPATHS.Prod1, "tshirt", "Green", shirtViews),
          "Grey": generateImages(PRODPATHS.Prod1, "tshirt", "Grey", shirtViews),
          "Navy": generateImages(PRODPATHS.Prod1, "tshirt", "Navy", shirtViews)
      }
    },
    {
      id: 6,
      title: "THCquila Glass",
      // Default image (Main view of the first color)
      img: `${BASE}${PRODPATHS.Prod6}product-glass-front-empty.png`,
      price: 15.99,
      company: "THCquila",
      info: "TBD",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes:[],
      colors: [],
      images: generateImages(PRODPATHS.Prod6, "glass", "front", glassViews),
    },
    {
      id: 7,
      title: "THCquila Hoodie",
      img: `${BASE}${PRODPATHS.Prod7}product-hoodie-black-front.png`,
      price: 49.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
      colors: ["Black", "Navy", "Grey", "White"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod7, "hoodie", "Black", hoodieViews),
          "Navy": generateImages(PRODPATHS.Prod7, "hoodie", "Navy", hoodieViews),
          "Grey": generateImages(PRODPATHS.Prod7, "hoodie", "Grey", hoodieViews),
          "White": generateImages(PRODPATHS.Prod7, "hoodie", "White", hoodieViews)
      }
    },
    {
      id: 8,
      title: "THCquila Hat",
      img: `${BASE}${PRODPATHS.Prod8}product-hat-white-front.png`,
      price: 25.99,
      company: "THCquila",
      info: "The staple of the collection. This premium tee features our signature agave-infused branding. Made from 100% combed ring-spun cotton for a soft, vintage feel that fits perfectly from day one.",
      inCart: false,
      count: 0,
      total: 0,
      // AVAILABLE OPTIONS
      sizes: ["One Size Fits All"],
      colors: ["Black", "Spruce", "White", "Navy"],
      // DYNAMIC IMAGE MAPPING
      imageMap: {
          "Black": generateImages(PRODPATHS.Prod8, "hat", "Black", hatViews),
          "Spruce": generateImages(PRODPATHS.Prod8, "hat", "Spruce", hatViews),
          "White": generateImages(PRODPATHS.Prod8, "hat", "White", hatViews),
          "Navy": generateImages(PRODPATHS.Prod8, "hat", "Navy", hatViews)
      }
    }
];


export const detailProduct = storeProducts[0];