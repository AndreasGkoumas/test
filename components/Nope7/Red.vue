<template>
    <b-row class="red">
        <slot></slot>
    </b-row>
</template>

<style scoped>
    .red{
        border: 1px solid red;
        padding: 30px;
        background: lightcoral;
        width: 100%;
    }
</style>
