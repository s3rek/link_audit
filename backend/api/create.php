<?php
require 'database.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  //if(trim($request->number) === '' || (float)$request->amount < 0)
  //{
   // return http_response_code(400);
  //}

  // Sanitize.
  $email = mysqli_real_escape_string($con, trim($request->email));
  $sumpoints = mysqli_real_escape_string($con, (int)$request->sumpoints);


  // Create.
  $sql = "INSERT INTO `results`(`email`,`sumpoints`) VALUES ('{$email}','{$sumpoints}')";

  if(mysqli_query($con,$sql))
  {
    $id = mysqli_insert_id($con);
    http_response_code(201);
    $policy = [
      'id' => $id,
      'sumpoints' => $sumpoints,
      'email' => $email,
    ];
    echo json_encode($policy);
  }
  else
  {
    http_response_code(422);
  }
}