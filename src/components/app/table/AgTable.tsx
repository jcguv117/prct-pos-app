import { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';

// Optional Theme applied to the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { useCartStore, useOrderStore } from '../../../stores';
import { Order, StatusOrder } from '../../../interfaces';
import { formatNumberWithCommas } from '../../../helpers/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

import Swal from 'sweetalert2';


export const AgTable = () => {

    const orders            = useOrderStore(state => state.orders);
    const updateStatusOrder = useOrderStore(state => state.updateStatusOrder);
    const getOrderById      = useOrderStore(state => state.getOrderById);
    const getCountOrders    = useOrderStore(state => state.getCountOrders);
    const orderEditing      = useOrderStore(state => state.orderEditing);

    const updateItem        = useCartStore(state => state.updateItem)

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState<Order[]>(orders);

    useEffect(() => {
      setRowData(orders)
    }, [orders])

    const handleUpdateOrder = (id: number) => {
        const isEditing = getCountOrders(StatusOrder.CHANGING)
        if(!isEditing) {
          Swal.fire({
            text: '¿ Esta seguro de editar esta orden ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            customClass: {
              popup: 'bg-white rounded-lg shadow-lg',
              confirmButton: 'bg-blue-500 text-white rounded m-1 px-4 py-2 font-bold',
              cancelButton: 'bg-stone-500 text-white rounded m-1 px-4 py-2 font-bold',
            },
            buttonsStyling: false,
          }).then(result => {
            if(result.isConfirmed) {
              const order = getOrderById(id);
              if(order) {
                const { listItems, total } = order;
                updateItem(total, listItems);
                orderEditing(id);
                updateStatusOrder(id, StatusOrder.CHANGING)
                window.location.href = '/dashboard/menu';
              }

            }
          })
        } else 
          Swal.fire({
            text: 'Ya existe una orden en revisión.',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            customClass: {
              popup: 'bg-white rounded-lg shadow-lg',
              confirmButton: 'bg-blue-500 text-white rounded px-4 py-2 font-bold',
            },
            buttonsStyling: false,
          });
    }

    const handleConfirm = (id: number) => {
      Swal.fire({
        text: '¿ Esta seguro de completar esta orden ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
          popup: 'bg-white rounded-lg shadow-lg',
          confirmButton: 'bg-blue-500 text-white rounded m-1 px-4 py-2 font-bold',
          cancelButton: 'bg-stone-500 text-white rounded m-1 px-4 py-2 font-bold',
        },
        buttonsStyling: false,
      }).then(result => {
        if(result.isConfirmed) {
          updateStatusOrder(id, StatusOrder.DONE)
        }
      })
    }

    const handleCancel = (id: number) => {
      Swal.fire({
        text: '¿ Esta seguro de cancelar esta orden ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
        customClass: {
          popup: 'bg-white rounded-lg shadow-lg',
          confirmButton: 'bg-blue-500 text-white rounded m-1 px-4 py-2 font-bold',
          cancelButton: 'bg-stone-500 text-white rounded m-1 px-4 py-2 font-bold',
        },
        buttonsStyling: false,
      }).then(result => {
        if(result.isConfirmed) {
          updateStatusOrder(id, StatusOrder.CANCEL)
        }
      })
    }

    const handleShow = (id: number) => {
      const order = getOrderById(id);
      let strItemsOrder = '';
      order?.listItems.forEach( item => {
        strItemsOrder += `<br> ${item.name} | $${item.price} x ${item.quantity} `
      })
      Swal.fire({
        html: '<h2 class="mb-2 font-bold text-2xl">Lista de productos</h2> <hr/>' + strItemsOrder,
        confirmButtonText: 'Aceptar',
        customClass: {
          popup: 'bg-white rounded-lg shadow-lg',
          confirmButton: 'bg-blue-500 text-white rounded m-1 px-4 py-2 font-bold',
        },
        buttonsStyling: false,
      })
    }
    

    const actionButtoms = (id: number) => {
      return (
        <div class="flex flex-row gap-x-2">
          <button class="text-stone-600" onClick={() => handleShow(id) }><FontAwesomeIcon icon={faEye} size='xl' /></button>
          <button class="text-amber-600" onClick={() => handleUpdateOrder(id)}><FontAwesomeIcon icon={faEdit} size='xl' /></button>
          <button class="text-green-600" onClick={() => handleConfirm(id)}><FontAwesomeIcon icon={faCircleCheck} size='xl' /></button>
          <button class="text-red-600"  onClick={() => handleCancel(id)}><FontAwesomeIcon icon={faCircleXmark} size='xl' /></button>
        </div>
      )
    };

    const statusComponent = (value: string) => {
      let badge = {color: '', label: ''}
      switch(value) {
        case StatusOrder.OPEN: 
          badge = {color: 'bg-amber-700', label: 'Abierto'}
          break;
        case StatusOrder.DONE: 
          badge = {color: 'bg-green-700', label: 'Pagado'}
          break;
        case StatusOrder.CANCEL: 
          badge = {color: 'bg-red-700', label: 'Cancelado'}
          break;
        case StatusOrder.CHANGING: 
          badge = {color: 'bg-blue-700', label: 'Editando'}
          break;
      }
      return (
        <div class="flex justify-center items-center p-1 h-full">
          <span class={badge.color + " text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded"}>{badge.label}</span>
        </div>
      )
    };

    const [colDefs] = useState<ColDef<Order>[]>([
        { field: 'idOrder', headerName: "#", valueFormatter: p => 'Orden #' + formatNumberWithCommas(p.value.toString()), maxWidth: 120 },
        { field: 'date',    headerName: "Fecha" },
        { field: 'time',    headerName: "Hora" },
        { field: 'total',   headerName: "Total", valueFormatter: p => '$' + formatNumberWithCommas(p.value.toString())  },
        { field: 'status',  headerName: 'Estado', cellRenderer: (params: ICellRendererParams) => statusComponent(params.value) },
        { field: 'idOrder',  headerName: 'Acciones', cellRenderer: (params: ICellRendererParams) => actionButtoms(params.value), flex: 1 },
    ]);

  return (
        <div 
            class="ag-theme-quartz h-[90vh]"
            >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  )
}
