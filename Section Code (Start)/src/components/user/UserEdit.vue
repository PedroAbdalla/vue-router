<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analyties: {{ $route.query.q }}</p>
        <button class="btn btn-primary" @click="confirmed = true">confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some thing like that</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.confirmed == true) {
            next()
        } else {
            if(confirm('Are you sure')) {
                next()
            } else {
                next(false)
            }
        }
            
    }
}
</script>
