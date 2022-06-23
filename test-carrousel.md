<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="https://cdn.ghosteshop.com/Images/3ds/Ghost%20eShop%20Alternative%203DS/screenshot/01-Checking%20Update.png" alt="Checking Update">
      <div class="carousel-caption">
        <p>Checking Update</p>
      </div>
    </div>

  <div class="item">
      <img src="https://cdn.ghosteshop.com/Images/3ds/Ghost%20eShop%20Alternative%203DS/screenshot/02-Main%20Menu.png" alt="Main Menu">
      <div class="carousel-caption">
        <p>Main Menu</p>
      </div>
    </div>

  <div class="item">
      <img src="https://cdn.ghosteshop.com/Images/3ds/Ghost%20eShop%20Alternative%203DS/screenshot/07-Search%20Author.png" alt="Search Author">
      <div class="carousel-caption">
        <p>Search Author</p>
      </div>
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>