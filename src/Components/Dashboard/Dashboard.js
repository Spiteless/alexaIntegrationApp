import React from 'react';
import './Dashboard.scss'
import TransactionTable from '../TransactionTable/TransactionTable.js'

const Dashboard = (props) => {
    return (
        <div>
            <TransactionTable/>
        </div>
    )
}

export default Dashboard;