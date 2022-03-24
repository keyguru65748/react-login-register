import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { explore } from './BusinessFunction';
import { useTable } from 'react-table';


const ExploreBusiness = () => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        explore().then(res => {
            if (res) {
                setTableData(res);
            } else {
                alert("there is no data.");
            }
        })
    }, [])

    const data = React.useMemo(
        () => tableData,
        [tableData]
    )
    console.log(tableData);
    console.log(data);

    const columns = React.useMemo(
        () => [
            {
                Header: 'id',
                accessor: 'id'
            },
            {
                Header: 'name',
                accessor: 'business_name'
            },
            {
                Header: 'email',
                accessor: 'email'
            },
            {
                Header: 'location',
                accessor: 'user_location'
            },
            {
                Header: 'created',
                accessor: 'created'
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        window.location.href = "/";
    }

    return (
        <div className='container explore-container'>
            <div className='row'>
                <div className='col-md-12 mt-5 explore-content'>
                    <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps()}
                                            style={{
                                                border: 'solid 1px white',
                                                color: 'white',
                                            }}
                                        >
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    style={{
                                                        padding: '10px',
                                                        border: 'solid 1px gray',
                                                    }}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='useroption'>
                    <FaRegUserCircle />
                    <ul className='drdw'>
                        <li>
                            <a href='/profile'>Profile</a>
                        </li>
                        <li>
                            <a onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
}

export default ExploreBusiness;