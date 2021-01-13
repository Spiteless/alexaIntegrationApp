import React from 'react';
import './Dashboard.scss'

const dummy = [{
    "clientName": "Bob",
    "date": "1-2-2020",
}, {
    "clientName": "Jane",
    "date": "1-2-2020",
}, {
    "clientName": "Joe",
    "date": "1-5-2020",
},
]

const Dashboard = (props) => {
    return (
        <div>
            <table>
                <caption>List of Transactions</caption>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                </tr>
                {dummy.map(session => (
                    <tr>
                        <td>{session.clientName}</td>
                        <td>{session.date}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Dashboard;