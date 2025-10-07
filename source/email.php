<?php
$request = json_decode(file_get_contents('php://input'), true);
$message = $request['message'] ?? null;


if(!empty($message)) {

    $url = "https://colonially-nonhallucinated-lai.ngrok-free.dev/webhook/51e8df37-6fa5-452e-8479-71858cd7bfad";
    $data = [
    "message" => $message
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
    ]);

    curl_setopt($ch, CURLOPT_USERPWD, "kali:alcantaracalvinjade@200629");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // for ngrok testing only
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // for ngrok testing only

    $response = curl_exec($ch);
    curl_close($ch);
    $data = json_decode($response, true);

    if($data['status'] == 'success') {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }

} else {
    echo json_encode(["status" => "error", "message" => "No message received!"]);
}

?>