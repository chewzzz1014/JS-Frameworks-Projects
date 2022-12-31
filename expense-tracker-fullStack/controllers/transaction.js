// method that used for transaction route

// @desc Get all transactions
// @route /api/v1/transactions
// @access Public
const getTransactions = (req, res, next) => {
    res.send('GET transaction')
}

// @desc Add transaction
// @route /api/v1/transactions
// @access Public
const addTransactions = (req, res, next) => {
    res.send('POST transaction')
}

// @desc Delete transaction
// @route /api/v1/transactions/:id
// @access Public
const deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction')
}

module.exports = {
    getTransactions,
    addTransactions,
    deleteTransaction
}