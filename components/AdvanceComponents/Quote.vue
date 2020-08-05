<template>
    <b-container class="quote">
        <b-row>
            <b-col>
                <b-button-group>
                    <b-button @click="selectedComponent= 'miniQuotes'">1</b-button>
                    <b-button @click="selectedComponent= 'newQuotes'">2</b-button>
                    <b-button @click="selectedComponent= 'authorQuotes'">3</b-button>
                </b-button-group>
                <component :is="selectedComponent"></component>
                <!-- <mini-quotes>
                    <h1 slot="title"> An Inspiring Quote </h1>
                    <p>
                        Come and Get THEM!!!
                    </p>
                </mini-quotes> -->
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import miniQuotes from './newQuote.vue'
    import newQuotes from './newQuotes.vue'
    import AuthorQuotes from './AuthorQuotes.vue'

    export default {
        data: function() {
            return {
                selectedComponent: 'miniQuotes'
            }
        },
        components: {
            miniQuotes,
            newQuotes,
            AuthorQuotes
        }
    }
</script>

<style scoped>
    .quote{
        color: cornflowerblue;
        background: rgba(139, 94, 9, 0.534);
        text-decoration: underline;
        font-size: large;
        border: 1px solid indigo;
        box-shadow: 1px 1px 3px red;
        padding: 30px;
        margin: 30 px auto;
    }
</style>
