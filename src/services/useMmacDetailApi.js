export default function useMmacDetailApi() {

    const get = (objectId) => {
        return `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
    };

    return { get };
}