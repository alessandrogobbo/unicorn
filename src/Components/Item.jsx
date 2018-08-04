
// @ToDo: refactor using enum (how in ES6?)
export const LIKED = 'liked';
export const DISLIKED = 'not-liked';
export const UNKNOWN = 'unknown';

class Item {

    constructor() {
        this.getStatus = this.getStatus.bind(this);
        this.getImageUrl = this.getImageUrl.bind(this);
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);

        this.validStatus = [LIKED, DISLIKED, UNKNOWN];
    }

    // @ToDo: how to typehynt in ES6?
    static makeFromProduct(product) {
        const item = new Item();
        item.id = product.id;
        item.imageUrl = product.img;
        item.name = '';
        item.name += (product.category) ? product.category : '';
        item.name += (product.brand) ? ' ' + product.brand : '';
        item.name += (product.size) ? ' - ' + product.size : '';
        product.status ? item.setStatus(product.status) : item.setStatus(UNKNOWN);
        return item;
    }

    like() {
        this.status = LIKED;
    }

    dislike() {
        this.status = DISLIKED;
    }

    getStatus() {
        return this.status;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    setStatus = (status) => {
        if(!this.validStatus.includes(status)) {
            throw "Invalid status: ".status;
        }
        this.status = status;
    }
}

export default Item;