<template>
    <div>
        <h2>显示格式化的日期时间</h2>
        <p>{{ date }}</p>
        <p>完整版：{{ date | dateFilter }}</p>
        <p>年月日：{{ date | dateFilter('YYYY-MM-DD') }}</p>
        <p>时分秒：{{ date | dateFilter('HH:mm:ss') }}</p>

        <p>{{ date }}</p>
    </div>
</template>
<script>
    import moment from 'moment'
    import Vue from 'vue'

    // 自定义过滤器
    Vue.filter('dateFilter', function (date, format) {
        return moment(date).format(format || 'YYYY-MM-DD HH:mm:ss')
    });
    export default {
        name: "CustomizeFilter",
        data() {
            return {
                date: new Date()
            };
        },
        mounted() {
            let _this = this;
            this.timer = setInterval(function () {
                _this.date = new Date();
            }, 1000)
        },

        beforeDestroy() {

            clearInterval(this.timer);
        }
    }
</script>

<style scoped>

</style>