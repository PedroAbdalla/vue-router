<template>
    <ul class="nav nav-pills">
        <!-- exact verifica toda a rota, sem ele para quando encontra -->
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    </ul>
</template>
