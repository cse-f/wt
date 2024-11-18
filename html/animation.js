//animation

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animation Example</title>
    <style>
      .cls {
        background-color: red;
        height: 100px;
        width: 100px;
        animation-name: yashwanth;
        animation-duration: 4s; 
        animation-iteration-count: infinite; 
      }
      @keyframes yashwanth {
        0% {
            margin-left: 0px; 
            margin-top: 0px;  
        }
        25% {
            margin-left: 100px;
            margin-top: 0px;
        }
        50% {
            margin-left: 100px;  
            margin-top: 100px;
        }
        100% {
            margin-left: 0px; 
            margin-top: 100px; 
        }
        0%{
          margin-left: 0px;
          margin-top: 0px;  
        }
      }
    </style>
</head>
<body>
    <div class="cls"></div>
</body>
</html>
