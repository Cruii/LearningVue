<template>
    <div>
        <h1>点击按钮更新样式</h1>

        <h2>1. class绑定: :class='className'</h2>
        <p :class="a">此案例className为字符串</p>
        <p :class="{aClass: isA, bClass: isB}">此案例className为对象</p>
        <p :class="['aClass', 'cClass']">此案例className为数组</p>

        <h2>2. style绑定</h2>
        <p :style="{color: activeColor, fontSize: fontSize + 'px'}">:style="{color: activeColor, fontSize: fontSize + 'px'}"</p>

        <button @click="update">Update</button>
    </div>
</template>

<script>
    export default {
        name: "ClassAndStyleBind",
        data() {
            return {
                a: 'aClass',
                isA: true,
                isB: false,
                activeColor: 'red',
                fontSize: 20
            };
        },
        methods: {
            update() {
                this.a = 'bClass';
                this.isA = false;
                this.isB = true;
                this.activeColor = 'green';
                this.fontSize = 30;
            }
        }
    }
</script>

<style scoped lang="stylus">
    .aClass
        color red

    .bClass
        color blue

    .cClass
        font-size 30px

</style>