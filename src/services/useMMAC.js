export default function useMMAC() {

    const headers = new Headers({
        'Content-Type': 'text/json'
    });

    const search = (keyword) => {
        return fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${keyword}&hasImages=true`,
            {
                method: 'GET',
                headers
            }
        )
        .then(results => results.json())
        .then(objects => objects.objectIDs)
        .then(objects => objects.slice(0, 2)) // This filter is for testing purposes
        .then(objects => Promise.all(
            objects.map(o => {
                return fetch(
                    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${o}`, 
                    { method: 'GET', headers }
                )
                .then(result => result.json())
                .catch(err => {});
            }))
        )
        .catch(err => {
            console.log('useMMAC - error');
            console.error(err);
            return [];
        });
    };

    return [search];
}