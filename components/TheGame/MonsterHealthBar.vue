<template>
    <b-progress id="healthbar" class="bar text-center" :value="health" max="100" height="30px" variant="danger" show-value />
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
            eventBus.$on('MonsterHealthChanged', (playerdamage) => {
                this.health -= playerdamage
                eventBus.$emit('MonsterHealthUpdate', this.health)
            })
            eventBus.$on('MonsterHealthRestarted', () => {
                this.health = 100
                eventBus.$emit('MonsterHealthUpdate', this.health)
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
