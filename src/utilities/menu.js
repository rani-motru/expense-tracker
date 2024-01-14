import {dashboard, expenses, transactions, trend} from './Icon'
import {useActiveContext} from '../context/ActiveContext'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard',
        onClick: () => setActive(1),
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
        onClick: () => setActive(2),
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
        onClick: () => setActive(3),
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
        onClick: () => setActive(4),
    },
] 