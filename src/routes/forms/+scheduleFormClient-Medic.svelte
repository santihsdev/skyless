<label for="my-modal-3" class="btn">open modal</label>
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
    <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <form>
            <h1 class="title">Book Medical Appointment</h1>
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
            <button class="btn2">Schedule</button>
        </form>
    </div>
</div>
