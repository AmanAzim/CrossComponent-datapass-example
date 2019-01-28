<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button v-on:click="changeName">Change my Name</button>
        <p>The name in Parent is: {{name}}</p>
        <p>The age in Parent is: {{age}}</p>
        <p>The ID in Parent is: {{id}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:myName="name"
                                 v-on:coming-from-child="name=$event"
                                 v-bind:parent_resetName="resetName"
                                 v-bind:myAge="age"
                                 v-bind:myId="id">

                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit v-bind:myAge="age"
                               v-on:age-is-edited="age=$event"
                               v-bind:myId="id">

                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data:function(){
            return{
              name:'Aman',
              age:2,
              id:'007'
            };
        },
        methods:{
            changeName(){
                this.name='Roza';
            },
            resetName(){
                this.name='Aman';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
