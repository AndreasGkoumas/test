<template>
    <b-col xs="6">
        <ul>
            <server v-for="server in servers" :key="server" :server="server"></server>
        </ul>
    </b-col>
</template>

<script>

    import Server from './Server.vue'

    export default {
        components: {
            Server
        },
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Serious' },
                    { id: 3, status: 'Idle' },
                    { id: 4, status: 'Unknown' },
                    { id: 5, status: 'Critical' }
                ]
            }
        }

    }
</script>
