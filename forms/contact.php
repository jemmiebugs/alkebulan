<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

require '../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


try {
  $mail = new PHPMailer();


  $mail->SMTPDebug = 2;                   // Enable verbose debug output
  $mail->isSMTP();                        // Set mailer to use SMTP
  $mail->Host    = 'smtp-mail.outlook.com';    // Specify main SMTP server
  $mail->SMTPAuth   = true;               // Enable SMTP authentication
  $mail->Username   = 'contact@galleryaffinity.com';     // SMTP username
  $mail->Password   = 'Affinity20';         // SMTP password
  $mail->SMTPSecure = 'TLS';              // Enable TLS encryption, 'ssl' also accepted
  $mail->Port       = 587;                // TCP port to connect to



  $mail->setFrom('contact@galleryaffinity.com', 'Contact Gallery');           // Set sender of the mail
  $mail->addAddress('contact@galleryaffinity.com');           // Add a recipient


  $mail->isHTML(false);
  $mail->Subject = 'Subject';
  $mail->Body    = $_POST['name'] . $_POST['email'] . $_POST['subject'] . $_POST['message'];
  $mail->AltBody = $_POST['name'] . $_POST['email'] . $_POST['subject'] . $_POST['message'];

  $mail->send();

//  echo "Mail has been sent successfully!";
} catch (PHPMailer\PHPMailer\Exception $e) {
//  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
exit;
/**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
//  $receiving_email_address = 'oyindamolamuritala@gmail.com';
//
//  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
//    include( $php_email_form );
//  } else {
//    die( 'Unable to load the "PHP Email Form" Library!');
//  }
//
//  $contact = new PHP_Email_Form;
//  $contact->ajax = true;
//
//
//  $contact->to = $receiving_email_address;
//  $contact->from_name = $_POST['name'];
//  $contact->from_email = $_POST['email'];
//  $contact->subject = $_POST['subject'];
//
//  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
//  /*
//  $contact->smtp = array(
//    'host' => 'example.com',
//    'username' => 'example',
//    'password' => 'pass',
//    'port' => '587'
//  );
//  */
//
//  $contact->add_message( $_POST['name'], 'From');
//  $contact->add_message( $_POST['email'], 'Email');
//  $contact->add_message( $_POST['message'], 'Message', 10);
//
//  echo $contact->send();
?>
