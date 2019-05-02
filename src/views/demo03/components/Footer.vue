<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" v-model="isAllSelect"/>
        </label>
        <span>
          <span>已完成 {{ completeSize }}</span> / 全部 {{ todoList.length }}
        </span>
        <button class="btn btn-danger" v-show="completeSize > 0" @click="deleteCompleteTodos">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            todoList: Array,
            deleteCompleteTodos: Function,
            selectAllTodos: Function
        },
        computed: {
            completeSize () {
                return this.todoList.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0);
            },

            isAllSelect: {
                get() {
                    return this.completeSize === this.todoList.length && this.todoList.length > 0;
                },

                set(isChecked) {
                    this.selectAllTodos(isChecked);
                }
            }
        }
    }
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>