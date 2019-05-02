<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <Header :addTodo="addTodo"></Header>
            <List :todoList="todoList" :deleteTodo="deleteTodo"></List>
            <Footer :todoList="todoList" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></Footer>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header'
    import List from './components/List'
    import Footer from './components/Footer'

    export default {
        name: "App",
        data() {
            return {
                // 从LocalStorage中读取TodoList
                todoList: JSON.parse(window.localStorage.getItem("todos_key") || '[]')

                // todoList: [
                //     { title: '吃饭', complete: false },
                //     { title: '睡觉', complete: true },
                //     { title: '打游戏', complete: false }
                // ]
            }
        },
        components: {
            Header,
            List,
            Footer
        },
        methods: {
            // 添加事项
            addTodo(todo) {
                this.todoList.unshift(todo);
            },

            // 删除指定事项
            deleteTodo(index) {
                this.todoList.splice(index, 1);
            },

            // 删除所有选中的事项
            deleteCompleteTodos() {
                this.todoList = this.todoList.filter(todo => !todo.complete);
            },

            // 全选/全不选
            selectAllTodos(checked) {
                this.todoList.forEach(todo => todo.complete = checked);
            }
        },
        watch: {
            // 对 TodoList进行深度监视，对象的内部任何改变都可见
            todoList: {
                deep: true, // 深度监视
                handler: function (newValue, oldValue) {
                    // 将TodoList的最新版本存储到LocalStorage中
                    window.localStorage.setItem("todos_key", JSON.stringify(newValue));
                }
            }
        }
    }
</script>

<style scoped>
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

</style>