const Members = require('../../modelsConections/memberModelConnection');
const { MEMBER_NOT_FOUND, MEMBER_UPDATE_SUCCESS, ERROR } = require('../../const/const');

exports.update = async (req, res) => {

    try {
            const id = req.params.id;
            const {name, image} = req.body;
            let updateMember =  await Members.findByPk(id); 

            if(!updateMember) {
                return res.status(400).json({
                    status: 400,
                    message: MEMBER_NOT_FOUND,
                })
            } 
            
            updateMember = await Members.update({
                name,
                image     
            }, {
                where: {
                    id: id
                } 
        }); 

            return res.json({
                status: 200,
                message: MEMBER_UPDATE_SUCCESS,
            }); 
            } catch (error) {
                res.json({
                    status: 500,
                    message: ERROR
                })
            }
    }

           