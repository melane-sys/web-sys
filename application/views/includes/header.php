<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Firmbee.com - Free Project Management Platform for remote teams">
        <title><?= $title ?></title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/0e035b9984.js" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/0e035b9984.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="<?php echo base_url('css/main.css'); ?>">
    </head>
    <nav class="navbar navbar-expand-xl fixed-top">
        <div class="container">
            <a class="navbar-brand" href="./index.php"><img class="w-100" src="<?php //echo base_url('img/img-melane-logo.png');  ?>" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link  active" href="./index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./aboutus.php">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./blog.php">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.php">Pricing</a>
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.php">Portfolio</a>
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="./contact.php">Contact</a>
                    </li>   
                </ul>
                <ul class="right navbar-nav ms-auto">
                    <li class="nav-item-right">
                        <a class="nav-link-right" href="#">Login / Sign Up</a>
                    </li>  
                </ul>
            </div>
        </div>
    </nav>
</html>

