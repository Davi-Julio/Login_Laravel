<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield("title")</title>
    <link rel="stylesheet" href="/Css/style.css">
</head>
<body>

<header class="header">
    <div class="title-header">
        <h1>Log in</h1>
    </div>{{--title header--}}

    <nav class="nav">
        <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/Contact/contato">Contact</a></li>
            <li><a href="/AboutUs/AboutUS">About US</a></li>
        </ol>
    </nav>{{--nav--}}
</header> {{--header--}}


@yield("content")


<script src="/js/Jquery/jquery-3.7.1.js"></script>
<script src="/js/script.js"></script>

    
</body>
</html>