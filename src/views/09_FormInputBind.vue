<template>
    <div>
        <form action="/xxx" @submit.prevent="handSubmit">
            <span>用户名: </span>
            <input type="text" v-model="username"><br>

            <span>密码: </span>
            <input type="password" v-model="password"><br>

            <span>性别: </span>
            <input type="radio" id="female" value="女" v-model="sex">
            <label for="female">女</label>
            <input type="radio" id="male" value="男" v-model="sex">
            <label for="male">男</label><br>

            <span>爱好: </span>
            <input type="checkbox" id="basket" value="basketball" v-model="likes">
            <label for="basket">篮球</label>
            <input type="checkbox" id="foot" value="football" v-model="likes">
            <label for="foot">足球</label>
            <input type="checkbox" id="pingpang" value="pingpong" v-model="likes">
            <label for="pingpang">乒乓</label><br>

            <span>城市: </span>
            <select v-model="cityId">
                <option value="">未选择</option>
                <option :value="city.id" v-for="(city, index) in allCities" :key="index">{{ city.name }}</option>
            </select><br>
            <span>介绍: </span>
            <textarea rows="10" v-model="content"></textarea>
            <br>
            <br>

            <input type="submit" value="注册">
        </form>
    </div>
</template>

<script>
    export default {
        name: "FormInputBind",
        data() {
            return {
                username: '',
                password: '',
                // 默认选择 女
                sex: '女',
                // 默认勾选 足球
                likes: ['football'],
                // 用于动态渲染下拉框
                allCities: [{id: 1, name: 'Beijing'}, {id: 2, name: 'Chengdu'}, {id: 3, name: 'Nanjing'}],
                // 下拉框默认选择 Chengdu
                cityId: 2,
                content: ''
            }
        },
        methods: {
            handSubmit() {
                console.log(this.username, this.password, this.sex, this.likes, this.cityId, this.content);
            }
        }
    }
</script>

<style scoped>

</style>