const axios = require('./../axios');

const heroes =  {
    async getHeroByName (name) {
        let heroesFound = {};

        await axios.get('/search/' + name)
        .then((response) => {
            if (response.data.response == 'success'){
                heroesFound = response.data.results;
            }

            if (response.data.response == 'error'){
                heroesFound = null;
            }
        })
        .catch(err => {
            console.log(err);
        });

        return heroesFound;
    }
};

module.exports = heroes;