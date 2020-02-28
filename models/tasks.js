module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { nome: "viajar" },
                { nome: "caminhar" }
            ]);
        }
    };
};