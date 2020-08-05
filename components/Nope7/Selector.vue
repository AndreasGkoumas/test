<template>
    <b-container class="middle">
        <b-row>
            <b-col>
                <b-button variant="danger" @click="selectedColor= 'red'">RED</b-button>
                <b-button variant="primary" @click="selectedColor= 'blue'">BLUE</b-button>
                <b-button variant="success" @click="selectedColor= 'green'">GREEN</b-button>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <component :is="selectedColor">
                <b-row>
                    <b-col>ONE</b-col>
                    <b-col>TWO</b-col>
                    <b-col>TREE</b-col>
                    <b-col>FOUR</b-col>
                    <b-col>FIVE</b-col>
                </b-row>
            </component>
        </b-row>
    </b-container>
</template>

<script>

    import Blue from './Blue'
    import Red from './Red'
    import Green from './Green'

    export default {
        data: function() {
            return {
                selectedColor: Red
            }
        },
        components: {
            Blue,
            Red,
            Green
        }
    }
</script>

<style>
    .middle{
        text-align: center;
    }
</style>
