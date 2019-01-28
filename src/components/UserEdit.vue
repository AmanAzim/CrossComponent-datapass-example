<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Age: {{myAge}}</p>
        <button v-on:click="editAge">Edit age</button>

        <p>ID: {{myId}}</p>
        <button v-on:click="changeId">Change Id</button>
    </div>
</template>

<script>
    import {eventBus} from "../main.js";

    export default{
        props:['myAge', 'myId'],
        methods:{
            editAge(){
                this.myAge=30;
                this.$emit('age-is-edited', this.myAge);
            },
            changeId(){
                this.myId='009';
                eventBus.$emit('changed-id', this.myId);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
