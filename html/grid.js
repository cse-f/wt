//grid layout in html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid</title>
  <style>
     .grid-container {
            display: grid;
            grid-template-columns: auto auto auto auto;
            background-color: #2196F3;
            padding: 5px;
        }

        .grid-items {
            background-color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.8);
            padding: 20px;
            font-size: 30px;
            text-align: center;
            align-items: center;
        }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-items">1</div>
    <div class="grid-items">2</div>
    <div class="grid-items">3</div>
    <div class="grid-items">4</div>
    <div class="grid-items">5</div>
    <div class="grid-items">6</div>
    <div class="grid-items">7</div>
    <div class="grid-items">8</div>
    <div class="grid-items">9</div>
    <div class="grid-items">10</div>
    <div class="grid-items">11</div>
</body>
</html>
