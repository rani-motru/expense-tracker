const ExpenseSchema = require('../../models/expense.cjs')

exports.addExpense = async (req,res) =>{

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // lets do the validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "Please fill all Fields!"})

        }
        if(amount <= 0 || !amount === "number"){
            return res.status(400).json({message: "check the amount!"})
        }
        await income.save()
        res.status(200).json({message:'Expense Added'})
    } catch (error) {
        res.status(400).json({ message: 'Server-error' })
    }
    console.log(income)
}

exports.getExpense = async (req, res) =>{
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(400).json({message: 'Server Error'})
    }
}

exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((err) =>{
            res.status(400).json({message: 'Server Error'})
        })
}