const get = async (objectId) => {
    try {
        const endpoint = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
        const results = await fetch(endpoint, {
            headers: {
                'Content-Type': 'text/json'
            }
        });
        return await results.json();
    }
    catch(err) {
        return [];
    }
};

export default { get };