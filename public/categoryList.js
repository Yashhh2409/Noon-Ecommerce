const categoriesList = [
    {
      title: "Electronics",
      subcategories: [
        { name: "Mobiles", subnames: ["iPhone", "Vivo", "Oppo", "Samsung"] },
        { name: "Laptops", subnames: ["HP", "Dell", "Asus", "Lenovo"] },
        { name: "Cameras", subnames: ["Nikon", "Sony", "Samsung", "Canon"] },
        { name: "Tablets", subnames: ["OnePlus Pad 2", "Huawei", "Nokia", "Apple"] },
      ],
      brands: [
        { Logo: "/brandImg/Samsung-logo.png", name: "Samsung" },
        { Logo: "/brandImg/Sony-logo.png", name: "Sony" },
        { Logo: "/brandImg/Dell-logo.png", name: "Dell" },
      ],
      promoBanner: "/brandImg/Electronics-Banner.png",
    },
    {
      title: "Men's Fashion",
      subcategories: [
        { name: "Clothing", subnames: ["T-Shirts", "Jeans", "Jackets", "Suits"] },
        { name: "Footwear", subnames: ["Sneakers", "Boots", "Loafers", "Sandals"] },
        { name: "Accessories", subnames: ["Watches", "Belts", "Sunglasses", "Caps"] },
      ],
      brands: [
        { Logo: "nike_logo.png", name: "Nike" },
        { Logo: "adidas_logo.png", name: "Adidas" },
        { Logo: "puma_logo.png", name: "Puma" },
        { Logo: "levis_logo.png", name: "Levi's" },
      ],
      promoBanner: "mens_fashion_banner.png",
    },
    {
      title: "Women's Fashion",
      subcategories: [
        { name: "Clothing", subnames: ["Dresses", "Tops", "Sarees", "Jeans"] },
        { name: "Footwear", subnames: ["Heels", "Flats", "Boots", "Sandals"] },
        { name: "Jewelry", subnames: ["Necklaces", "Earrings", "Bracelets", "Rings"] },
      ],
      brands: [
        { Logo: "zara_logo.png", name: "Zara" },
        { Logo: "gucci_logo.png", name: "Gucci" },
        { Logo: "prada_logo.png", name: "Prada" },
        { Logo: "h&m_logo.png", name: "H&M" },
      ],
      promoBanner: "womens_fashion_banner.png",
    },
    {
      title: "Kids' Fashion",
      subcategories: [
        { name: "Clothing", subnames: ["T-Shirts", "Shorts", "Dresses", "Pajamas"] },
        { name: "Shoes", subnames: ["Sneakers", "Sandals", "Boots", "Slip-ons"] },
        { name: "Toys", subnames: ["Educational", "Soft Toys", "Outdoor Toys", "Board Games"] },
      ],
      brands: [
        { Logo: "gap_logo.png", name: "GAP" },
        { Logo: "nike_logo.png", name: "Nike" },
        { Logo: "carters_logo.png", name: "Carter's" },
        { Logo: "h&m_logo.png", name: "H&M" },
      ],
      promoBanner: "kids_fashion_banner.png",
    },
    {
      title: "Home & Kitchen",
      subcategories: [
        { name: "Furniture", subnames: ["Sofas", "Beds", "Chairs", "Tables"] },
        { name: "Home Decor", subnames: ["Wall Art", "Lamps", "Curtains", "Carpets"] },
        { name: "Kitchen Appliances", subnames: ["Microwaves", "Blenders", "Coffee Makers", "Toasters"] },
      ],
      brands: [
        { Logo: "ikea_logo.png", name: "IKEA" },
        { Logo: "philips_logo.png", name: "Philips" },
        { Logo: "prestige_logo.png", name: "Prestige" },
        { Logo: "bosch_logo.png", name: "Bosch" },
      ],
      promoBanner: "home_kitchen_banner.png",
    },
    {
      title: "Beauty & Fragrance",
      subcategories: [
        { name: "Makeup", subnames: ["Lipsticks", "Foundations", "Mascaras", "Eyeliners"] },
        { name: "Skincare", subnames: ["Moisturizers", "Serums", "Face Masks", "Sunscreens"] },
        { name: "Fragrances", subnames: ["Perfumes", "Body Mists", "Deodorants", "Colognes"] },
      ],
      brands: [
        { Logo: "loreal_logo.png", name: "L'Oreal" },
        { Logo: "maybelline_logo.png", name: "Maybelline" },
        { Logo: "nivea_logo.png", name: "Nivea" },
        { Logo: "dior_logo.png", name: "Dior" },
      ],
      promoBanner: "beauty_fragrance_banner.png",
    },
    {
      title: "Sports & Outdoors",
      subcategories: [
        { name: "Sportswear", subnames: ["T-Shirts", "Tracksuits", "Jackets", "Shorts"] },
        { name: "Shoes", subnames: ["Running", "Training", "Football", "Hiking"] },
        { name: "Equipment", subnames: ["Dumbbells", "Treadmills", "Yoga Mats", "Resistance Bands"] },
      ],
      brands: [
        { Logo: "adidas_logo.png", name: "Adidas" },
        { Logo: "nike_logo.png", name: "Nike" },
        { Logo: "puma_logo.png", name: "Puma" },
        { Logo: "reebok_logo.png", name: "Reebok" },
      ],
      promoBanner: "sports_outdoors_banner.png",
    },
    {
      title: "Toys",
      subcategories: [
        { name: "Educational", subnames: ["Building Blocks", "Science Kits", "Puzzle Games"] },
        { name: "Soft Toys", subnames: ["Teddy Bears", "Dolls", "Stuffed Animals"] },
        { name: "Outdoor Toys", subnames: ["Bicycles", "Skateboards", "Scooters"] },
      ],
      brands: [
        { Logo: "lego_logo.png", name: "LEGO" },
        { Logo: "hasbro_logo.png", name: "Hasbro" },
        { Logo: "fisherprice_logo.png", name: "Fisher-Price" },
        { Logo: "mattel_logo.png", name: "Mattel" },
      ],
      promoBanner: "toys_banner.png",
    },
    {
      title: "Automotive",
      subcategories: [
        { name: "Car Accessories", subnames: ["Car Covers", "Seat Covers", "Air Fresheners"] },
        { name: "Motorcycle Gear", subnames: ["Helmets", "Gloves", "Jackets"] },
        { name: "Tools & Equipment", subnames: ["Car Jacks", "Wrenches", "Tire Inflators"] },
      ],
      brands: [
        { Logo: "bosch_logo.png", name: "Bosch" },
        { Logo: "mrf_logo.png", name: "MRF" },
        { Logo: "goodyear_logo.png", name: "Goodyear" },
        { Logo: "castrol_logo.png", name: "Castrol" },
      ],
      promoBanner: "automotive_banner.png",
    },
    {
      title: "Health & Nutrition",
      subcategories: [
        { name: "Supplements", subnames: ["Vitamins", "Proteins", "Omega-3"] },
        { name: "Fitness Gear", subnames: ["Dumbbells", "Jump Ropes", "Resistance Bands"] },
        { name: "Personal Care", subnames: ["Shampoos", "Soaps", "Toothpaste"] },
      ],
      brands: [
        { Logo: "himalaya_logo.png", name: "Himalaya" },
        { Logo: "dettol_logo.png", name: "Dettol" },
        { Logo: "garnier_logo.png", name: "Garnier" },
        { Logo: "muscleblaze_logo.png", name: "MuscleBlaze" },
      ],
      promoBanner: "health_nutrition_banner.png",
    },
  ];

export default categoriesList;