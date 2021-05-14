const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/comments withAuth,

router.post('/',  withAuth, async (req, res) => {
    try {
      const newComment = await Comments.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.redirect('/');
      //res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;