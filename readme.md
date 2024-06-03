# PH-Assighment-2
This is a basic ecommerce website backend project created with Node.js, Express.js, MongoDB, and Mongoose.


## Running command

To run project locally, run the following command

```bash
  npm run dev
```

To build project locally, run the following command

```bash
  npm run build
```

To build build version, run the following command

```bash
  npm run start
```





## Features

- User can creat, get, update, delete product.
- User can creat, get, update, delete order.

## Live link: 
https://ph-level-2-assighment-2-1.onrender.com/

## API
- /api/products (POST)
  - Data:
   ```
    {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
        }
  }
- /api/products (GET)
- /api/products/:productId (GET)
- /api/products/:productId (PUT)
    - Data
    ```
    {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
        }
    }
    ```
- /api/products/:productId (DELETE)
- /api/products?searchTerm=iphone (GET)
- /api/orders (POST)
    - Data
    ```
    {
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
    }
    ```
- /api/orders (GET)
- /api/orders?email=level2@programming-hero.com (GET)



