import { render, screen, fireEvent } from '@testing-library/svelte';
import ScheduleFormClientMedic from '$lib/components/ScheduleFormClientMedic.svelte';

describe('ScheduleFormClientMedic', () => {
  test('should call handleSubmit function with form data on form submission', async () => {
    const formData = new FormData();
    formData.append('date', '2023-05-17');
    formData.append('hour', '09:00');
    formData.append('description', 'Appointment description');

    const fetchMock = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true })
      })
    );

    render(ScheduleFormClientMedic, { id: 'doctor_id' });

    const dateInput = screen.getByLabelText('Fecha:');
    const hourInput = screen.getByLabelText('Hora:');
    const descriptionInput = screen.getByLabelText('Descripción:');
    const submitButton = screen.getByText('Schedule');

    await fireEvent.update(dateInput, '2023-05-17');
    await fireEvent.update(hourInput, '09:00');
    await fireEvent.update(descriptionInput, 'Appointment description');
    await fireEvent.submit(submitButton);

    expect(fetchMock).toHaveBeenCalledWith('api/appoinments/create', {
      method: 'POST',
      body: formData
    });

    fetchMock.mockRestore();
  });

  test('should close the modal when the form is submitted', async () => {
    render(ScheduleFormClientMedic, { id: 'doctor_id' });

    const submitButton = screen.getByText('Schedule');
    const modalToggleInput = screen.getByLabelText('my-modal-3');

    await fireEvent.submit(submitButton);

    expect(modalToggleInput.checked).toBe(false);
  });

  test('should fetch forms data on component mount', async () => {
    const formsData = [
      { id: 1, date: '2023-05-18', hour: '10:00', description: 'Appointment 1' },
      { id: 2, date: '2023-05-19', hour: '11:00', description: 'Appointment 2' }
    ];

    const fetchMock = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(formsData)
      })
    );

    render(ScheduleFormClientMedic, { id: 'doctor_id' });

    expect(fetchMock).toHaveBeenCalledWith('api/appoinments/get-all');

    fetchMock.mockRestore();
  });
});
