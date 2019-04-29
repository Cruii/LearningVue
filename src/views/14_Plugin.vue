<template>
    <div id="test">
        <h2>查看控制台打印</h2>
        <p v-my-directive="msg"></p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import MyPlugin from '@/components/vue-myplugin'

    // 声明使用插件
    // 内部会执行MyPlugin.install(Vue)
    Vue.use(MyPlugin);

    export default {
        name: "Plugin",
        data() {
            return {
                msg: 'Chen Rui'
            }
        },
        mounted() {
            Vue.show();
            this.$myMethod();
        }
    }


</script>

<style scoped>

</style>