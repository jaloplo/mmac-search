const find = async (keyword) => {
    try {
        const endpoint = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}&hasImages=true`;
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

export default { find };