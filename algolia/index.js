const atomicalgolia = require("atomic-algolia");
const ALGOLIA_APP_ID = "YN1Z4L0NG9"
const ALGOLIA_API_KEY = "7aa3cb124e2b876a3a82f5ec2741cc21"
const ALGOLIA_INDEX_NAME = "aqua"
const ALGOLIA_INDEX_FILE = "../build/ algolia.json"

global.debug = () => { console.info(arguments) };

const cb = (err, res) => {
    if (err) throw err;
    console.log(res);
};

atomicalgolia(ALGOLIA_INDEX_NAME, ALGOLIA_INDEX_FILE, cb);
