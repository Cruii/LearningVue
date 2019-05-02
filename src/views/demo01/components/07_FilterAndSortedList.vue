<template>
    <div>
        <input type="text" v-model="searchKey">
        <table style="margin: auto">
            <thead>
            <tr>
                <th>索引</th>
                <th>姓名</th>
                <th>年龄</th>
            </tr>
            </thead>
            <tr v-for="(p, index) in filterPersons" :key="index">
                <td>{{ index }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.age }}</td>
            </tr>
        </table>

        <button @click="sort(1)">年龄升序</button>
        <button @click="sort(2)">年龄降序</button>
        <button @click="sort(0)">原本顺序</button>
    </div>
</template>

<script>
    export default {
        name: "FilterAndSortedList",
        data() {
            return {
                searchKey: '',
                // 0 代表 原本顺序
                // 1 代表 升序
                // 2 代表 降序
                orderType: 0,
                persons: [
                    {name: 'Tom', age: 18},
                    {name: 'Jack', age: 20},
                    {name: 'Rose', age: 21},
                    {name: 'Bob', age: 17},
                    {name: 'David', age: 28}
                ]
            };
        },
        computed: {
            filterPersons() {
                // 取出相关数据
                const {searchKey, persons, orderType} = this;

                // 最终需要显示的数组
                let filtered;

                // 对persons进行过滤
                filtered = persons.filter(p => p.name.indexOf(searchKey) !== -1);

                // 根据类型排序
                if (orderType !== 0) {
                    filtered.sort(function (p1, p2) {

                        if (orderType === 2) {
                            return p2.age - p1.age;
                        } else {
                            return p1.age - p2.age;
                        }

                    })
                }
                return filtered;
            }
        },
        methods: {
            sort(orderType) {
                this.orderType = orderType;
            }
        }
    }
</script>

<style scoped>

</style>