// Old
underscore = require('underscore')

var products = [
    {
        "id": 123, // productId -------ok
        "shop_id": 345,// storeId ---------ok
        "title": "Iphone X",
        "description": "It's a smartphone",
        "options": [
            { "name": "Color" },
            { "name": "Storage" }
        ],
        "images": [
            {
                "id": 1234,
                "url": "https://ae01.alicdn.com/kf/HTB1IFiISVXXXXXVXVXXq6xXFXXXW/New-Arrival-DIY-3D-Magic-Machine-Printer-Enlighten-Painting-Draw-Kids-Developmental-Toy-Children-Kids-Gift.jpg_640x640.jpg"
            },
            {
                "id": 1235,
                "url": "https://ae01.alicdn.com/kf/HTB1hOypSVXXXXXMapXXq6xXFXXXB/New-Arrival-DIY-3D-Magic-Machine-Printer-Enlighten-Painting-Draw-Kids-Developmental-Toy-Children-Kids-Gift.jpg_50x50.jpg"
            }
        ],
        "item_info": {// doi --ok
            "thumbnail": "https://ae01.alicdn.com/kf/HTB1hOypSVXXXXXMapXXq6xXFXXXB/New-Arrival-DIY-3D-Magic-Machine-Printer-Enlighten-Painting-Draw-Kids-Developmental-Toy-Children-Kids-Gift.jpg_50x50.jpg",
            "tags": "iphone, ios, ten" //category --ok
        },
        "variants": [
            {
                "id": 3456,
                "sku": "123_234_456",
                "properties": ["Red", "128GB"],
                "inventory": 100,
                "price": 1280.3,
                "compared_price": 2000.6,
                "image_url": "https://ae01.alicdn.com/kf/HTB17HrKb26H8KJjSspmq6z2WXXa6/Original-Apple-iPhone-X-Face-ID-64GB-256GB-ROM-5-8-inch-3GB-RAM-12MP-Hexa.jpg_50x50.jpg",
                "created_at": 1525775291,
                "updated_at": 1525775291
            },
            {
                "id": 3457,
                "sku": "123_234_458",
                "properties": ["Black", "128GB"],
                "inventory": 100,
                "price": 1280.3,
                "compared_price": 2000.6,
                "image_url": "https://ae01.alicdn.com/kf/HTB17HrKb26H8KJjSspmq6z2WXXa6/Original-Apple-iPhone-X-Face-ID-64GB-256GB-ROM-5-8-inch-3GB-RAM-12MP-Hexa.jpg_50x50.jpg",
                "created_at": 1525775291,
                "updated_at": 1525775291
            }
        ],
        "created_at": 1525774426,// them -----ok
        "updated_at": 1525774426// them----ok
    }
]

arrayProduct = products
for (i = 0; i < arrayProduct.length; i++) {      
    product = arrayProduct[i]
    
    product.thumbnail = product.item_info.thumbnail

    product.itemInfo = product.item_info
    product.category = product.item_info.tags
    product.createdAt = product.created_at
    product.updatedAt = product.updated_at    
    product.productId = product.id
    product.storeId = product.shop_id

    // delete object
    delete product.item_info
    delete product.created_at
    delete product.updated_at
    delete product.id
    delete product.shop_id    
    
    let listOption = []
    let listOptionKey= []
    let listOptionValue = []
    let listProperty = []
   
    
    for (j = 0; j < product.options.length; j++) {
        let option = product.options[j]
        listOptionKey.push(option.name)
    }

    // modify variants.properties
    for (k = 0; k < product.variants.length; k++) {
        variant = product.variants[k]        
        listProperty.push(variant.properties)

        propertiesKey = listOptionKey
        propertiesValue = variant.properties
        variant.properties = underscore.object(propertiesKey, propertiesValue)
    }

    // modify options
    listOptionValue = underscore.unzip(listProperty);
    for (i = 0; i < listOptionValue.length; i++) {
        arr = listOptionValue[i]
        const removeDuplicateItems = arr => [...new Set(arr)];
        listOptionValue[i] = removeDuplicateItems(arr);
    }

    listOption = underscore.object(listOptionKey, listOptionValue);
    product.options = Object.keys(listOption).map(option => {
        return {[option]: listOption[option]}
    })   
    // console.log(JSON.stringify(product,null,2))
}
