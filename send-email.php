<?php

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

$mailConfig = file_exists(__DIR__ . '/mail-config.php')
    ? require __DIR__ . '/mail-config.php'
    : [];

$smtpHost     = $mailConfig['smtp_host'] ?? 'smtp.gmail.com';
$smtpUser     = $mailConfig['smtp_user'] ?? 'presslogic36@gmail.com';
$smtpPassword = $mailConfig['smtp_password'] ?? '';
$smtpPort     = (int) ($mailConfig['smtp_port'] ?? 587);
$fromEmail    = $mailConfig['from_email'] ?? 'presslogic36@gmail.com';
$fromName     = $mailConfig['from_name'] ?? 'BAUNOVA Website';
$recipients   = $mailConfig['recipients'] ?? ['arditademi2105@gmail.com'];
$siteUrl      = $mailConfig['site_url'] ?? 'https://baunova-maler.de';
$thankYouPage = $mailConfig['thank_you'] ?? 'danke.php';
$errorPage    = $mailConfig['error_page'] ?? 'fehler.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . $errorPage);
    exit;
}

// Honeypot
if (!empty($_POST['website'])) {
    header('Location: ' . $thankYouPage);
    exit;
}

$name    = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email   = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(trim($_POST['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$service = htmlspecialchars(trim($_POST['service'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = nl2br(htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES, 'UTF-8'));
$messagePlain = trim($_POST['message'] ?? '');

$serviceLabels = [
    'maler'   => 'Malerarbeiten',
    'stuck'   => 'Stuckateurarbeiten',
    'fassade' => 'Fassadengestaltung',
    'kombi'   => 'Kombiniert / Sonstiges',
];
$serviceLabel = $serviceLabels[$service] ?? $service;

if ($name === '' || $email === '' || $messagePlain === '') {
    http_response_code(400);
    header('Location: ' . $errorPage);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    header('Location: ' . $errorPage);
    exit;
}

if ($smtpPassword === '' || $smtpPassword === 'your-gmail-app-password') {
    error_log('BAUNOVA mail: smtp_password not set in mail-config.php');
    header('Location: ' . $errorPage);
    exit;
}

$subject = "BAUNOVA Anfrage von {$name}" . ($serviceLabel !== '' ? " — {$serviceLabel}" : '');
$mail = new PHPMailer(true);

try {
    if (!ob_get_level()) {
        ob_start();
    }

    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtpPort;
    $mail->SMTPDebug  = 0;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($fromEmail, $fromName);
    $mail->addReplyTo($email, $name);

    foreach ($recipients as $recipient) {
        $mail->addAddress($recipient);
    }

    $phoneRow = $phone !== '' ? "<p><strong>Telefon:</strong> {$phone}</p>" : '';
    $phoneAlt = $phone !== '' ? "Telefon: {$phone}\n" : '';

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = "
        <div style='font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#14161a;'>
            <h2 style='color:#2b6cff;margin:0 0 1rem;'>Neue Anfrage — BAUNOVA</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>E-Mail:</strong> <a href='mailto:{$email}'>{$email}</a></p>
            {$phoneRow}
            <p><strong>Leistung:</strong> {$serviceLabel}</p>
            <p><strong>Nachricht:</strong><br>{$message}</p>
            <hr style='border:0;border-top:1px solid #eee;margin:1.5rem 0;'>
            <p style='font-size:12px;color:#888;'>
                Gesendet über das Kontaktformular auf
                <a href='{$siteUrl}' style='color:#2b6cff;'>baunova-maler.de</a>.
            </p>
        </div>
    ";
    $mail->AltBody = "Neue BAUNOVA Anfrage\n\n"
        . "Name: {$name}\n"
        . "E-Mail: {$email}\n"
        . $phoneAlt
        . "Leistung: {$serviceLabel}\n\n"
        . "Nachricht:\n{$messagePlain}";

    $mail->send();

    if (ob_get_length()) {
        ob_end_clean();
    }

    header('Location: ' . $thankYouPage);
    exit;
} catch (Exception $e) {
    error_log('BAUNOVA mail error: ' . $mail->ErrorInfo);

    $isLocal = in_array($_SERVER['SERVER_NAME'] ?? '', ['localhost', '127.0.0.1'], true);

    if ($isLocal) {
        http_response_code(500);
        echo 'Mailer error: ' . htmlspecialchars($mail->ErrorInfo);
        exit;
    }

    header('Location: ' . $errorPage);
    exit;
}
