<head>
	<title>Sign Up Page Form</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f1f1f1;
		}

		h1 {
			text-align: center;
			margin-top: 30px;
		}

		form {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			margin-top: 30px;
		}

		.column {
		  display: flex;
		  flex-direction: column;
		  width: 45%;
		  margin: 10px;
		  padding: 20px;
		  background-color: white;
		  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		  border-radius: 10px;
		  transition: box-shadow 0.3s ease-in-out;
		}

		.column:hover {
			box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		}

		.photo {
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  height: 200px;
		  margin-bottom: 20px;
		  overflow: hidden;
		  position: relative;
		  border-radius: 50%;
		  background-color: #f1f1f1;
		}

		.photo img {
		  max-height: 100%;
		  max-width: 100%;
		  object-fit: cover;
		  position: absolute;
		  top: 50%;
		  left: 50%;
		  transform: translate(-50%, -50%);
		}

		input[type="file"] {
			display: none;
		}

		.custom-file-upload {
		    display: inline-block;
		    padding: 6px 12px;
		    cursor: pointer;
		    background-color: #4CAF50;
		    color: white;
		    border-radius: 4px;
		    transition: background-color 0.3s ease-in-out;
		}

		.custom-file-upload:hover {
			background-color: #3e8e41;
		}

		label {
			margin-top: 10px;
			font-size: 16px;
			font-weight: bold;
		}

		input[type="text"],
		input[type="number"],
		input[type="email"],
		select {
			width: 100%;
			padding: 10px;
			margin-top: 5px;
			margin-bottom: 20px;
			border: none;
			border-radius: 4px;
			background-color: #f1f1f1;
			font-size: 16px;
			color: #333;
			transition: box-shadow 0.3s ease-in-out;
		}

		input[type="text"]:focus,
		input[type="number"]:focus,
		input[type="email"]:focus,
		select:focus {
			outline: none;
			box-shadow: 0 0 5px #4CAF50;
		}

		button {
			display: block;
			margin: 10px auto 0 auto;
			padding: 10px;
			border: none;
			border-radius: 4px;
			background-color: #4CAF50;
			color: white;
			font-size: 16px;
			cursor: pointer;
			transition: background-color 0.3s ease-in-out;
        }
	</style>
</head>
<body>
	<h1>Sign Up Page Form</h1>
	<form action="#" method="post">
		<div class="column">
			<div class="photo">
				<img src="https://via.placeholder.com/200x200" alt="Profile Picture">
			</div>
			<input type="file" id="photo" name="photo" accept="image/*">
			<label for="photo">Upload a photo</label>
			<button type="button" id="submit-btn">Submit</button>
		</div>
		<div class="column">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" required><br>

			<label for="last-name">Last Name:</label>
			<input type="text" id="last-name" name="last-name" required><br>

			<label for="specialty">Specialty:</label>
			<input type="text" id="specialty" name="specialty" required><br>

			<label for="age">Age:</label>
			<input type="number" id="age" name="age" required><br>

			<label for="gmail">Gmail:</label>
			<input type="email" id="gmail" name="gmail" required><br>

			<label for="gender">Gender:</label>
			<select id="gender" name="gender" required>
				<option value="">--Please choose an option--</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select><br>
		</div>
	</form>
</body>
