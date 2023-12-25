<?php

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$phone=$_REQUEST['subject'];
$massege=$_REQUEST['massege'];

if(isset($_POST['submit'])){

    
    $host="localhost";
    $user="root";
    $db="programming";
    
    $conn = mysqli_connect($host,$user,$db);
    
    $insert = "insert into user values ('$firstname','$email','$subject','$massege')";

    mysqli_query($conn,$insert);

    if($conn){
        echo("login right");
    }
    else{
        echo("login faild");
    }
}
?>