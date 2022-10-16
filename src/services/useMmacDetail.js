import ArtworkModel from "../model/ArtworkModel";
import useMmacDetailApi from "./useMmacDetailApi";

export default function useMmacDetail() {

    const fetchOptions = {
        headers: {
            'Content-Type': 'text/json'
        },
        method: 'GET'
    };

    const get = async (objectId) => {
        const results = await fetch(useMmacDetailApi().get(objectId), fetchOptions);
        const object = await results.json();
        const detail = ArtworkModel().build(object);
        return detail;
    };

    return { get };
}