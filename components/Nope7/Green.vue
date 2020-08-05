<template>
    <b-row class="green">
        <slot></slot>
    </b-row>
</template>

<style scoped>
    .green{
        border: 1px solid green;
        padding: 30px;
        background: lightgreen;
        width: 100%;
    }
</style>
