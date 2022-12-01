const db = require("../config/connection");
const { User, Item } = require("../models");
const userSeeds = require("./userSeed.json");
const itemSeeds = require("./itemSeed.json");


db.once("open", async () => {
    try {
        await User.deleteMany({});
        await Item.deleteMany({});
        await User.create(userSeeds);
        await Item.create(itemSeeds);
        console.log("Seeded!!");
        process.exit(0);
    } catch (err) {
        throw err;
    }
});