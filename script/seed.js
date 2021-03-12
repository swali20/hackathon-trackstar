const { db } = require("../server/db");
const { Product, User, Cart, CartItem } = require("../server/db/models");

const users = [
  {
    username: "firstUser",
    email: "first@user.com",
    password: "password",
  },
  {
    username: "secondUser",
    email: "second@user.com",
    password: "password",
  },
  {
    username: "thirdUser",
    email: "third@user.com",
    password: "password",
  },
  {
    username: "fourthUser",
    email: "fourth@user.com",
    password: "password",
  },
  {
    username: "firstAdmin",
    email: "first@admin.com",
    password: "password",
    isAdmin: true,
  },
  {
    username: "secondAdmin",
    email: "second@admin.com",
    password: "password",
    isAdmin: true,
  },
  {
    username: "thirdAdmin",
    email: "third@admin.com",
    password: "password",
    isAdmin: true,
  },
  {
    username: "fourthAdmin",
    email: "fourth@admin.com",
    password: "password",
    isAdmin: true,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const createdUsers = await User.bulkCreate(users);
    console.log("Seeded users!");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = seed;

seed();
