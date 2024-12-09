import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';

// Optional Theme applied to the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef } from 'ag-grid-community';

interface Order {
  id: number;
  date: string;
  time: string;
  total: number;
  status: string;
}

export const AgTable = () => {

    const orders = [
        { id: 1, date: '08/12/2024', time:'10:54', total: 4000, status: 'done' },
        { id: 2, date: '08/12/2024', time:'10:57', total: 4500, status: 'done' },
        { id: 3, date: '08/12/2024', time:'10:59', total: 6200, status: 'cancel' },
    ]

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<Order[]>(orders);

    const [colDefs] = useState<ColDef<Order>[]>([
        { field: 'id', headerName: "#"},
        { field: 'date', headerName: "Fecha" },
        { field: 'time', headerName: "Hora" },
        { field: 'total', headerName: "Total" },
        { field: 'status', headerName: 'Estado' },
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
