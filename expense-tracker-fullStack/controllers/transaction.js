const Transaction = require('../models/Transaction')

// method that used for transaction route

// @desc Get all transactions
// @route /api/v1/transactions
// @access Public
const getTransactions = async (req, res, next) => {
    // res.send('GET transaction')
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        next(error)
    }
}

// @desc Add transaction
// @route /api/v1/transactions
// @access Public
const addTransactions = async (req, res, next) => {
    //res.send('POST transaction')
    try {
        const { text, amount } = req.body

        const transaction = await Transaction.create(req.body)
        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (error) {
        next(error)
    }
}

// @desc Delete transaction
// @route /api/v1/transactions/:id
// @access Public
const deleteTransaction = async (req, res, next) => {
    //res.send('DELETE transaction')
    try {
        const transaction = await Transaction.findById(req.params.id)

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'Transaction Not Found'
            })
        }
        await transaction.remove()
        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTransactions,
    addTransactions,
    deleteTransaction
}