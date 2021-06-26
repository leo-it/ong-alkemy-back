const ContactsModel = require('../models/contactsModel/contactsModel')
const sequelize = require('../config/index')
const Sequelize = require('sequelize')

const Contacts = ContactsModel(sequelize, Sequelize)

module.exports = Contacts