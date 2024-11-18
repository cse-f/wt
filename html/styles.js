//create an file with name styles.css
//step1
inside styles.css write the content below
  .external-style{
  color: pink;
}
//step-2
now in html file write this content
  
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styling Methods in HTML</title>
    <!-- Internal CSS -->
    <style>
        .internal-style {
            color: blue;
            font-size: 20px;
        }
    </style>
    <!-- Link to External CSS -->
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1>Styling Methods in HTML</h1>

    <!-- Inline CSS -->
    <p style="color: red; font-weight: bold;">This paragraph uses inline CSS.</p>

    <!-- Internal CSS -->
    <p class="internal-style">This paragraph uses internal CSS.</p>

    <!-- External CSS -->
    <p class="external-style">This paragraph uses external CSS.</p>
</body>

</html>
