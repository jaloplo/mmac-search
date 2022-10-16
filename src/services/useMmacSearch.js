import ArtworkModel from "../model/ArtworkModel";
import useMmacDetailApi from "./useMmacDetailApi";
import useMmacSearchApi from "./useMmacSearchApi";

export default function useMmacSearch() {

    const fetchOptions = {
        headers: {
            'Content-Type': 'text/json'
        },
        method: 'GET'
    };

    const find = async (keyword) => {
        const result = await fetch(useMmacSearchApi().get(keyword), fetchOptions);
        const objects = await result.json();
        const objectsIds = objects.objectIDs.slice(0, 5);
        const details = await Promise.all(
            objectsIds.map(async (o) => {
                const results = await fetch(useMmacDetailApi().get(o), fetchOptions);
                const object = await results.json();
                const data = ArtworkModel().build(object);
                return data;
            })
        );
        return details;
    };

    return { find };
}