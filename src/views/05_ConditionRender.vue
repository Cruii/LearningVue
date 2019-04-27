<template>
    <div id="demo">
        <p>v-if v-else 的效果</p>
        <p v-if="flag">成功！</p>
        <p v-else>失败！</p>

        <p>v-show 的效果</p>

        <p v-show="flag">成功！</p>
        <p v-show="!flag">失败！</p>
        <button @click="swith">更新</button>
        <p>频繁切换时使用v-show指令，因为v-if会在内存中创建一个对象，根据情况显示</p>
        <p>而v-show是通过修改HTML的display:none来控制显示</p>
    </div>
</template>

<script>
    export default {
        name: "ConditionRender",
        data() {
            return {
                flag: false
            }
        },
        methods: {
            swith() {
                this.flag = !this.flag;
            }
        }
    }
</script>

<style scoped>

</style>