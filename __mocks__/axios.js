const url = require('url');
const axios = jest.genMockFromModule('axios');


function get(link) {
    return url.parse(link);
}

axios.get = get;
module.exports = axios;