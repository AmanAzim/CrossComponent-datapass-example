<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name in child : {{myName}}</p>
        <p>User age in child : {{myAge}}</p>
        <p>{{splitName()}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="parent_resetName">Reset Name (using parent's function)</button>
    </div>
</template>

<script>
    export default{
        props:{
            myName:{
                type:String,
                default:'Abbu'
            },
            myAge:Number,
            parent_resetName:Function,

        },
        methods:{
            splitName(){
                return this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName='Aman'; //this change is local only for this child component
                this.$emit('coming-from-child', this.myName);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
