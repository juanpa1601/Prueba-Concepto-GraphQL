const { User } = require('../models')

/** Queries  */

const users = async () => {
    return await User.find()
      .then((users) => users)
      .catch((err) => {
        console.log(`user not exist err ${err}`)
      })
  }

const searchUserById = async (id) => {
    return await User.findById(id)
    .then((user) => {
        console.log('Consulta exitosa');
        return user;
    })
    .catch((err) => {
        console.error(err);
        return err;
    });
}

/** Mutations */

const createUser = async (data) => {
    console.log(data)
    return await User.create(data)
      .then((user) => user)
      .catch((err) => {
        console.error(err)
      })
}

const updateUser = async (id, data) => {
  let { name, email, password } = data
  const query = await User.findByIdAndUpdate(
    { _id: id },
    { 
      $set: {
        name: name,
        email: email,
        password: password
      }
    },
    { new: true })
    .then((user) => user)
    .catch((err) => {
      console.error(err)
    })
  return query;
}

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id)
    .then((user) => user)
    .catch((err) => {
      console.error(err)
    })
}

module.exports = {
    users,
    searchUserById,
    createUser,
    updateUser,
    deleteUser
}