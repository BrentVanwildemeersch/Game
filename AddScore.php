<?php
	$username = htmlentities( $_POST['name']);
	$score = $_POST['score'];
	

	$connection = new mysqli("localhost","root","usbw","highscores");
	$stmt = $connection->prepare("INSERT INTO scores(name,score) VALUES(?,?)");
	$stmt->bind_param("ss",$username,$score);
	$stmt->execute();
	$connection->close();
?>
