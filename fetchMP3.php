<?php

session_start();
$w = $_GET['w'];

// ping the API URL to start conversions
$ch = curl_init();
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_COOKIEFILE, './_cookie.txt');
curl_setopt($ch, CURLOPT_COOKIEJAR, './_cookie.txt');
curl_setopt($ch, CURLOPT_URL, 'http://youtubeinmp3.com/download/?n=1&video=http://www.youtube.com/watch?v=' . $w);
curl_exec($ch);
$op = curl_exec($ch);

// wait for a few seconds for the conversion to complete
sleep(rand(10, 20));
echo "{
	downloadURL : 'http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v={$w}'
}";