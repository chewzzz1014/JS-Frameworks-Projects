// method that used for transaction route

// @desc Get all transactions
// @route /api/v1/transactions
// @access Publib
const getTransactions = (req, res, next) => {
    res.send('GET transaction')
}

module.exports = {
    getTransactions
}