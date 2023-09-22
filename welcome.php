<?php

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="welcome.css">
</head>

<body>
    <?php echo "<h1>Welcome " . $_SESSION['username'] . "</h1>"; ?>
    <H1>Selamat kamu berhasil Login</H1>
    <a href="logout.php">Logout</a> <br>
    <a href="halaman.php">Klik ini untuk ke halaman awal</a>

</body>

</html>