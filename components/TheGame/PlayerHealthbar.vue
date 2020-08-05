<template>
    <b-progress id="healthbar" class="bar " :value="health" max="100" height="30px" variant="success" show-value />
</template>

<script>

    import { eventBus } from './bus.js'

    export default {
        data: function() {
            return {
                health: 100
            }
        },
        created() {
            eventBus.$on('PlayerHealthChanged', (monsterdamage) => {
                this.health -= monsterdamage
                eventBus.$emit('PlayerHealthUpdate', this.health)
            })
            eventBus.$on('PlayerHealthRestarted', () => {
                this.health = 100
                eventBus.$emit('PlayerHealthUpdate', this.health)
            })
        }
    }
</script>script

<style scoped>
    .bar{
        background: rgb(102, 102, 102);
        width: 400px;
        color: rgba(69, 192, 75, 0.849);
        text-align: center;
        margin: auto;
        max-width: 100%;
    }
</style>
