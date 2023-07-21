import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const dummyGenerator = () => {
    let dummyItem = [];

    for (let i = 0; i < 10; i++) {
        let randomId = uuidv4();
        let randomName = faker.commerce.productName();
        let randomDescription = faker.commerce.productDescription();
        let randomPrice = faker.commerce.price();
        let randomAmount = Math.floor(Math.random() * 100);
        let randomImgUrl = faker.image.urlLoremFlickr({ width: 150, height: 150, category: 'food' });

        let newDummyItem = {
            id: randomId,
            name: randomName,
            description: randomDescription,
            price: randomPrice,
            amount: randomAmount,
            imgUrl: randomImgUrl,
        };

        dummyItem.push(newDummyItem);
    }
    return dummyItem;
};

export default dummyGenerator;