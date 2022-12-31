const router = require('express').Router()
const { getTransactions, addTransactions, deleteTransaction } = require('../controllers/transaction')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions)

router
    .route('/:id')
    .delete(deleteTransaction)

module.exports = router