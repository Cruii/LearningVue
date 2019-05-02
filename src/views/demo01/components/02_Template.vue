<template>
    <div id="app">
        <h2>1. 双大括号表达式</h2>
        <p>{{ msg }}</p>
        <p>{{ msg.toUpperCase() }}</p>
        <p v-text="link"></p>
        <p v-html="link"></p>

        <h2>2. 指定一：强制数据绑定</h2>
        <img v-bind:src="imgUrl">
        <img :src="imgUrl">

        <h2>3. 指令二：绑定事件监听</h2>
        <button v-on:click="test">强制绑定事件Test1</button>
        <button @click="test2('Test2')">强制绑定事件Test2</button>
        <button @click="test2(msg)">强制绑定事件Test3</button>
    </div>
</template>

<script>
    export default {
        name: "Template",
        data() {
            return {
                msg: 'I am Iron Man!',
                link: '<a href="https://imcr.io">Chen Rui</a>',
                imgUrl: 'https://imcr.io/uploads/avatar.png'
            };
        },
        methods: {
            test() {
                alert('强制绑定事件Test！')
            },

            test2(string) {
                alert(string)
            }
        }
    }
</script>

<style scoped>

</style>