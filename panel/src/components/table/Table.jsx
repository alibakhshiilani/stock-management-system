
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';


const Table = ({columns,data,setPage,loading}) => {
  // console.log("props",props)


  return (<DataTable
    columns={columns}
    progressPending={loading}
    paginationPerPage={20}
    data={data?.rows || []}
    pagination
    paginationServer
    paginationTotalRows={data?.count}
    onChangePage={setPage}
    paginationRowsPerPageOptions={[20]}
    responsive
  />)
}

export default Table
