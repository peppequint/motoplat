<html lang="en">
<head>
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="icon" type="image/png" href="img/favicon_motoplat.png" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Source+Sans+Pro:300,400,700" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
    <title>Motoplat CV</title>
    <script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-98751329-1', 'auto');
	  ga('send', 'pageview');

	</script>
</head>
<body>
	<main>
	<section id="form_send">
		<article>
			<img src="img/logo_motoplat.png" alt="motoplat logo">
			<h1>Thank you for filling out the contact form.</h1>
			<p>We will contact you as soon as possible.</p>
			<a href="index.html"><button>go back</button></a>
		</article>
	</section>
		<?php
			if(isset($_POST['submit'])) {
				$company		= $_POST['company_name'];
				$first			= $_POST['first_name'];
				$last				= $_POST['last_name'];
				$country		= $_POST['country'];
				$email			= $_POST['email_address'];
				$content		= $_POST['message'];

			$to = 'info@motoplat.nl';

			$subject = $_POST['subject_name'];

			$message = '<html><body>';
			$message .= '<img src="http://beta.motoplat.nl/img/logo_motoplat_mail.png" alt="Motoplat Logo" />';
			$message .= '<table rules="all" style="border-color: #F5F5F5;" cellpadding="10">';
			$message .= '<tr style="background: #FAFAFA;"><td><strong>Company:</strong></td><td>' .$company. '</td></tr>';
			$message .= '<tr><td><strong>First name:</strong></td><td>' .$first. '</td></tr>';
			$message .= '<tr style="background: #FAFAFA;"><td><strong>Last name:</strong></td><td>' .$last. '</td></tr>';
			$message .= '<tr><td><strong>Country:</strong></td><td>' .$country. '</td></tr>';
			$message .= '<tr style="background: #FAFAFA;"><td><strong>Email:</strong></td><td>' .$email. '</td></tr>';
			$message .= '<tr><td><strong>Subject:</strong></td><td>' .$subject. '</td></tr>';
			$message .= '<tr style="background: #FAFAFA;"><td><strong>Message:</strong></td><td>' .$content. '</td></tr>';
			$message .= '<tr><td><strong>Website:</strong></td><td>Engelse versie</td></tr>';
			$message .= '</table>';
			$message .= '</body></html>';
		
			$headers[] = 'MIME-Version: 1.0';
			$headers[] = 'Content-type: text/html; charset=UTF-8';

			$headers[] = "From: $email \r\n";

			mail($to, $subject, $message, implode("\r\n", $headers));
			}
		?>
	</main>
</body>
</html>