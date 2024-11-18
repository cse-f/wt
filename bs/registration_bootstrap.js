//registration form in bootstrap

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <title>Registration Page</title>
</head>

<body>
    <div class="container mt-5">
        <h2>Registration Form</h2>
        <form>
            <!-- TextBox -->
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name">
            </div>

            <!-- TextArea -->
            <div class="form-group">
                <label for="address">Address</label>
                <textarea class="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
            </div>

            <!-- Radio Button -->
            <div class="form-group">
                <label>Gender</label><br>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="male" value="male">
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="female" value="female">
                    <label class="form-check-label" for="female">Female</label>
                </div>
            </div>

            <!-- Checkbox -->
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="subscribe">
                <label class="form-check-label" for="subscribe">Subscribe to newsletter</label>
            </div>

            <!-- Select -->
            <div class="form-group">
                <label for="country">Country</label>
                <select class="form-control" id="country">
                    <option>USA</option>
                    <option>Canada</option>
                    <option>UK</option>
                </select>
            </div>

            <!-- Datalist -->
            <div class="form-group">
                <label for="browser">Favorite Browser</label>
                <input class="form-control" list="browsers" id="browser" placeholder="Type to search...">
                <datalist id="browsers">
                    <option value="Chrome">
                    <option value="Firefox">
                    <option value="Safari">
                    <option value="Edge">
                </datalist>
            </div>

            <!-- Range -->
            <div class="form-group">
                <label for="age">Age</label>
                <input type="range" class="form-control-range" id="age" min="0" max="100">
            </div>

            <!-- Buttons -->
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
        </form>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>
