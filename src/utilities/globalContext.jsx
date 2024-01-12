import React, { createContext, useContext, useState } from 'react';
import * as usersAPI from './users-api'; // Import functions from users-api.js



const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        try{
            await usersAPI.addIncome(income);
            getIncomes();
        }catch (error){
                setError(error.message);
            }
        
    }

    const deleteIncome = async (id) => {
        try {
          await usersAPI.deleteIncome(id);
          getIncomes();
        } catch (error) {
          setError(error.message);
        }
      };
    
      const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
      };
    
      const addExpense = async (expense) => {
        try {
          await usersAPI.addExpense(expense);
          getExpenses();
        } catch (error) {
          setError(error.message);
        }
      };
    
      const deleteExpense = async (id) => {
        try {
          await usersAPI.deleteExpense(id);
          getExpenses();
        } catch (error) {
          setError(error.message);
        }
      };
    
      const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
      };
    
      const totalBalance = () => {
        return totalIncome() - totalExpenses();
      };
    
      const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 3);
      };
    
      const getIncomes = async () => {
        try {
          const response = await usersAPI.getIncomes();
          setIncomes(response);
        } catch (error) {
          setError(error.message);
        }
      };
    
      const getExpenses = async () => {
        try {
          const response = await usersAPI.getExpenses();
          setExpenses(response);
        } catch (error) {
          setError(error.message);
        }
      };
    
      return (
        <GlobalContext.Provider
          value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    };
    
    export const useGlobalContext = () => {
      return useContext(GlobalContext);
    };