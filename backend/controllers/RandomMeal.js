const axios = require('axios');

module.exports = {
    async show(req, res) {
        await axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(result => {
            meal = result.data
        });
        return res.json(meal);
    }
};