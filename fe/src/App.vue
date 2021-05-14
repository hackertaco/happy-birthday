<template>
<router-view />
</template>

<script>
import firebase from './util/firebase'
export default {
    data() {
        return {
            isLoggedIn: false,
            authUser: {}
        }
    },
    mounted() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.isLoggedIn = true;
                this.authUser = user;
            } else {
                this.isLoggedIn = false;
                this.authUser = {}
            }
        })
    }
}
</script>

<style>

</style>
