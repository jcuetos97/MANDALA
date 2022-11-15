const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/marketplace',
    {
        useNewUrlParser: true,
        useUnifiedTopo: true,
    }
);

module.exports = mongoose.connection;