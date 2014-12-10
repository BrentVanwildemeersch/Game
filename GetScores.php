<?php
$servername = "localhost";
$username = "root";
$password = "usbw";
$dbname = "highscores";

// Create connection

$rows = [];
$myarray = array();
$connection = new MySQLi('localhost:3307' , 'root' , 'usbw' ,'highscores');
    
    if($connection->connect_errno)
    {
        die("Fout bij connectie". print_r(connect_error));
    }


$sql = "SELECT id, name, score  FROM scores ORDER BY score DESC LIMIT 5";
$result = $connection->query($sql);

if($connection->errno)
     {
         die("Fout bij query : ".print_r($connection->error));
     }

if ($result->num_rows > 0) {
    // output data of each row
    $temparray = array();
    while($row = $result->fetch_assoc()) {
       // echo "id: " . $row["id"]. " - Name: " . $row["name"]. " " . $row["score"]. "<br>";
          $temparray = $row;
          array_push($myarray,$temparray);
          
    }
    echo json_encode($myarray);
} else {
    echo "0 results";
}
$connection->close()
     
?>