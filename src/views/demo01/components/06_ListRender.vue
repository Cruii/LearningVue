<template>
    <div>
        <h2>测试：v-for 遍历数组</h2>
        <table style="margin: auto">
            <thead>
            <tr>
                <th>索引</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
            </thead>
            <tr v-for="(p, index) in persons" :key="index">
                <td>{{ index }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.age }}</td>
                <td>
                    <button @click="deletePerson(index)">删除</button>&nbsp;
                    <button @click="updatePerson(index, {name: 'Cat', age: 30})">更新</button>
                </td>
            </tr>
        </table>

        <h2>测试：v-for 遍历对象</h2>
        <ul>
            <li v-for="(key, value) in persons[0]" :key="key">
                {{ value }} &emsp; {{ key }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListRender",
        data() {
            return {
                persons: [
                    {name: 'Tom', age: 18},
                    {name: 'Jack', age: 20},
                    {name: 'Lucy', age: 21},
                    {name: 'Lily', age: 17},
                    {name: 'David', age: 28}
                ]
            };
        },
        methods: {
            deletePerson(index) {
                // 删除persons中指定索引的对象
                this.persons.splice(index, 1);
            },
            updatePerson(index, person) {
                // 没有调用变异方法（具体参考官方文档）所以不会更新界面
                // this.persons[demo01] = person;
                // splice方法可以完成【增删改】三个操作。
                this.persons.splice(index, 1, person);
            }
        }
    }
</script>

<style scoped>

</style>