<?php
include_once('database/connection.php');

function getArticles()
{
    $sql = 'SELECT * FROM articles ORDER BY id DESC';
    $result = pg_query_params($GLOBALS['dbconn'], $sql, []);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    return json_encode(pg_fetch_all($result));
}

function getArticleById($id)
{
    $sql = 'SELECT * FROM articles WHERE id=$1';
    $result = pg_query_params($GLOBALS['dbconn'], $sql, [$id]);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    return json_encode(pg_fetch_object($result));
}

function getRegattas()
{
    $sql = 'SELECT * FROM regatta ORDER BY id DESC';
    $result = pg_query_params($GLOBALS['dbconn'], $sql, []);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    return json_encode(pg_fetch_all($result));
}

function getRegattasResult($year, $run)
{
    $tableName = 'regatta_results_' . $year . '_' . $run;
    $sql = "SELECT * FROM $tableName";
    $result = pg_query_params($GLOBALS['dbconn'], $sql, []);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    return json_encode(pg_fetch_all($result));
}

function getGalleryAlbums()
{
    $sql = 'SELECT * FROM gallery_albums ORDER BY id DESC';
    $result = pg_query_params($GLOBALS['dbconn'], $sql, []);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    $albums = pg_fetch_all($result);

    foreach ($albums as $index => $album) {
        $folderPath = $album['folder_path'];
        $photos = array_slice(scandir("../frontend/" . $folderPath), 2);
        $albums[$index]['photos'] = $photos;
    }

    return json_encode($albums);
}

function getGalleryAlbumById($id)
{
    $sql = 'SELECT * FROM gallery_albums WHERE id=$1';
    $result = pg_query_params($GLOBALS['dbconn'], $sql, [$id]);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    $album = pg_fetch_assoc($result);

    if ($album) {
        $folderPath = $album['folder_path'];
        $photos = array_slice(scandir("../frontend/" . $folderPath), 2);
        $album['photos'] = $photos;
    }

    return json_encode($album);
}

function addCrew($vesselName, $vesselType, $mark, $length, $captain, $qualifications, $dateOfBirth, $address, $phone, $club, $crewmen)
{
    $sql = 'INSERT INTO crew 
            (vessel_name, vessel_type, mark, length, captain, qualifications, date_of_birth, address, phone, club, crewmen) 
            VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';

    $params = [
        $vesselName,
        $vesselType,
        $mark,
        $length,
        $captain,
        $qualifications,
        $dateOfBirth,
        $address,
        $phone,
        $club,
        $crewmen,
    ];

    $result = pg_query_params($GLOBALS['dbconn'], $sql, $params);

    if ($result === false) {
        // Handle database query error
        return json_encode(['error' => 'Database error']);
    }

    return json_encode(['message' => 'Crew data added successfully']);
}

?>