const build = (data) => {
    return {
        id: data.departmentId,

        title: data.displayName
    };
};

export default { build };