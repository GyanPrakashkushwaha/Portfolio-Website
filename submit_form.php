<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "gyanp7880@gmail.com";
    $subject = "New message from your website";
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"];

    mail($to, $subject, $message, $headers);
    echo "Email sent successfully!";
} else {
    echo "Invalid request!";
}
?>
