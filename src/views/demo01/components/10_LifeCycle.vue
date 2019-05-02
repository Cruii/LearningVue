<template>
    <div>
        <h2>打开控制台查看打印信息</h2>
        <button @click="destroy">销毁vm实例</button>
        <p v-show="isShow">闪烁！</p>
    </div>
</template>

<script>
    export default {
        name: "LifeCycle",
        data() {
            return {
                isShow: true
            }
        },

        // 初始化阶段

        beforeCreate() {
            console.log('进入初始化阶段');
            console.log('beforeCreate');
        },
        // vm实例创建后立即调用
        created() {
            console.log('created');
            // 将定时器的id存入到vm实例中
            this.intervalId = setInterval(() => {
                console.log('执行！');
                this.isShow = !this.isShow;
            }, 1000);
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
        },

        // 更新阶段

        beforeUpdate() {
            console.log('进入更新阶段');
            console.log('beforeUpdate');
        },
        updated() {
            console.log('updated');
        },
        methods: {
            destroy() {
                // 销毁vm实例
                // 此时销毁后，上面的定时器还会一直执行。
                this.$destroy();
            }
        },

        // 死亡阶段

        // 在vm实例销毁之前执行
        beforeDestroy() {
            console.log('进入死亡阶段');
            console.log('beforeDestroy');
            //在销毁vm实例之前清除定时器
            clearInterval(this.intervalId);
        },
        destroyed() {
            console.log('destroyed');
        }
    }
</script>

<style scoped>

</style>