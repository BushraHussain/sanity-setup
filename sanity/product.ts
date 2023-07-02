export const product = {
    name: "product",
    type: 'document', // Model / Blue print / document
    title: "Product",
    fields: [
        {
            name: "title", // name act as unique ID
            title: "Product title here",
            type: "string"
        },

        {
            name: "description", // name act as ID
            title: "Product description",
            type: "string"
        },

        {
            name: "image", // name act as ID
            title: "Product image",
            type: "image"
        },

        {
            name: "price", // name act as ID
            title: "Product price",
            type: "number"
        }
    ]
}