<template>
    <div>
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
        // 生命周期函数之一， vm实例创建后立即调用
        created() {
            // 将定时器的id存入到vm实例中
            this.intervalId = setInterval(() => {
                console.log("执行！");
                this.isShow = !this.isShow;
            }, 1000);
        },
        methods: {
            destroy() {
                // 销毁vm实例
                // 此时销毁后，上面的定时器还会一直执行。
                this.$destroy();
            }
        },
        // 生命周期函数之一， 在vm实例销毁之前执行
        beforeDestroy() {
            //在销毁vm实例之前清除定时器
            clearInterval(this.intervalId);
        }
    }
</script>

<style scoped>

</style>