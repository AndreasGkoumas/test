<template>
    <b-row>
        <b-col v-if="showControls">
            <hr>
            <b-button size="lg" variant="warning" @click="Attack">ATTACK</b-button> &nbsp;
            <b-button v-if="cooldown>=2" size="lg" variant="danger" @click="SpecialAttack">SPECIAL ATTACK</b-button>&nbsp;
            <b-button v-else size="lg" variant="danger" disabled>SPECIAL ATTACK</b-button>&nbsp;
            <b-button v-if="playerhealth >= 100" size="lg" variant="success" disabled @click="Heal">HEAL</b-button>&nbsp;
            <b-button v-else size="lg" variant="success" @click="Heal">HEAL</b-button>&nbsp;
            <b-button size="lg" @click="Retreat">RETREAT</b-button>
            <hr>
        </b-col>
    </b-row>
</template>

<script>

    import { eventBus } from './bus.js'

    export default {
        data: function() {
            return {
                showControls: false,
                cooldown: 2,
                playerhealth: 100,
                monsterhealth: 100,
                playerdamage: 0,
                monsterdamage: 0
            }
        },
        created() {
            eventBus.$on('ShowControls', (flag) => {
                this.showControls = flag
            })
            eventBus.$on('PlayerHealthUpdate', (Health) => {
                this.playerhealth = Health
            })
            eventBus.$on('MonsterHealthUpdate', (Health) => {
                this.monsterhealth = Health
            })
        },
        methods: {
            Attack() {
                this.cooldown++
                eventBus.$emit('ShowLog', true)
                this.PlayerRoll()
                eventBus.$emit('MonsterHealthChanged', this.playerdamage)
                this.Win()
                this.MonsterRoll()
                eventBus.$emit('PlayerHealthChanged', this.monsterdamage)
                this.Lose()
            },
            SpecialAttack() {
                this.cooldown = 0
                eventBus.$emit('ShowLog', true)
                this.PlayerRoll()
                this.playerdamage *= 3
                eventBus.$emit('MonsterHealthChanged', this.playerdamage)
                this.Win()
                this.MonsterRoll()
                eventBus.$emit('PlayerHealthChanged', this.monsterdamage)
                this.Lose()
            },
            Heal() {
                this.cooldown++
                eventBus.$emit('ShowLog', true)
                var heal = (Math.floor(Math.random() * 10) + 1)
                if (this.playerhealth + heal <= 100) {
                    eventBus.$emit('PlayerHealthChanged', -heal)
                } else {
                    this.playerhealth = 100
                    eventBus.$emit('PlayerHealed', 'max')
                }
                this.MonsterRoll()
                eventBus.$emit('PlayerHealthChanged', this.monsterdamage)
                this.Lose()
            },
            Retreat() {
                alert('You fled! COWARD')
                eventBus.$emit('GameRestarted', true)
                this.cooldown = 0
                this.showControls = false
                this.cooldown = 2
            },
            Win() {
                if (this.monsterhealth <= 0) {
                    alert('You have slain the enemy!')
                    eventBus.$emit('GameRestarted', true)
                    this.showControls = false
                    this.cooldown = 2
                }
            },
            Lose() {
                if (this.playerhealth <= 0) {
                    alert('You died!')
                    eventBus.$emit('GameRestarted', true)
                    this.showControls = false
                    this.cooldown = 2
                }
            },
            PlayerRoll() {
                var roll = (Math.floor(Math.random() * 20) + 1)
                console.log('PlayerRoll=', roll)
                this.playerdamage = (Math.floor(Math.random() * 10) + 1)
                this.playerdamage = this.Critical(roll, true) * this.playerdamage
            },
            MonsterRoll() {
                var roll = (Math.floor(Math.random() * 20) + 1)
                console.log('MonsterRoll=', roll)
                this.monsterdamage = (Math.floor(Math.random() * 20) + 1)
                this.monsterdamage = this.Critical(roll, false) * this.monsterdamage
            },
            Critical(roll, flag) {
                if (roll === 20) {
                    var crit = 2
                    eventBus.$emit('Critical', flag)
                    return crit
                } else {
                    return this.Miss(roll)
                }
            },
            Miss(roll) {
                if (roll === 1) {
                    var miss = 0
                    return miss
                } else {
                    var normal = 1
                    return normal
                }
            }
        }
    }
</script>
