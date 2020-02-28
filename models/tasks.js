module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { nome: "Lucielly" },
                { nome: "luiz" }
            ]);
        }
    };
};