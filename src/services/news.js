const axios = require('axios');
const _get = require('lodash.get');

const getNews = async (search, maxResults, offset) => {
    const { data } = await axios.post(process.env.FT_API_URL, {
        queryString: search,
        resultContext: {
            aspects: ['title', 'location', 'summary', 'editorial'],
            maxResults,
            offset
        }
    }, {
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.FT_API_KEY
        }
    });
    if (!_get(data, 'results.0')) {
        throw new Error('Missing response from server');
    }
    const { indexCount, results: news = [] } = data.results[0];
    return {
        indexCount,
        maxResults,
        offset,
        news
    };
};

/* const getNews = async (filterOptions) => {
    const dataSet = await getDataSet();
    let episodes = get(dataSet, '_embedded.episodes');
    if (filterOptions && filterOptions.season) {
        episodes = episodes.filter(({ season }) => season === filterOptions.season);
    }
    return episodes.map(({ id, name: title, season, number, image: { medium: image } }) => (
        { id, season, number, title, image }
    ));
};

const getDataSet = async () => {
    const existsDataSet = await checkDataSet();
    let dataSet;
    if (existsDataSet) {
        const rawData = await fs.readFile(DATASET_FILE);
        dataSet = JSON.parse(rawData);
    } else {
        const response = await axios.get(DATASET_URL);
        dataSet = response.data;
        await fs.writeFile(DATASET_FILE, JSON.stringify(dataSet));
    }
    return dataSet;
}; */

module.exports = {
    getNews,
};
