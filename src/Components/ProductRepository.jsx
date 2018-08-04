class ProductRepository {

    constructor() {
        this.findAll = this.findAll.bind(this);
    }

    findAll() {
        return [
            {
                id: "1000a",
                brand: 'H&M',
                category: 'Camicia',
                size: 'M',
                img: 'https://placeimg.com/300/250/nature',
                status: 'liked',
            },
            {
                id: "1000b",
                brand: 'Zara',
                category: 'Pantaloni',
                size: 'XL',
                img: 'https://placeimg.com/300/250/fantasy',
                status: 'not-liked',
            },
            {
                id: "1000c",
                brand: 'Armani',
                category: 'Polo',
                size: 'L',
                img: 'https://placeimg.com/300/250/monster',
                status: 'unknown'
            },
        ];
    }

}

export default ProductRepository;