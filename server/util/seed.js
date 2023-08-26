const {Item} = require('../models/appModels')

const seed = async () => {
    await Item.bulkCreate([
        {
            item_name: 'Vietnamese fried egg rolls w/meat',
            item_type: 'Appetizers',
            price: 3.95
        },
        {
            item_name: 'Vietnamese fried egg rolls w/veg',
            item_type: 'Appetizers',
            price: 3.95
        },
        {
            item_name: 'Vegetarian Spring Roll',
            item_type: 'Appetizers',
            price: 4.50
        },
        {
            item_name: 'Shrimp Spring Roll',
            item_type: 'Appetizers',
            price: 4.50
        },
        {
            item_name: 'Shrimp and Pork Spring Roll',
            item_type: 'Appetizers',
            price: 4.50
        },
        {
            item_name: 'House Special Spring Roll',
            item_type: 'Appetizers',
            price: 4.50
        },
        {
            item_name: 'Fried Won Ton w/meat',
            item_type: 'Appetizers',
            price: 4.95
        },
        {
            item_name: 'Crab Ran Goon',
            item_type: 'Appetizers',
            price: 4.95
        },
        {
            item_name: 'Tempura Shrimp',
            item_type: 'Appetizers',
            price: 6.95
        },
        {
            item_name: 'Fried Tofu',
            item_type: 'Appetizers',
            price: 3.95
        },
        {
            item_name: 'Fried Chicken Dumplings',
            item_type: 'Appetizers',
            price: 5.25
        },
        {
            item_name: 'Edamame',
            item_type: 'Appetizers',
            price: 2.99
        },
        {
            item_name: '#1 Pho Tai',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Sliced Beef',
            price: 7.96
        },
        {
            item_name: '#2 Pho Dac Biet',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Sliced Beef, Brisket, Flank, Meat Balls, Tendon, and Tripe',
            price: 7.96
        },
        {
            item_name: '#3 Pho Bo Vien',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Beef Meat Balls',
            price: 7.96
        },
        {
            item_name: '#4 Pho Tai Bo Vien',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Sliced Beef and Meat Balls',
            price: 7.96
        },
        {
            item_name: '#5 Pho Tai Gan Sach',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Sliced Beef, Tendon, and Tripe',
            price: 7.96
        },
        {
            item_name: '#6 Pho Ga',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Shredded Chicken',
            price: 7.96
        },
        {
            item_name: '#7 Pho Tom',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Shrimp',
            price: 7.96
        },
        {
            item_name: '#8 Pho Tai Nam Gau',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Sliced Beef, Flank, and Brisket',
            price: 7.96
        },
        {
            item_name: '#9 Pho Chay',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Tofu and Vegetables',
            price: 7.96
        },
        {
            item_name: '#10 Pho Dau Hu',
            item_type: 'Pho: Rice Noodle with Beef Broth',
            description: 'Tofu',
            price: 7.96
        },
        {
            item_name: '#11 Hu Tieu Thap Cam',
            item_type: 'Hu Tieu: Rice Noodle with Chicken Broth',
            description: 'Shrimp, Fish Balls, and Crab Stick',
            price: 7.96
        },
        {
            item_name: '#12 Hu Tieu Tom Thit',
            item_type: 'Hu Tieu: Rice Noodle with Chicken Broth',
            description: 'Shrimp and Pork',
            price: 7.96
        },
        {
            item_name: '#13 Hu Tieu Ga Tom',
            item_type: 'Hu Tieu: Rice Noodle with Chicken Broth',
            description: 'Shrimp and Shredded Chicken',
            price: 7.96
        },
        {
            item_name: '#14 Hu Tieu Hoanh Thanh',
            item_type: 'Hu Tieu: Rice Noodle with Chicken Broth',
            description: 'Wonton',
            price: 7.96
        },
        {
            item_name: '#15 Hu Tieu Do Bien',
            item_type: 'Hu Tieu: Rice Noodle with Chicken Broth',
            description: 'Sea Food',
            price: 7.96
        },
        {
            item_name: '#11b Mi Thap Cam',
            item_type: 'Mi: Egg Noodle with Chicken Broth',
            description: 'Shrimp, Fish Balls, and Crab Stick',
            price: 7.96
        },
        {
            item_name: '#12b Mi Tom Thit',
            item_type: 'Mi: Egg Noodle with Chicken Broth',
            description: 'Shrimp and Pork',
            price: 7.96
        },
        {
            item_name: '#13b Mi Ga Tom',
            item_type: 'Mi: Egg Noodle with Chicken Broth',
            description: 'Shrimp and Shredded Chicken',
            price: 7.96
        },
        {
            item_name: '#14b Mi Hoanh Thanh',
            item_type: 'Mi: Egg Noodle with Chicken Broth',
            description: 'Wonton',
            price: 7.96
        },
        {
            item_name: '#15b Mi Do Bien',
            item_type: 'Mi: Egg Noodle with Chicken Broth',
            description: 'Sea Food',
            price: 7.96
        },
        {
            item_name: '#16 Com Chien Tom',
            item_type: 'Com Chien: Fried Rice',
            description: 'Shrimp Fried Rice',
            price: 8.99
        },
        {
            item_name: '#17 Com Chien Ga',
            item_type: 'Com Chien: Fried Rice',
            description: 'Chicken Fried Rice',
            price: 7.99
        },
        {
            item_name: '#18 Com Chien Bo',
            item_type: 'Com Chien: Fried Rice',
            description: 'Beef Fried Rice',
            price: 7.99
        },
        {
            item_name: '#19 Com Chien Chay',
            item_type: 'Com Chien: Fried Rice',
            description: 'Vegetable Fried Rice',
            price: 7.99
        },
        {
            item_name: '#20 Com Chien Cam',
            item_type: 'Com Chien: Fried Rice',
            description: 'House Special Combo Fried Rice',
            price: 8.99
        },
        {
            item_name: '#22 Com Thit Nuong',
            item_type: 'Com: Steamed Rice Dish',
            description: 'Sliced BBQ Pork with Steamed Rice',
            price: 7.96
        },
        {
            item_name: '#24 Com Thit Trung',
            item_type: 'Com: Steamed Rice Dish',
            description: 'Sliced BBQ Pork and Fried Egg with Steamed Rice',
            price: 8.96
        },
        {
            item_name: '#26 Com Ga Xao Xa Ot',
            item_type: 'Com: Steamed Rice Dish',
            description: 'Lemongrass Chicken with Steamed Rice',
            price: 7.96
        },
        {
            item_name: '#28 Bun Thit Nuong',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with Vietnamese BBQ Pork',
            price: 7.96
        },
        {
            item_name: '#29 Bun Cha Gio',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with Fried Egg Roll',
            price: 7.96
        },
        {
            item_name: '#31 Bun Tom Cha Gio',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with Shrimp and Fried Egg Roll',
            price: 8.50
        },
        {
            item_name: '#32 Bun Tom Thit Nuong Cha Gio',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with Shrimp, BBQ Pork and Fried Egg Roll',
            price: 9.50
        },
        {
            item_name: '#33 Bun Nem Cha Gio',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with BBQ Pork and Fried Egg Roll',
            price: 8.50
        },
        {
            item_name: '#34 Bun Bo Xao Xa',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with Lemongrass Sliced Beef',
            price: 8.50
        },
        {
            item_name: '#35 Bun Chay',
            item_type: 'Bun: Vermicelli Noodle Bowls',
            description: 'Noodle Salad Bowl with Fried Tofu',
            price: 7.96
        },
        {
            item_name: '#36 Vegetable Lo Mein',
            item_type: 'Lo Mein',
            price: 7.95
        },
        {
            item_name: '#37 Chicken Lo Mein',
            item_type: 'Lo Mein',
            price: 7.95
        },
        {
            item_name: '#38 Beef Lo Mein',
            item_type: 'Lo Mein',
            price: 7.95
        },
        {
            item_name: '#39 Shrimp Lo Mein',
            item_type: 'Lo Mein',
            price: 8.95
        },
        {
            item_name: '#40 House Special Lo Mein',
            item_type: 'Lo Mein',
            price: 8.95
        },
        {
            item_name: 'Extra Noodles',
            item_type: 'Extras',
            price: 1.50
        },
        {
            item_name: 'Extra Meat',
            item_type: 'Extras',
            price: 2.00
        },
        {
            item_name: 'Extra Shrimp',
            item_type: 'Extras',
            price: 2.00
        },
        {
            item_name: 'Extra Veg',
            item_type: 'Extras',
            price: 1.50
        },
        {
            item_name: 'Extra Meat Balls',
            item_type: 'Extras',
            price: 2.00
        },
        {
            item_name: 'Extra Fried Tofu',
            item_type: 'Extras',
            price: 1.50
        },
        {
            item_name: 'Thai Tea',
            item_type: 'Drinks',
            price: 3.00
        },
        {
            item_name: 'Pepsi',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Diet Pepsi',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Mtn Dew',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Mtn Dew Black Cherry',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: '7Up',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Root Beer',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Sunkist Orange Soda',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Tropicana Lemonade',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Diet Dr. Pepper',
            item_type: 'Drinks',
            price: 1.00
        },
        {
            item_name: 'Dr. Pepper',
            item_type: 'Drinks',
            price: 1.00
        },
    ])
    console.log('seed complete!')
}

module.exports = seed