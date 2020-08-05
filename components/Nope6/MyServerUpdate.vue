<template>
    <b-row xs="12">
        <b-col>
            <p v-if="!server">Select a server</p>
            <p v-else>Server #{{ server.id }} selected, Status {{ server.status }}</p>
            <b-button @click="ChangeStatus"> Change Status </b-button>
        </b-col>
    </b-row>
</template>

<script>

    import { eventBus } from './nope6.js'

    export default {
        data: function() {
            return {
                server: null
            }
        },
        created() {
            eventBus.$on('SelectedServer', (server) => {
                this.server = server
            })
        },
        methods: {
            ChangeStatus() {
                this.server.status = 'Normal'
            }
        }
    }
</script>
