const express = require("express");
const getMembersQuery = require("../../query/membersQuery/getMembers");

const {
  GET_MESSAGE_MEMBERS,
  GET_MESSAGE_MEMBERS_ERROR,
} = require("../../const/const");
const getMembersController = async (req, res, next) => {
  try {
    const members = await getMembersQuery();
    if (members) {
      res.status(200).json({
        data: members,
        message: GET_MESSAGE_MEMBERS,
      });
    } else {
      res.status(404).json({
        message: GET_MESSAGE_MEMBERS_ERROR,
      });
    }
  } catch (error) {
    res.status(404).json({ error: error });
  }
};
module.exports = getMembersController;
