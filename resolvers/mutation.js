const { userActions, theaterActions } = require('../actions');

/** User */

const CreateUser = (_, args) => userActions.createUser(args.data);
const UpdateUser = (_, args) => userActions.updateUser(args.id, args.data);
const DeleteUser = (_, args) => userActions.deleteUser(args.id);

/** Theater */
const CreateTheater = (_, args) => theaterActions.createTheater(args.data);

module.exports = {
    CreateUser,
    CreateTheater,
    UpdateUser,
    DeleteUser
}