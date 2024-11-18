//there are total 4 types of selectors
//1.global selector(*)
//2.element selector(using elements like p,h1,h2 etc)
//3.class selector(.)
//4.id selector(#)

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS3 Selectors</title>
    <style>
        /* global selector */
        *{
            background-color: red;
        }
        /* element selector */
        h1 {
            color: darkblue;
        }
        /* class selector */
        .class-selector {
            color: green;
            font-weight: bold;
        }
        /* id selector */
        #id-selector {
            color: red;
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <h1>CSS3 Selectors</h1>

    <!-- Element Selector -->
    <p>This paragraph is styled using an element selector.</p>

    <!-- Class Selector -->
    <p class="class-selector">This paragraph is styled using a class selector.</p>

    <!-- ID Selector -->
    <p id="id-selector">This paragraph is styled using an ID selector.</p>


</body>

</html>
