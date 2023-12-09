<?php
$host = "localhost";
$port = "5432";
$dbname = "database";
$user = "postgres";
$password = "1258";
$connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password}";
$dbconn = pg_connect($connection_string);
pg_set_client_encoding($dbconn, "UNICODE");

?>