import { faker } from '@faker-js/faker';

const dummyGenerator = () => {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        priceCurrency: faker.finance.currency().code,
        amount: faker.helpers.rangeToNumber({ min: 0, max: 99 }),
        img: {
            url: faker.image.urlLoremFlickr({ width: 150, height: 150 }),
            alt: 'Faker random image',
        },
    };
};

export const DUMMY_INVENTORY = faker.helpers.multiple(
    dummyGenerator,
    { count: 12 });
