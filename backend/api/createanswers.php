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
  $request=json_encode($request);
  $request=str_replace("[","(",$request);
  $request=str_replace("]",")",$request);
  $request=substr($request, 1, -1);

  // Create.
  $sql = "INSERT INTO `answers`(`questionid`,`answerid`, `resultid`) VALUES $request";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $policy = ["succes"];
    echo json_encode($policy);
  }
  else
  {
    http_response_code(422);
  }
}