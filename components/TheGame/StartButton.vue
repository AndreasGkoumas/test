<template>
    <b-row>
        <b-col  v-if="showStart">
            <hr>
            <b-button size="lg" variant="primary" @click="StartGame">START</b-button>
            <hr>
        </b-col>
    </b-row>
</template>

<script>

    import { eventBus } from './bus.js'

    export default {
        data: function() {
            return {
                showStart: true
            }
        },
        created() {
            eventBus.$on('GameRestarted', (flag) => {
                this.showStart = flag
            })
        },
        methods: {
            StartGame() {
                eventBus.$emit('PlayerHealthRestarted')
                eventBus.$emit('MonsterHealthRestarted')
                this.showStart = false
                eventBus.$emit('ShowControls', true)
                eventBus.$emit('ShowLog', false)
            }
        }
    }
</script>
