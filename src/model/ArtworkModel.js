import { faker } from '@faker-js/faker';

export default function ArtworkModel() {

    const build = (data) => {
        return {
            id: data.objectID,

            artistName: data.artistDisplayName,
            department: data.department,
            isHighlight: data.isHighlight,
            image: data.primaryImage,
            thumbnail: data.primaryImageSmall,
            title: data.title,
            type: data.objectName
        };
    };

    const mock = () => {
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

    return {build, mock};
}