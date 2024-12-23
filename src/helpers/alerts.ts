import Swal, { SweetAlertOptions } from "sweetalert2";

export const swalAlert = ( props: SweetAlertOptions) => {
    return Swal.fire({
        ...props
    });
}

export const timeAlert = (props: SweetAlertOptions) => {
    const newProps: SweetAlertOptions = {
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        ...props,
    }
    return swalAlert(newProps)
}

export const confirmAlert = (props: SweetAlertOptions) => {
        return swalAlert({
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No',
            customClass: {
              popup: 'bg-white rounded-lg shadow-lg',
              confirmButton: 'btn-default btn-flat',
              cancelButton: 'btn-cancel btn-flat',
            },
            buttonsStyling: false,
            ...props,
          });
}