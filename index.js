module.exports = (Franz) => {
    class Massr extends Franz {
        validateServer(URL) {
            return new Promise((resolve, reject) => {
                resolve();
            });
        }
    }

    return Massr;
};
