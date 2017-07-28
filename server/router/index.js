const router = require('express').Router();

router.use('/lists', require('./listRouter'));
router.use('/entries', require('./entryRouter'));

module.exports = router;