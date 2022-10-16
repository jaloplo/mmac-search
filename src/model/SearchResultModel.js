const build = (data) => {
    return {
        total: data.total,
        ids: data.objectIDs
    };
};

export default { build };