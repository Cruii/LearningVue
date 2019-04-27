<template>
    <div id="example">
        <h2>1. 绑定监听</h2>
        <button @click="test1">Test 1</button>
        <button @click="test2('Test 2')">Test 2</button>
        <button @click="test3">Test 3</button>
        <button @click="test4(123, $event)">Test 4</button>

        <h2>2. 事件修饰符</h2>
        <div class="outer" @click="test5">
            <!--@click.stop 用于停止事件冒泡， 如果没有就会点击inner时弹出inner和outer-->
            <div class="inner" @click.stop="test6"></div>
        </div>
        <!--点击弹出窗口之后会进入到指定网站-->
        <a href="https://imcr.io" @click="test7">去我的个人博客</a>
        <br>
        <!--使用@click.prevent 用于停止事件的默认行为-->
        <!--点击弹出窗口之后不会进入指定网站-->
        <a href="https://imcr.io" @click.prevent="test7">去我的个人博客</a>

        <h2>3. 按键修饰符</h2>
        <h3>按下enter键提示输入框内的内容</h3>
        <input type="text" @keyup.enter="test8">
    </div>
</template>

<script>
    export default {
        name: "Event",
        data() {
            return {
                test1() {
                    alert('Test 1');
                },
                test2(content) {
                    alert(content);
                },
                test3(event) {
                    alert(event.target.innerHTML);
                },
                test4(content, event) {
                    alert(content + '---' + event.target.innerHTML);
                },

                test5() {
                    alert('outer');
                },
                // 停止事件冒泡
                test6() {
                    alert('inner');
                },
                test7() {
                    alert('clicked');
                },
                test8(event) {
                    alert(event.target.value);
                }
            };
        }
    }
</script>

<style scoped lang="stylus">
    .outer
        width 200px
        height 200px
        background-color red
        margin auto

    .inner
        width 100px
        height 100px
        background-color blue
</style>