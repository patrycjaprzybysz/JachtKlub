<?php
include_once('database/connection.php');

function getArticles()
{
    $sql = 'SELECT * FROM articles
            ORDER BY id DESC';
    return json_encode(pg_fetch_all(pg_query($sql)));
}

function getArticleById($id)
{
    $sql = 'SELECT * FROM articles
            WHERE id=' . $id;
    return json_encode(pg_fetch_object(pg_query($sql)));
}

function getRegattas()
{
    $sql = 'SELECT * FROM regatta
            ORDER BY id DESC';

    return json_encode(pg_fetch_all(pg_query($sql)));
}

function getRegattasResult($year, $run)
{
    $sql = 'SELECT * FROM regatta_results_' . $year . '_' . $run;

    return json_encode(pg_fetch_all(pg_query($sql)));
}

function getGalleryAlbums()
{
    $sql = 'SELECT * FROM gallery_albums
            ORDER BY id DESC';

    $articles = pg_fetch_all(pg_query($sql));

    foreach ($articles as $index => $article) {
        $article['photos'] = scandir($article['folder_path']);
        $article['photos'] = array_slice($article['photos'], 2);
        $articles[$index] = $article;
    }
    return json_encode($articles);
}

function getGalleryAlbumById($id)
{
    $sql = 'SELECT * FROM gallery_albums
            WHERE id=' . $id;

    $article = pg_fetch_all(pg_query($sql))[0];

    $article['photos'] = scandir($article['folder_path']);
    $article['photos'] = array_slice($article['photos'], 2);

    return json_encode($article);
}

echo getRegattasResult('2023', 1);
?>