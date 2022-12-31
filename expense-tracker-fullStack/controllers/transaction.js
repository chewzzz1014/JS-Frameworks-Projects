const Transaction = require('../models/Transaction')

// method that used for transaction route

// @desc Get all transactions
// @route /api/v1/transactions
// @access Public
const getTransactions = async (req, res, next) => {
    // res.send('GET transaction')
    try {
        const transactions = await Transaction.find()
    } catch (error) {
        next(err)
    }
}

// @desc Add transaction
// @route /api/v1/transactions
// @access Public
const addTransactions = async (req, res, next) => {
    res.send('POST transaction')
}

// @desc Delete transaction
// @route /api/v1/transactions/:id
// @access Public
const deleteTransaction = async (req, res, next) => {
    res.send('DELETE transaction')
}

module.exports = {
    getTransactions,
    addTransactions,
    deleteTransaction
}