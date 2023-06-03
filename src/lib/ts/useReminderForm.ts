import type { Reminder } from '$lib/types/reminder'; 

// export let appointmentForm: Reminder = {
//     date: '',
//     hour: '',
//     description: '',
//     id_doctor: '',
//     id_user: ''
// };

const restartValues = (isVisible : boolean, appointmentForm: Reminder) => {
    appointmentForm = {
        date: '',
        hour: '',
        description: '',
        id_doctor: '',
        id_user: ''
    };
    isVisible = false;
};

export const createAppoinment = async (isVisible: boolean, appointment: Reminder, appointmentForm: Reminder) => {
    const js = await fetch('/api/appoinments/create', {
        method: 'POST',
        body: JSON.stringify(appointment)
    });

    if (js.status == 200) {
        restartValues(isVisible,appointmentForm);
    }
    return isVisible;
};

export const editAppointment = async (isVisible: boolean, appointment: Reminder, appointmentForm: Reminder) => {
    const js = await fetch('/api/appoinments/update', {
        method: 'POST',
        body: JSON.stringify(appointment)
    });

    if (js.status == 200) {
        restartValues(isVisible, appointmentForm);
    }
    return isVisible;
};