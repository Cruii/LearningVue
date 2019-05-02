<template>
    <div>
        <h2>该例子只演示ref指令和v-cloak指令</h2>
        <h2>ref指令</h2>
        <p ref="content">Chen Rui</p>
        <button @click="hint">提示</button>

        <!--防止闪现  即在渲染前会在页面上显示{{msg}}，而不是具体内容-->
        <h2>v-cloak指令</h2>
        <p v-cloak>{{ msg }}</p>
        <!--        <p v-text="msg"></p>-->

        <h2>以下为自定义指令 v-upper-text和v-lower-text</h2>
        <h2>实现文本转化为大写和小写</h2>
        <div id="1">
            <p v-text="msg1"></p>
            <p v-upper-text="msg1"></p>
            <p v-lower-text="msg1"></p>
        </div>

        <div id="2">
            <p v-text="msg2"></p>
            <p v-upper-text="msg2"></p>
            <p v-lower-text="msg2"></p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    // 定义全局指令
    // el：指令属性所在的标签对象
    // binding：包含指令相关信息数据的对象
    Vue.directive('upper-text', function (el, binding) {
        el.textContent = '大写：' + binding.value.toUpperCase();
    });
    export default {
        name: "Command",
        data() {
            return {
                msg: 'Hello Vue',
                msg1: 'I am Iron Man',
                msg2: 'I am Thor'
            }
        },
        methods: {
            hint() {
                // 得到p标签里的值
                alert(this.$refs.content.textContent);
            }
        },
        // 定义局部指令
        // 只在当前vm管理区域有效
        directives: {
            'lower-text': function (el, binding) {
                el.textContent = '小写：' + binding.value.toLowerCase();
            }
        }
    }


</script>

<style scoped lang="stylus">
    [v-cloak]
        display none
</style>