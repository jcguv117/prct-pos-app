import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';

// Optional Theme applied to the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef } from 'ag-grid-community';
import { useOrdeStore } from '../../../stores';
import { Order } from '../../../interfaces';

export const AgTable = () => {

    const orders = useOrdeStore(state => state.orders);

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<Order[]>(orders);

    const [colDefs] = useState<ColDef<Order>[]>([
        { field: 'idOrder', headerName: "#"},
        { field: 'date',    headerName: "Fecha" },
        { field: 'time',    headerName: "Hora" },
        { field: 'total',   headerName: "Total" },
        { field: 'status',  headerName: 'Estado' },
    ]);

  return (
        <div 
            className="ag-theme-quartz" // applying the Data Grid theme
            style={{ height: 500 }} // the Data Grid will fill the size of the parent container
            >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  )
}
