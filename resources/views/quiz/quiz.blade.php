<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Quiz</title>
    <style>
        .question{
            background-color: black;
        }
        .body-container{
            padding: 15px;
        }
        .navbar-brand{
            font-weight:bold;
            background-color:transparent;
            border:0px;
            padding:10px;
            border-radius:20px;
            transition:0.3s;
        }
        .navbar-brand:hover{
            background-color:#2196f3;
            padding:0px 10px;
            color:white !important;
            border-radius:20px;
        }
    </style>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body style="background-color:#f5f5f5;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
          <button class="navbar-brand" href="#">SiMas Kuli</button>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="#">Courses</a>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
              </li>
          </ul>
          </div>
      </div>
    </nav>

    <div class="body-container">
        <h1>PELAJARAN LOREM IPSUM</h1>
        <div class="card" style="margin:10px;">
            <div class="card-body">
                <p style="font-weight:bold;">Question 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, erat a scelerisque ultrices, tortor mauris hendrerit lacus, ac luctus urna quam non quam. Duis eget congue dolor. Praesent sit amet porttitor purus. Suspendisse porttitor efficitur ultricies. Integer quis pulvinar lectus. Nulla pellentesque, metus sed convallis fermentum, justo sapien hendrerit est, eget venenatis justo urna non libero. Curabitur ultrices lorem eros. Quisque aliquam ultricies urna ut accumsan.</p>
                <p style="color:gray">Select one:</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Soal1" id="pilihanASoal1">
                    <label class="form-check-label" for="pilihanASoal">
                        Lorem
                    </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal1" id="pilihanBSoal1">
                  <label class="form-check-label" for="pilihanBSoal1">
                        ipsum
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal1" id="pilihanCSoal1">
                  <label class="form-check-label" for="pilihanCSoal1">
                        dolor
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal1" id="pilihanDSoal1">
                  <label class="form-check-label" for="pilihanDSoal1">
                        sit
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal1" id="pilihanESoal1">
                  <label class="form-check-label" for="pilihanESoal1">
                        amet
                  </label>
                </div>
            </div>
        </div>
        <div class="card" style="margin:10px;">
            <div class="card-body">
                <p style="font-weight:bold;">Question 2</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, erat a scelerisque ultrices, tortor mauris hendrerit lacus, ac luctus urna quam non quam. Duis eget congue dolor. Praesent sit amet porttitor purus. Suspendisse porttitor efficitur ultricies. Integer quis pulvinar lectus. Nulla pellentesque, metus sed convallis fermentum, justo sapien hendrerit est, eget venenatis justo urna non libero. Curabitur ultrices lorem eros. Quisque aliquam ultricies urna ut accumsan.</p>
                <p style="color:gray">Select one:</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Soal2" id="pilihanASoal2">
                    <label class="form-check-label" for="pilihanASoal2">
                        Lorem
                    </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal2" id="pilihanBSoal2">
                  <label class="form-check-label" for="pilihanBSoal2">
                        ipsum
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal2" id="pilihanCSoal2">
                  <label class="form-check-label" for="pilihanCSoal2">
                        dolor
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal2" id="pilihanDSoal2">
                  <label class="form-check-label" for="pilihanDSoal2">
                        sit
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal2" id="pilihanESoal2">
                  <label class="form-check-label" for="pilihanESoal2">
                        amet
                  </label>
                </div>
            </div>
        </div>
        <div class="card" style="margin:10px;">
            <div class="card-body">
                <p style="font-weight:bold;">Question 3</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, erat a scelerisque ultrices, tortor mauris hendrerit lacus, ac luctus urna quam non quam. Duis eget congue dolor. Praesent sit amet porttitor purus. Suspendisse porttitor efficitur ultricies. Integer quis pulvinar lectus. Nulla pellentesque, metus sed convallis fermentum, justo sapien hendrerit est, eget venenatis justo urna non libero. Curabitur ultrices lorem eros. Quisque aliquam ultricies urna ut accumsan.</p>
                <p style="color:gray">Select one:</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="Soal3" id="pilihanASoal3">
                    <label class="form-check-label" for="pilihanASoal3">
                        Lorem
                    </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal3" id="pilihanBSoal3">
                  <label class="form-check-label" for="pilihanBSoal3">
                        ipsum
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal3" id="pilihanCSoal3">
                  <label class="form-check-label" for="pilihanCSoal3">
                        dolor
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal3" id="pilihanDSoal3">
                  <label class="form-check-label" for="pilihanDSoal3">
                        sit
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="Soal3" id="pilihanESoal3">
                  <label class="form-check-label" for="pilihanESoal3">
                        amet
                  </label>
                </div>
            </div>
        </div>
    </div>
    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>