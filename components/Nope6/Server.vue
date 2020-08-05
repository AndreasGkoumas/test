<template>
    <b-col>
        <li
            style="cursor: pointer"
            @click="SelectedServer">
            Server #{{ server.id }}--Status {{ server.status }}
            <hr>
        </li>
    </b-col>
</template>

<script>

    import { eventBus } from './nope6.js'

    export default {
        props: ['server'],
        methods: {
            SelectedServer() {
                eventBus.$emit('SelectedServer', this.server)
            }
        }
    }
</script>
