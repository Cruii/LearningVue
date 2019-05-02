<template>
    <div>
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <Add :addComment="addComment"></Add>
                <List :comments="comments" :removeComment="removeComment"></List>
            </div>
        </div>
    </div>
</template>

<script>
    import Add from './components/Add'
    import List from './components/List'

    export default {
        name: "App",
        data() {
            return {
                comments: [
                    {name: 'Tony', content: 'I am Iron Man'},
                    {name: 'Steve', content: 'I am Captain America'},
                    {name: 'Thor', content: 'I am Thor'},
                    {name: 'Natasha', content: 'I am Black Widow'},
                    {name: 'Banner', content: 'I am Hulk'},
                    {name: 'Clint', content: 'I am Hawk eye'}
                ]
            }
        },
        methods: {
            // 添加评论
            addComment(comment) {
                this.comments.unshift(comment);
            },
            // 删除指定索引的评论
            removeComment(index) {
                this.comments.splice(index, 1);
            }
        },
        components: {
            Add,
            List
        }
    }
</script>

<style scoped>

</style>