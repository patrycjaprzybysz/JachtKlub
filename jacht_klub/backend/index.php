<?php
header("Access-Control-Allow-Origin: *");  // "*" could also be a site such as http://www.example.com

include_once('REST.php');

// Get the requested URI
$requestUri = $_SERVER['REQUEST_URI'];

// Extract the last segment after the last slash
$segments = explode('/', rtrim($requestUri, '/'));
$lastSegment = end($segments);

if (str_contains($lastSegment, '?')) {
    $lastSegment = substr($lastSegment, 0, strpos($lastSegment, '?'));
}

// Get the request method
$method = $_SERVER['REQUEST_METHOD'];

// Routing logic
switch ($method) {
    case 'GET':
        switch ($lastSegment) {
            case 'articles':
                echo getArticles();
                break;
            case 'article':
                $id = isset($_GET['id']) ? $_GET['id'] : null;
                echo getArticleById($id);
                break;
            case 'regattas':
                echo getRegattas();
                break;
            case 'regatta-results':
                $year = isset($_GET['year']) ? $_GET['year'] : null;
                $run = isset($_GET['run']) ? $_GET['run'] : null;
                echo getRegattasResult($year, $run);
                break;
            case 'gallery-albums':
                echo getGalleryAlbums();
                break;
            case 'gallery-album':
                $id = isset($_GET['id']) ? $_GET['id'] : null;
                echo getGalleryAlbumById($id);
                break;
            default:
                http_response_code(404);
                echo json_encode(['error' => 'Not Found']);
        }
        break;
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Not Found']);
}
?>