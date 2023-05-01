<script>
    let fecha;
    let hora;
    let descripcion;

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fecha = formData.get('fecha');
        hora = formData.get('hora');
        descripcion = formData.get('descripcion');

        if (fecha && hora && descripcion) {

            console.log('Fecha:', fecha);
            console.log('Hora:', hora);
            console.log('Descripción:', descripcion);
            closeModal();
        }
    }
    function closeModal() {
        const modalCheckbox = document.getElementById('my-modal-3');
        modalCheckbox.checked = false;
    }
</script>

<div>
    <form on:submit={handleSubmit}>
        <h1 class="title">Schedule an appointment</h1>
        <div class="form-control">
            <label class="label">Fecha:</label>
            <input class="input" type="date" name="fecha" required>
        </div>
        <div class="form-control">
            <label class="label">Hora:</label>
            <input class="input" type="time" name="hora" required>
        </div>
        <div class="form-control">
            <label class="label">Descripción:</label>
            <textarea class="textarea" name="descripcion" rows="4"></textarea>
        </div>
        <button type="submit" class="btn2">Schedule</button>
    </form>
</div>

<style>
    form {
        margin: 0 auto;
        padding: 2rem;
        background-color: #ffffff;
        color: black;
        font-family: Arial,serif;
    }
    .form-control {
        margin-bottom: 1rem;
    }
    .label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    .title{
        display: block;
        font-weight: bold;
        font-size: 1.6rem;
        margin: auto;
        text-align: center;
    }
    input[type=date],
    input[type=time] {
        width: 40%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        font-size: 1rem;
        line-height: 1.5;
        background-color: #fff;
        color: #000;
    }

    input[type=date]::-webkit-calendar-picker-indicator,
    input[type=time]::-webkit-calendar-picker-indicator {
        background-color: #79ccd1;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    .textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #cccccc;
        border-radius: 0.25rem;
        font-size: 1rem;
        line-height: 1.5;
        background-color: rgba(231, 231, 231, 0.54);
    }

    .textarea {
        resize: vertical;
        background-color: white;
    }

    .btn {
        background-color: #79ccd1;
        color: #fff;
    }

    .btn2 {
        display: block;
        margin-top: 1.5rem;
        background-color: #79ccd1;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
        margin-left: 90%;
    }
</style>


