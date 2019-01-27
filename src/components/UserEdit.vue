<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button v-on:click="editAge">Edit age</button>
        <p>Age: {{myAge}}</p>
    </div>
</template>

<script>
    export default{
        props:['myAge'],
        methods:{
            editAge(){
                this.myAge=30;
                this.$emit('age-is-edited', this.myAge);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
