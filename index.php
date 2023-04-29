<?php

require_once realpath(__DIR__ . "/vendor/autoload.php");

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$weatherApiKey = getenv("WEATHER_API_KEY");
$locationApiKey = getenv("LOCATION_API_KEY");
