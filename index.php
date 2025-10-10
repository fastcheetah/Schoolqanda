<?php
session_start();

include("connection.php");
include("functions.php");
$user_data = check_login($con);


?>
<!DOCTYPE html>
<?php include 'index.html'; ?>
</html>