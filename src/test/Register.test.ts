import { render, screen, fireEvent } from '@testing-library/svelte';
import Register from '$lib/components/Register.svelte';

describe('Component', () => {
  beforeEach(() => {
    render(Register);
  });

  test('should update the "speciality" variable on input change', async () => {
    const input = screen.getByPlaceholderText('Enter Your Specialty');
    await fireEvent.input(input, { target: { value: 'Cardiology' } });

    expect(input.nodeValue).toBe('Cardiology');
  });

  test('should update the "cellphone" variable on input change', async () => {
    const input = screen.getByPlaceholderText('Enter your cellphone');
    await fireEvent.input(input, { target: { value: '1234567890' } });

    expect(input.nodeValue).toBe('1234567890');
  });

  test('should update the "doctorCode" variable on input change', async () => {
    const input = screen.getByPlaceholderText('doctor-code');
    await fireEvent.input(input, { target: { value: '5678' } });

    expect(input.nodeValue).toBe('5678');
  });

  test('should call the handleSubmit function when the "Register" button is clicked with a valid doctor code', async () => {
    const button = screen.getByText('Register');

    const fetchMock = jest.spyOn(window, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: '123',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com'
          })
      })
    );

    await fireEvent.click(button);

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/doctors/create',
      expect.objectContaining({
        method: 'POST',
        body: expect.any(String)
      })
    );

    fetchMock.mockRestore();
  });
});