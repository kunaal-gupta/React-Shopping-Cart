import React from 'react';

export default function App1() {
    const tableData = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Alice', age: 27 },
    ];

    return (
        <div>
            <h1>Hi</h1>
            <h1>Table Example</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
