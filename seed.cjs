const { Client, Databases, ID } = require('appwrite');

const client = new Client()
    .setEndpoint('https://syd.cloud.appwrite.io/v1')
    .setProject('69b57107000a494a1c39');

const databases = new Databases(client);
const DATABASE_ID = '69b5a810001139b4e286';

const categories = [
    "Vegetables", "Fruits", "Grains & Cereals", "Tubers & Roots", 
    "Poultry", "Livestock (Meat)", "Dairy & Eggs", "Spices & Herbs", 
    "Nuts & Seeds", "Legumes"
];

const farms = [
    { name: "Olam Farms", loc: "Nasarawa", desc: "Large scale rice and sesame production." },
    { name: "Sebore Farms", loc: "Adamawa", desc: "Diversified agricultural enterprise." },
    { name: "Shonga Farms", loc: "Kwara", desc: "Commercial poultry and dairy farming." },
    { name: "Anfani Farms", loc: "Kaduna", desc: "Specialized in grains and livestock." },
    { name: "Jof Farms", loc: "Ondo", desc: "Leading producer of vegetable oils." },
    { name: "Maizube Farms", loc: "Minna", desc: "Integrated livestock and crop farm." },
    { name: "Songhai Farms", loc: "Rivers", desc: "Sustainable organic farming model." },
    { name: "Crest-Agro", loc: "Kogi", desc: "Industrial cassava processing and farming." },
    { name: "Teragro", loc: "Benue", desc: "Fruit juice concentrate production." },
    { name: "Psaltry International", loc: "Oyo", desc: "Cassava value chain specialists." },
    { name: "Ellah Lakes", loc: "Edo", desc: "Oil palm and soybean cultivation." },
    { name: "Agrited", loc: "Oyo", desc: "Premium poultry breeding and hatchery." },
    { name: "Animal Care Services", loc: "Ogun", desc: "Poultry and animal health experts." },
    { name: "Zartech Farms", loc: "Oyo", desc: "Major poultry and meat processors." },
    { name: "Chi Farms", loc: "Lagos", desc: "Integrated poultry and aquaculture." },
    { name: "Nagari Farms", loc: "Gauteng", desc: "High-quality dairy production." },
    { name: "Valency Agro", loc: "Ogun", desc: "Cashew and spice processing." },
    { name: "Abeokuta Farms", loc: "Ogun", desc: "Traditional and modern crop farming." },
    { name: "Kaduna Orchards", loc: "Kaduna", desc: "Specialized in citrus and mangoes." },
    { name: "Jos Green Valley", loc: "Jos", desc: "Exotic vegetables and flowers." }
];

const productsData = [
    { name: "Tomatoes", price: 500, cat: "Vegetables" },
    { name: "Habanero Peppers", price: 300, cat: "Vegetables" },
    { name: "Red Onions", price: 400, cat: "Vegetables" },
    { name: "Fresh Spinach", price: 200, cat: "Vegetables" },
    { name: "Sweet Mangoes", price: 1000, cat: "Fruits" },
    { name: "Navel Oranges", price: 800, cat: "Fruits" },
    { name: "Golden Pineapples", price: 600, cat: "Fruits" },
    { name: "Papaya", price: 500, cat: "Fruits" },
    { name: "White Maize", price: 450, cat: "Grains & Cereals" },
    { name: "Local Rice (Ofada)", price: 1200, cat: "Grains & Cereals" },
    { name: "Sorghum", price: 350, cat: "Grains & Cereals" },
    { name: "Millet", price: 400, cat: "Grains & Cereals" },
    { name: "Puna Yam", price: 1500, cat: "Tubers & Roots" },
    { name: "Cassava Tubers", price: 300, cat: "Tubers & Roots" },
    { name: "Sweet Potatoes", price: 400, cat: "Tubers & Roots" },
    { name: "Irish Potatoes", price: 700, cat: "Tubers & Roots" },
    { name: "Broiler Chicken", price: 4500, cat: "Poultry" },
    { name: "Crate of Eggs", price: 2800, cat: "Poultry" },
    { name: "Turkey Meat", price: 6000, cat: "Poultry" },
    { name: "Day Old Chicks", price: 500, cat: "Poultry" },
    { name: "Beef (kg)", price: 3500, cat: "Livestock (Meat)" },
    { name: "Goat Meat (kg)", price: 4000, cat: "Livestock (Meat)" },
    { name: "Ram Meat (kg)", price: 4500, cat: "Livestock (Meat)" },
    { name: "Pork (kg)", price: 3000, cat: "Livestock (Meat)" },
    { name: "Fresh Milk (Litre)", price: 900, cat: "Dairy & Eggs" },
    { name: "Local Butter", price: 1200, cat: "Dairy & Eggs" },
    { name: "Cheese (Wara)", price: 800, cat: "Dairy & Eggs" },
    { name: "Yogurt", price: 1000, cat: "Dairy & Eggs" },
    { name: "Ginger Root", price: 500, cat: "Spices & Herbs" },
    { name: "Garlic Bulbs", price: 600, cat: "Spices & Herbs" },
    { name: "Dry Turmeric", price: 400, cat: "Spices & Herbs" },
    { name: "Scent Leaves", price: 150, cat: "Spices & Herbs" },
    { name: "Cashew Nuts", price: 2500, cat: "Nuts & Seeds" },
    { name: "Roasted Groundnuts", price: 600, cat: "Nuts & Seeds" },
    { name: "Beniseed (Sesame)", price: 800, cat: "Nuts & Seeds" },
    { name: "Melon Seeds (Egusi)", price: 1500, cat: "Nuts & Seeds" },
    { name: "Brown Beans", price: 900, cat: "Legumes" },
    { name: "White Beans", price: 850, cat: "Legumes" },
    { name: "Soybeans", price: 500, cat: "Legumes" },
    { name: "Groundnut (Raw)", price: 700, cat: "Legumes" }
];

async function seed() {
    try {
        console.log("Seeding categories...");
        const categoryIds = {};
        for (const catName of categories) {
            const res = await databases.createDocument(DATABASE_ID, 'categories', ID.unique(), { name: catName, imageId: "placeholder" });
            categoryIds[catName] = res.$id;
            console.log(`Created category: ${catName}`);
        }

        console.log("\nSeeding farms...");
        const farmIds = [];
        for (const farm of farms) {
            const res = await databases.createDocument(DATABASE_ID, 'farms', ID.unique(), {
                farmName: farm.name,
                location: farm.loc,
                farmDescription: farm.desc,
                rating: 4.5 + Math.random() * 0.5,
                status: "open",
                phoneNumber: "08000000000",
                imageId: "placeholder"
            });
            farmIds.push(res.$id);
            console.log(`Created farm: ${farm.name}`);
        }

        console.log("\nSeeding products...");
        for (let i = 0; i < productsData.length; i++) {
            const prod = productsData[i];
            const farmId = farmIds[i % farmIds.length];
            const catId = categoryIds[prod.cat];
            
            await databases.createDocument(DATABASE_ID, 'products', ID.unique(), {
                productName: prod.name,
                price: prod.price,
                farms: farmId,
                categories: [catId],
                stockQuantity: 100,
                imageId: "placeholder"
            });
            console.log(`Created product: ${prod.name}`);
        }

        console.log("\nSeeding completed successfully!");
    } catch (error) {
        console.error("\nError seeding database:", error.message);
        console.log("Note: This might be due to missing write permissions or API key requirements.");
    }
}

seed();
