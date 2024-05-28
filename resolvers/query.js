const { userActions, theaterActions } = require('../actions');

/** User */
const Users = (_) => userActions.users();
const SearchUserById = (_, args) => userActions.searchUserById(args.id);

/** Theater */
const Theaters = (_) => theaterActions.theaters();
const SearchTheaterById = (_, args) => theaterActions.searchTheaterById(args.id);

module.exports = {
    Users,
    SearchUserById,
    Theaters,
    SearchTheaterById
}