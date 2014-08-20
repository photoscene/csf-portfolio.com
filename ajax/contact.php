<?php
  
  $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
  $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
  
  if(empty($name)) {
    echo 'A név megadása kötelező';
    exit;
  }
  
  if(empty($email)) {
    echo 'Az email megadása kötelező vagy hibás a formátuma!';
    exit;
  }
  
  if(empty($message)) {
    echo 'Kíváncsi vagyok mit mondasz, írjá vazze!';
    exit;
  }
  
  $header = 'MIME-Version: 1.0'."\r\n";
  $header .= 'Content-type: text/html; charset=utf-8'."\r\n";
  $header .= 'From: '.$name.' <'.$email.'>'."\r\n";

  $success = mail('csabafazekasster@gmail.com', 'Message', nl2br($message), $header);
  echo $success ? 1 : 'Az email küldése nem sikerült!';