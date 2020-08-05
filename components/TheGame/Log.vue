<template>
    <div v-if="Show">
        <ul style="list-style-type: none;">
            <li v-for="(message,index) in turns" :key="index" :class="{'player': message.player, 'monster': !message.player}" style="text-align: center;">
                {{ message.message }}
            </li>
        </ul>
    </div>
</template>

<script>

    import { eventBus } from './bus.js'

    export default {
        data: function() {
            return {
                turns: [],
                PlayerMessage: '',
                MonsterMessage: '',
                PlayerCritical: '',
                MonsterCritical: '',
                Show: false
            }
        },
        created() {
            eventBus.$on('ShowLog', (flag) => {
                this.Show = flag
                if (!flag) {
                    this.turns = []
                    console.log('hi?')
                }
            })
            eventBus.$on('PlayerHealthChanged', (monsterdamage) => {
                if (monsterdamage > 0) {
                    this.MonsterMessage = this.MonsterMessage.concat(this.MonsterCritical, 'YOU TOOK ' + monsterdamage + ' DAMAGE')
                    this.updateTurns(false, this.MonsterMessage)
                } else if (monsterdamage === 0) {
                    this.MonsterMessage = 'THE MONSTER MISSED'
                    this.updateTurns(false, this.MonsterMessage)
                } else {
                    this.PlayerMessage = 'YOU HEALED ' + -monsterdamage + ' DAMAGE'
                    this.updateTurns(true, this.PlayerMessage)
                }
            })
            eventBus.$on('MonsterHealthChanged', (playerdamage) => {
                if (playerdamage > 0) {
                    this.PlayerMessage = this.PlayerMessage.concat(this.PlayerCritical, 'YOU DID ' + playerdamage + ' DAMAGE')
                    this.updateTurns(true, this.PlayerMessage)
                } else {
                    this.PlayerMessage = 'YOU MISSED'
                    this.updateTurns(true, this.PlayerMessage)
                }
            })
            eventBus.$on('Critical', (flag) => {
                if (flag) {
                    this.PlayerCritical = 'CRITICAL! '
                    console.log(this.PlayerMessage)
                } else {
                    this.MonsterCritical = 'CRITICAL! '
                    console.log(this.MonsterMessage)
                }
            })
        },
        methods: {
            updateTurns(isPlayer, msg) {
                console.log(this.MonsterMessage, this.PlayerMessage, 'OK?')
                this.turns.unshift({ player: isPlayer, message: msg })
                console.log(this.turns)
                this.MonsterMessage = ''
                this.PlayerMessage = ''
                this.PlayerCritical = ''
                this.MonsterCritical = ''
            }
        }
    }
</script>

<style scoped>
    .monster{
        font-size:20px;
        color:red;
        background: lightcoral;
        margin: auto;
        text-align: center;
        width: 100%;
    }
    .player{
        font-size:20px;
        color:blue;
        background: lightcyan;
        margin: auto;
        text-align: center;
        width: 100%;
    }
</style>
