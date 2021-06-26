const  User  = require('../../modelsConections/userModelConection');
const { USER_NOT_FOUND, USER_DELETED, ERROR } = require('../../const/const');

exports.delete = async (req, res) => {
    try {
            // search user by ID
            const id = req.params.id;
            let deleteUser =  await User.findByPk(id); 

            if(!deleteUser) {
                return res.status(400).json({
                    status: 400,
                    message: USER_NOT_FOUND,
                })
            } 
            deleteUser = await User.destroy({
                where: {
                  id: id,
                },
              });
                return res.json({
                    status: 200,
                    message: USER_DELETED,
                    user: deleteUser
                })            
        } catch (error) {
                res.json({
                    status: 500,
                    message: ERROR
                })

        }
    }
