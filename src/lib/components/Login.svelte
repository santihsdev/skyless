<main>
	<h1>Login</h1>
	<div class="container">
		<div class="column">
			<form action="#" method="post">
				<label for="username">Username or email address:</label>
				<input type="text" id="username" name="username" required>
				
                <label for="username">Doctor code:</label>
				<input type="text" id="username" name="username" required>

				<label for="password">Password:</label>
				<input type="password" id="password" name="password" required>
				
				<button type="submit">Login</button>
			</form>
		</div>
	</div>
</main>

<style>
	body {
		font-family: Arial, sans-serif;
		background-color: #f2f2f2;
	}
	
	h1 {
		text-align: center;
	}
	
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
	}
	
	.column {
		flex-basis: 100%;
		text-align: center;
		padding: 10px;
	}
	
	@media screen and (min-width: 768px) {
		.column {
			flex-basis: 50%;
			text-align: left;
			padding: 20px;
		}
	}
	
	input[type="text"], input[type="password"] {
		padding: 10px;
		border: none;
		border-radius: 5px;
		margin-bottom: 10px;
		width: 100%;
		box-sizing: border-box;
	}
	
	button {
		background-color: #4CAF50;
		color: white;
		padding: 10px;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		width: 100%;
		box-sizing: border-box;
	}
	
	button:hover {
		background-color: #3e8e41;
	}
	
	label {
		display: block;
		text-align: left;
		margin-bottom: 5px;
		font-weight: bold;
	}
</style>