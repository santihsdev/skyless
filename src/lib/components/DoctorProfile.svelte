<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

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

<Header/>

<div class="card lg:card-side bg-base-100 mb-4 px-40">
	<figure>
		<div class="avatar">
			<div class="w-24 rounded">
				<img src="./src/lib/images/default.png" alt="default" />
			</div>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title">Fady Khoury-Collado, MDS</h2>
		<p>
			<b>Specialities:</b> Lorem, adipisicing, Accusantium, reiciendis!
		</p>
		<div>
			<div class="sm:flex">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-telephone"
					viewBox="0 0 16 16"
				>
					<path
						d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
					/>
				</svg>
				<p>212-395-3210</p>
			</div>
		</div>
	</div>
</div>

<div class="px-5 py-8">
	<div class="sm:flex">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			fill="currentColor"
			class="bi bi-person-vcard"
			viewBox="0 0 16 16"
		>
			<path
				d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"
			/>
			<path
				d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"
			/></svg
		>
		<h3 class="px-5 text-2xl font-bold">About Fady Khoury-Collado</h3>
	</div>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>

<div class="sm:flex justify-center items-center">
    <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat w-96">
            <div>
                <div class="sm:flex justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-mortarboard"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"
                        />
                        <path
                            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"
                        /></svg>
                </div>
                <h3 class="px-5 text-xl font-bold text-center py-5">Education</h3>
                <p class="text-base">Fellowship: Memorial Sloan-Kettering Cancer Center</p>
                <p class="text-base">Internship: State University of New York - Downstate Medical Center</p>
                <p class="text-base">Residency: Lutheran Medical Center</p>
                <p class="text-base">Residency: Lutheran Medical Center</p>
            </div>
        </div>
    
        <div class="stat w-72">
            <div>
                    <div class="sm:flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/> <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/></svg>
                    </div>
                    <h3 class="text-xl font-bold py-5 text-center">Board certifications</h3>
                    <p class="text-base">Ginecologic Oncology</p>
                    <p class="text-base">Obstetrics and Gynecology</p>
            </div>
        </div>
    
        <div class="stat">
            <div class="sm:flex justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                    /> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" /></svg>
            </div>
            <h3 class="px-5 py-5 text-xl font-bold text-center">Doctor Office Hours</h3>
            <div class="overflow-x-auto">
                <table class="border-separate border-spacing-2">
                    <tbody>
                        <tr>
                            <th class="text-left">Thursday</th>
                            <td>9:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <th class="text-left">Friday</th>
                            <td>9:00 AM - 5:00 PM</td>
                        </tr><tr>
                            <th class="text-left">Saturday</th>
                            <td>Closed</td>
                        </tr>
                        <tr>
                            <th class="text-left">Sunday</th>
                            <td>Closed</td>
                        </tr>
                        <tr>
                            <th class="text-left">Monday</th>
                            <td>9:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <th class="text-left">Tuesday</th>
                            <td>9:00 AM - 5:00 PM</td>
                        </tr>
                        <tr>
                            <th class="text-left">Wednesday</th>
                            <td>9:00 AM - 5:00 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

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

<Footer/>