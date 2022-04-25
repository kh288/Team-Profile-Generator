const Manager = require(`../lib/Manager`);
const Engineer = require(`../lib/Engineer`);
const Intern = require(`../lib/Intern`);
require(`inquirer`);

const htmlGenerate = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="sample.css">
    <title>Team Profile</title>
</head>
<body class="text-center bg-light">
    <!-- Top Bar -->
    <div class="bg-secondary text-light p-3">
        <h1>My Team</h1>
    </div>
    <div class="justify-content">
        <!-- Main Area content -->
        <div class="d-md-flex p-3">
            <div class="row gap-3">
                <!-- Generated content goes -->

            </div>
        </div>

    </div>
</body>
</html>`