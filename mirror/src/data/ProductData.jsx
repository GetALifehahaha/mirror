import appleImg from '../assets/images/apple.png';
import bananaImg from '../assets/images/banana.png';
import laptopImg from '../assets/images/laptop.png';
import basketballImg from '../assets/images/basketball.png';
import deskChairImg from '../assets/images/desk_chair.png';
import headphonesImg from '../assets/images/headphones.png';
import coffeeBeansImg from '../assets/images/coffee_beans.png';
import tshirtImg from '../assets/images/t_shirt.png';
import smartphoneImg from '../assets/images/smartphone.webp';
import novelBookImg from '../assets/images/novel_book.png';
import wirelessMouseImg from '../assets/images/wireless_mouse.webp';
import gamingKeyboardImg from '../assets/images/gaming_keyboard.png';
import mangoImg from '../assets/images/mango.png';
import orangeImg from '../assets/images/orange.png';
import officeDeskImg from '../assets/images/office_desk.png';
import yogaMatImg from '../assets/images/yoga_mat.webp';
import waterBottleImg from '../assets/images/water_bottle.webp';
import faceCreamImg from '../assets/images/face_cream.webp';

const productData = [
    {   
        id: 0,
        productName: 'Apple',
        productPrice: 10.00,
        rating: 5,
        ratingCount: 20,
        sold: 67,
        available: 69,
        category: 'Fruit',
        shipsFrom: "Silksong Market",
        imagePath: appleImg,
        specifications: {
            weight: "150g (avg per piece)",
            variety: "Fuji",
            origin: "Washington, USA",
            shelfLife: "1–2 weeks refrigerated"
        }
    },
    {
        id: 1,
        productName: 'Banana',
        productPrice: 21.00,
        rating: 4.29,
        ratingCount: 25,
        sold: 200,
        available: 120,
        category: 'Fruit',
        shipsFrom: "Silksong Market",
        imagePath: bananaImg,
        specifications: {
            weight: "120g (avg per piece)",
            variety: "Cavendish",
            origin: "Philippines",
            shelfLife: "5–7 days at room temperature"
        }
    },
    {
        id: 2,
        productName: 'Laptop',
        productPrice: 42999.99,
        rating: 4.7,
        ratingCount: 320,
        sold: 1200,
        available: 45,
        category: 'Electronics',
        shipsFrom: "TechMart",
        imagePath: laptopImg,
        specifications: {
            model: "ProBook 15",
            processor: "Intel Core i5, 12th Gen",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            display: "15.6\" FHD",
            batteryLife: "Up to 8 hours",
            os: "Windows 11"
        }
    },
    {
        id: 3,
        productName: 'Basketball',
        productPrice: 500.00,
        rating: 4.3,
        ratingCount: 78,
        sold: 400,
        available: 150,
        category: 'Sports',
        shipsFrom: "SportyHub",
        imagePath: basketballImg,
        specifications: {
            material: "Synthetic Leather",
            size: "7 (official size)",
            weight: "600g",
            brand: "Spalding",
            use: "Indoor/Outdoor"
        }
    },
    {   
        id: 4,
        productName: 'Desk Chair',
        productPrice: 999.99,
        rating: 4.5,
        ratingCount: 210,
        sold: 530,
        available: 75,
        category: 'Furniture',
        shipsFrom: "HomeLiving Co.",
        imagePath: deskChairImg,
        specifications: {
            material: "Mesh back, cushioned seat",
            color: "Black",
            features: "Adjustable height, swivel, ergonomic design",
            weightCapacity: "120kg",
            dimensions: "45cm x 45cm x 95cm"
        }
    },
    {
        id: 5,
        productName: 'Headphones',
        productPrice: 1299.50,
        rating: 4.1,
        ratingCount: 95,
        sold: 650,
        available: 90,
        category: 'Accessories',
        shipsFrom: "AudioWorld",
        imagePath: headphonesImg,
        specifications: {
            type: "Over-Ear, Wireless Bluetooth 5.0",
            batteryLife: "30 hours",
            noiseCancellation: "Active Noise Cancelling (ANC)",
            charging: "USB-C, Fast Charging",
            brand: "Sony WH-1000XM Series"
        }
    },
    {
        id: 6,
        productName: 'Coffee Beans',
        productPrice: 521.99,
        rating: 4.6,
        ratingCount: 180,
        sold: 820,
        available: 300,
        category: 'Groceries',
        shipsFrom: "BeanExpress",
        imagePath: coffeeBeansImg,
        specifications: {
            variety: "Arabica, Medium Roast",
            origin: "Colombia",
            weight: "500g pack",
            flavorNotes: "Chocolate, Caramel, Citrus",
            bestBefore: "12 months"
        }
    },
    {
        id: 7,
        productName: 'T-Shirt',
        productPrice: 239.99,
        rating: 4.0,
        ratingCount: 60,
        sold: 250,
        available: 500,
        category: 'Clothing',
        shipsFrom: "StyleZone",
        imagePath: tshirtImg,
        specifications: {
            material: "100% Cotton",
            sizes: ["S", "M", "L", "XL"],
            colors: ["White", "Black", "Blue"],
            fit: "Regular",
            care: "Machine washable"
        }
    },
    {
        id: 8,
        productName: 'Smartphone',
        productPrice: 18999.99,
        rating: 4.8,
        ratingCount: 540,
        sold: 2200,
        available: 100,
        category: 'Electronics',
        shipsFrom: "MobileHub",
        imagePath: smartphoneImg,
        specifications: {
            model: "Poco X7 Pro 5G",
            display: "6.7\" AMOLED, 120Hz",
            processor: "Snapdragon 8s Gen 3",
            ram: "12GB",
            storage: "512GB",
            battery: "5000mAh, 67W Turbo Charging",
            os: "Android 14 (MIUI)"
        }
    },
    {
        id: 9,
        productName: 'Novel Book',
        productPrice: 429.99,
        rating: 4.2,
        ratingCount: 130,
        sold: 300,
        available: 180,
        category: 'Books',
        shipsFrom: "ReadersCorner",
        imagePath: novelBookImg,
        specifications: {
            title: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            genre: "Self-Help / Personal Development",
            pages: 224,
            language: "English",
            publisher: "HarperOne",
            isbn: "978-0-06-245771-4"
        }
    },
    {
        id: 10,
        productName: 'Wireless Mouse',
        productPrice: 1299.99,
        rating: 4.4,
        ratingCount: 180,
        sold: 900,
        available: 200,
        category: 'Electronics',
        shipsFrom: "TechMart",
        imagePath: wirelessMouseImg,
        specifications: {
            connection: "2.4GHz Wireless",
            dpi: "1600 DPI",
            battery: "AA Battery (included)",
            compatibility: "Windows, macOS, Linux",
            brand: "Logitech"
        }
    },
    {
        id: 11,
        productName: 'Gaming Keyboard',
        productPrice: 2189.99,
        rating: 4.6,
        ratingCount: 320,
        sold: 1000,
        available: 85,
        category: 'Electronics',
        shipsFrom: "TechMart",
        imagePath: gamingKeyboardImg,
        specifications: {
            switchType: "Mechanical (Blue Switches)",
            lighting: "RGB Backlight",
            connectivity: "USB",
            keyCount: 104,
            brand: "Logitech"
        }
    },
    {
        id: 12,
        productName: 'Mango',
        productPrice: 10.50,
        rating: 4.7,
        ratingCount: 40,
        sold: 300,
        available: 150,
        category: 'Fruit',
        shipsFrom: "Silksong Market",
        imagePath: mangoImg,
        specifications: {
            weight: "200g (avg per piece)",
            variety: "Carabao Mango",
            origin: "Guimaras, Philippines",
            shelfLife: "4–6 days at room temperature"
        }
    },
    {
        id: 13,
        productName: 'Orange',
        productPrice: 8.20,
        rating: 4.5,
        ratingCount: 30,
        sold: 240,
        available: 130,
        category: 'Fruit',
        shipsFrom: "Silksong Market",
        imagePath: orangeImg,
        specifications: {
            weight: "180g (avg per piece)",
            variety: "Valencia",
            origin: "Florida, USA",
            shelfLife: "2 weeks refrigerated"
        }
    },
    {
        id: 14,
        productName: 'Office Desk',
        productPrice: 5899.99,
        rating: 4.6,
        ratingCount: 150,
        sold: 500,
        available: 40,
        category: 'Furniture',
        shipsFrom: "HomeLiving Co.",
        imagePath: officeDeskImg,
        specifications: {
            material: "Wood and metal frame",
            color: "Oak Brown",
            dimensions: "120cm x 60cm x 75cm",
            features: "Cable management, sturdy design"
        }
    },
    {
        id: 15,
        productName: 'Yoga Mat',
        productPrice: 210.00,
        rating: 4.3,
        ratingCount: 90,
        sold: 420,
        available: 130,
        category: 'Sports',
        shipsFrom: "SportyHub",
        imagePath: yogaMatImg,
        specifications: {
            material: "Non-slip TPE",
            thickness: "6mm",
            dimensions: "183cm x 61cm",
            color: "Purple",
            includes: "Carrying strap"
        }
    },
    {
        id: 16,
        productName: 'Water Bottle',
        productPrice: 550.50,
        rating: 4.4,
        ratingCount: 115,
        sold: 800,
        available: 220,
        category: 'Sports',
        shipsFrom: "SportyHub",
        imagePath: waterBottleImg,
        specifications: {
            material: "Stainless Steel",
            capacity: "750ml",
            insulation: "Double-wall vacuum",
            features: "Leak-proof, keeps drinks cold 12h"
        }
    },
    {
        id: 17,
        productName: 'Face Cream',
        productPrice: 560.99,
        rating: 4.2,
        ratingCount: 210,
        sold: 630,
        available: 90,
        category: 'Beauty',
        shipsFrom: "GlowEssentials",
        imagePath: faceCreamImg,
        specifications: {
            type: "Moisturizing Cream",
            skinType: "All Skin Types",
            ingredients: "Hyaluronic Acid, Vitamin E",
            weight: "50ml",
            shelfLife: "24 months"
        }
    },
    // {
    //     id: 18,
    //     productName: 'Perfume',
    //     productPrice: 49.99,
    //     rating: 4.5,
    //     ratingCount: 170,
    //     sold: 380,
    //     available: 60,
    //     category: 'Beauty',
    //     shipsFrom: "GlowEssentials",
    //     imagePath: perfumeImg,
    //     specifications: {
    //         scent: "Floral, Amber, Vanilla",
    //         volume: "100ml",
    //         brand: "Aromé Luxe",
    //         longevity: "6–8 hours"
    //     }
    // },
    // {
    //     id: 19,
    //     productName: 'Cooking Pan Set',
    //     productPrice: 89.00,
    //     rating: 4.7,
    //     ratingCount: 250,
    //     sold: 700,
    //     available: 80,
    //     category: 'Home & Kitchen',
    //     shipsFrom: "CookEase",
    //     imagePath: cookingPanSetImg,
    //     specifications: {
    //         material: "Non-stick aluminum",
    //         pieces: 5,
    //         compatibility: "Gas & Induction",
    //         color: "Black"
    //     }
    // },
    // {
    //     id: 20,
    //     productName: 'Electric Kettle',
    //     productPrice: 35.00,
    //     rating: 4.5,
    //     ratingCount: 190,
    //     sold: 520,
    //     available: 95,
    //     category: 'Home & Kitchen',
    //     shipsFrom: "CookEase",
    //     imagePath: electricKettleImg,
    //     specifications: {
    //         capacity: "1.7L",
    //         power: "1500W",
    //         material: "Stainless Steel",
    //         features: "Auto shut-off, LED indicator"
    //     }
    // },
    // {
    //     id: 21,
    //     productName: 'Action Figure',
    //     productPrice: 29.99,
    //     rating: 4.8,
    //     ratingCount: 250,
    //     sold: 800,
    //     available: 120,
    //     category: 'Toys',
    //     shipsFrom: "PlayTime Co.",
    //     imagePath: actionFigureImg,
    //     specifications: {
    //         character: "Iron Guardian",
    //         height: "6 inches",
    //         material: "PVC",
    //         articulation: "15 points",
    //         ageGroup: "Ages 6+"
    //     }
    // },
    // {
    //     id: 22,
    //     productName: 'Building Blocks Set',
    //     productPrice: 45.50,
    //     rating: 4.7,
    //     ratingCount: 320,
    //     sold: 1400,
    //     available: 300,
    //     category: 'Toys',
    //     shipsFrom: "PlayTime Co.",
    //     imagePath: buildingBlocksImg,
    //     specifications: {
    //         pieces: 500,
    //         material: "ABS Plastic",
    //         compatibleWith: "LEGO",
    //         ageGroup: "Ages 5+",
    //         includes: "Storage box"
    //     }
    // },
    // {
    //     id: 23,
    //     productName: 'Notebook Journal',
    //     productPrice: 6.99,
    //     rating: 4.3,
    //     ratingCount: 80,
    //     sold: 350,
    //     available: 200,
    //     category: 'Stationery',
    //     shipsFrom: "PaperWorks",
    //     imagePath: notebookJournalImg,
    //     specifications: {
    //         pages: 160,
    //         size: "A5",
    //         cover: "Hardbound",
    //         paperType: "Lined, acid-free",
    //         color: "Brown Kraft"
    //     }
    // },
    // {
    //     id: 24,
    //     productName: 'Ballpen Set',
    //     productPrice: 3.99,
    //     rating: 4.1,
    //     ratingCount: 60,
    //     sold: 500,
    //     available: 400,
    //     category: 'Stationery',
    //     shipsFrom: "PaperWorks",
    //     imagePath: ballpenSetImg,
    //     specifications: {
    //         count: 10,
    //         inkColor: "Blue",
    //         tipSize: "0.5mm",
    //         refillable: "Yes"
    //     }
    // },
    // {
    //     id: 25,
    //     productName: 'LED Desk Lamp',
    //     productPrice: 39.99,
    //     rating: 4.6,
    //     ratingCount: 230,
    //     sold: 900,
    //     available: 110,
    //     category: 'Home & Kitchen',
    //     shipsFrom: "HomeLiving Co.",
    //     imagePath: ledDeskLampImg,
    //     specifications: {
    //         brightnessLevels: 3,
    //         colorTemperature: "Warm/Neutral/Cool",
    //         power: "USB powered",
    //         adjustable: "Foldable arm"
    //     }
    // },
    // {
    //     id: 26,
    //     productName: 'Scented Candle',
    //     productPrice: 14.99,
    //     rating: 4.4,
    //     ratingCount: 100,
    //     sold: 410,
    //     available: 250,
    //     category: 'Home & Kitchen',
    //     shipsFrom: "GlowEssentials",
    //     imagePath: scentedCandleImg,
    //     specifications: {
    //         fragrance: "Lavender & Vanilla",
    //         burnTime: "40 hours",
    //         weight: "200g",
    //         material: "Soy wax"
    //     }
    // },
    // {
    //     id: 27,
    //     productName: 'Running Shoes',
    //     productPrice: 89.99,
    //     rating: 4.5,
    //     ratingCount: 300,
    //     sold: 1200,
    //     available: 150,
    //     category: 'Sports',
    //     shipsFrom: "SportyHub",
    //     imagePath: runningShoesImg,
    //     specifications: {
    //         brand: "Nike AirRun",
    //         sizes: ["7", "8", "9", "10", "11"],
    //         color: "Black/White",
    //         material: "Mesh upper, rubber sole"
    //     }
    // },
    // {
    //     id: 28,
    //     productName: 'Wireless Earbuds',
    //     productPrice: 49.00,
    //     rating: 4.3,
    //     ratingCount: 260,
    //     sold: 950,
    //     available: 130,
    //     category: 'Accessories',
    //     shipsFrom: "AudioWorld",
    //     imagePath: wirelessEarbudsImg,
    //     specifications: {
    //         batteryLife: "24 hours (with case)",
    //         connection: "Bluetooth 5.3",
    //         waterproof: "IPX4",
    //         charging: "USB-C, 15-min quick charge"
    //     }
    // },
    // {
    //     id: 29,
    //     productName: 'Cookbook',
    //     productPrice: 15.99,
    //     rating: 4.6,
    //     ratingCount: 120,
    //     sold: 400,
    //     available: 90,
    //     category: 'Books',
    //     shipsFrom: "ReadersCorner",
    //     imagePath: cookbookImg,
    //     specifications: {
    //         title: "Everyday Easy Meals",
    //         author: "Jamie Oliver",
    //         genre: "Cooking / Lifestyle",
    //         pages: 256,
    //         language: "English",
    //         publisher: "Penguin Books"
    //     }
    // },
]

export default productData;
