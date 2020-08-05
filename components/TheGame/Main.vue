<template>
    <div class="main">
        <b-row>
            <b-col>
                <h1>PLAYER</h1>
                <player-health></player-health>
            </b-col>
            <b-col>
                <h1>MONSTER</h1>
                <monster-health> </monster-health>
            </b-col>
        </b-row>
        <start-button></start-button>
        <controll-buttons></controll-buttons>
        <log></log>
    </div>
</template>

<script>

    import PlayerHealth from './PlayerHealthbar'
    import MonsterHealth from './MonsterHealthBar'
    import StartButton from './StartButton'
    import ControllButtons from './ControllButtons'
    import Log from './Log'

    export default {
        components: {
            PlayerHealth,
            MonsterHealth,
            StartButton,
            ControllButtons,
            Log
        }
    }
</script>

<style>
    .main{
        text-align: center;
        margin: auto;
    }
</style>
