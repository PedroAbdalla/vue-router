<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>Routingg</h1>
            </div>
            <hr>
            <router-view name="header-top"></router-view>
            <router-view></router-view>
            <router-view name="header-bottom"></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader: Header
        }
    }
</script>

<style>
</style>
