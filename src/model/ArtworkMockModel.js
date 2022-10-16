import { faker } from '@faker-js/faker';

const build = () => {
    return {
        id: faker.datatype.string(),

        artistName: faker.name.fullName(),
        department: faker.commerce.department(),
        isHighlight: faker.datatype.boolean(),
        image: faker.image.abstract(640, 480),
        thumbnail: faker.image.abstract(128, 128*4/3),
        title: faker.datatype.string(),
        type: faker.datatype.string(),
    };
};

export default { build };