
<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $isclient = $_POST["isclient"];

    // Validate form data
    if(empty($name) || empty($email) || empty($message)) {
        // If required fields are empty, return error message
        echo "Please fill in all required fields.";
        exit();
    } else {
        // If all fields are filled, continue with sending email
        $to = "kalawateg@gmail.com";
        $subject = "New message from website contact form";
        $message_body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message\nIs client: $isclient";
        $headers = "From: $email\n";
        $headers .= "Reply-To: $email\n";
        
        // Send email
        if(mail($to, $subject, $message_body, $headers)) {
            // If email sent successfully, return success message
            echo "Thank you for contacting us! We will get back to you soon.";
        } else {
            // If email sending failed, return error message
            echo "Sorry, there was an error sending your message. Please try again later.";
        }
    }
} else {
    // If request method is not POST, return error message
    echo "Sorry, there was an error processing your request. Please try again later.";
}
?>
