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

    return { build };
}