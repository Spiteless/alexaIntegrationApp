import React from 'react'

const dummy = [{
    "clientName": "Bob",
    "date": "1-2-2020",
}, {
    "clientName": "Jane",
    "date": "1-2-2020",
}, {
    "clientName": "Joe",
    "date": "1-5-2021",
},
]


const TransactionTable = (props) => {
    return (
        <table>
        <caption>List of Transactions</caption>
        <tr>
            <th>Name</th>
            <th>Date</th>
        </tr>
        {dummy.map((session, i) => (
            <tr key={i}>
                <td>{session.clientName}</td>
                <td>{session.date}</td>
            </tr>
        ))}
    </table>
    )
}


export default TransactionTable