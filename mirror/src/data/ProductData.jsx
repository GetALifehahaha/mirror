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

const productData = [
    {   
        id: 0,
        productName: 'Apple',
        productPrice: 1.00,
        rating: 5,
        ratingCount: 20,
        sold: 67,
        available: 69,
        category: 'Fruit',
        shipsFrom: "Rauf's Anus",
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
        productPrice: 3.00,
        rating: 4.29,
        ratingCount: 25,
        sold: 200,
        available: 120,
        category: 'Fruit',
        shipsFrom: "Rauf's Anus",
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
        productPrice: 899.99,
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
        productPrice: 25.00,
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
        productPrice: 129.99,
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
        productPrice: 59.50,
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
        productPrice: 15.99,
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
        productPrice: 12.00,
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
        productPrice: 699.00,
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
        productPrice: 9.99,
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
    }
]

export default productData;
