const express = require('express');
const router = express.Router();

const { addExpense, getExpense, deleteExpense} = require('../../controllers/api/expense.cjs');
const { addIncome, getIncome, deleteIncome} = require('../../controllers/api/income.cjs');

router.post('/add-income', addIncome)
      .get('/get-income', getIncome)
      .delete('/delete-income', deleteIncome)
      .post('/add-expense', addExpense)
      .get('/get-expense', getExpense)
      .delete('/delete-expense', deleteExpense)

    module.exports = router;  