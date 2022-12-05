@extends('layouts.app')

@section('content')
<div id="app">
    <app></app>
    @vite('resources/js/app.js')
    <script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
</div>
@endsection