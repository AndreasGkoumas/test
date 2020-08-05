<template>
    <b-container>
        <my-header></my-header>
        <hr>
        <b-row>
            <servers></servers>
            <server-update></server-update>
        </b-row>
        <hr>
        <my-footer></my-footer>
    </b-container>
</template>

<script>

    import Servers from './MyServers'
    import ServerUpdate from './MyServerUpdate'
    import Footer from './MyFooter'
    import Header from './MyHeader'

    export default {
        components: {
            Servers,
            ServerUpdate,
            myFooter: Footer,
            myHeader: Header
        }
    }
</script>

<style>

</style>
