@extends("layouts.header")


@section("title",'Login Page')


@section("content")

<main class="main">
<form class="form" action="">
    <span id="mssg"></span>
    <input id="nome"  type="text" placeholder="Nome:">
    <input id="email" type="email" placeholder="Email:">
    <input id="password" type="password" placeholder="Password:">
    <input id="ConfirmPassword" type="password" placeholder="Confirm Password:">
    <input id="btn" type="submit" value="Login" >
</form>
{{--Form--}}
</main> {{--main--}}


@endsection


