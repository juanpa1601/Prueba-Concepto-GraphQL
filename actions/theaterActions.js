const { Theater } = require('../models')

/** Queries  */

const theaters = async () => {
    return await Theater.find()
    .then((theaters) => theaters)
    .catch((err) => {
        console.log(err);
        return err;
    });
}

const searchTheaterById = async (id) => {
    return await Theater.findById(id)
    .then((theater) => {
        console.log('Consulta exitosa');
        return theater;
    })
    .catch((err) => {
        console.error(err);
        return err;
    });
}

/** Mutations */

const createTheater = async (data) => {
    console.log(data)
    const validation = await Theater.findOne({ theaterId: data.theaterId });
    if(!validation){
        return Theater.create(data)
            .then((theater) => theater)
            .catch((err) => {
                console.log(err)
            })
    }
    //return { message: 'Already exists a theater with that theaterId' };
    throw new Error('A theater with that theaterId already exists. Please use a different theaterId.');
}




module.exports = {
    theaters,
    searchTheaterById,
    createTheater
}