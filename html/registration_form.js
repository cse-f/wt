//registration Form

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form</title>
</head>
<body>
  <form >
    <label for="name">User Name</label>
    <input type="text" id="name" placeholder="Enter your name" name="name" required>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" required>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password" required>
    <button onclick="register()">Submit</button>
  </form>
  <script>
    function register(){
      alert("registration succesful");
    }
    </script>
  
</body>
</html>
