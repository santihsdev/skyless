<script>
	import Register from './Register.svelte';
import Modal from './Register.svelte';

	let showModal = false;
</script>

<div class="sm:flex">
	<div>
		<ul class="menu bg-base-100 w-56 p-2 rounded-box">
			<li>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chat-text"
						viewBox="0 0 16 16"
					>
						<path
							d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
						/>
						<path
							d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
					Chat
				</a>
			</li>
			<li>
				<a>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chat-text"
						viewBox="0 0 16 16"
					>
						<path
							d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
						/>
						<path
							d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
						/>
					</svg>
					Calendar
				</a>
			</li>
			<li>
				<a>
					<label for="my-modal" class="btn">Are you a doctor?</label>
				</a>
			</li>
		</ul>
	</div>

	<div class="sm:block">
		<h1>Specialist</h1>
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<h1>&nbsp;</h1>
		<div class="stats shadow">
			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="src/lib/images/especialidades/medicinageneral.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">General Medicine</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>

			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/pediatria.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Pediatrics</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>

			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/odontologia.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Odontology</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="stats shadow">
			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/urologia.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Urology</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>

			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/obstetriciayginecologia.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Gynecology and Obstetrics</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>

			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/oftalmologia.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Oftalmology</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="stats shadow">
			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/traumatologia.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Orthopedic surgery and Traumatology</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>

			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/otorrinolaringologia.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Otorhinolaryngology</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>

			<div class="stat">
				<div class="card card-compact w-65 bg-base-100 shadow-xl">
					<figure>
						<img src="./src/lib/images/especialidades/cirugiaplastica.png" alt="Shoes" />
					</figure>
					<div class="card-body">
						<h2 class="card-title">Plastic surgery</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
						<div class="card-actions justify-end">
							<button class="btn btn-primary">View list</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<input type="checkbox" id="my-modal" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box">
			<Register/>
		</div>
	</div>
</div>
