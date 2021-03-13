const db = require("realm");

// Define your models and their properties
const User = {
  name: "User",
  properties: {
    spotifyId: "string",
  },
};

db.open({ schema: [User] })
  .then((realm) => {
    realm.write(() => {
      const testUser = realm.create("User", {
        spotifyId: "test",
      });
    });

    realm.close();
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = db;
