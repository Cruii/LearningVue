<template>
    <div id="app">
        <div id="nav">
            <router-link to="/01_HelloWorld">01_HelloWorld</router-link>
            |
            <router-link to="/02_Template">02_模板语法</router-link>
            |
            <router-link to="/03_ComputedAndWatch">03_计算属性与监视</router-link>
            |
            <router-link to="/04_ClassAndStyleBind">04_Class与Style绑定</router-link>
            |
            <router-link to="/05_ConditionRender">05_条件渲染</router-link>
            |
            <router-link to="/06_ListRender">06_列表渲染</router-link>
            |
            <router-link to="/07_FilterAndSortedList">07_过滤和排序列表</router-link>
            |
            <router-link to="/08_Event">08_事件处理</router-link>
            |
            <router-link to="/09_FormInputBind">09_表单输入绑定</router-link>
            |
            <router-link to="/10_LifeCycle">10_Vue的生命周期</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style lang="stylus">
    #app
        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

    #nav
        padding 30px

        a
            font-weight bold
            color #2c3e50

            &.router-link-exact-active
                color #42b983
</style>
