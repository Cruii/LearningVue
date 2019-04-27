<template>
    <div id="app">
        姓：<input type="text" placeholder="First Name" v-model="firstName"><br>
        名：<input type="text" placeholder="Last Name" v-model="lastName"><br>
        姓 名1（单向）：<input type="text" placeholder="Full Name1" v-model="fullName1"><br>
        姓 名2（单向）：<input type="text" placeholder="Full Name2" v-model="fullName2"><br>
        姓 名3（双向）：<input type="text" placeholder="Full Name3" v-model="fullName3"><br>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatch",
        data() {
            return {
                firstName: 'A',
                lastName: 'B',
                fullName2: 'A B'
            }
        },
        // 计算
        computed: {
            fullName1() {
                return this.firstName + ' ' + this.lastName;
            },

            fullName3: {
                // 读取值时调用该方法
                get() {
                    return this.firstName + ' ' + this.lastName;
                },

                // 设置值时调用该方法
                set(value) {
                    var strs = value.split(' ');
                    if (strs.length > 1) {
                        this.firstName = strs[0];
                        this.lastName = strs[1];
                    } else {
                        this.firstName = strs[0];
                        this.lastName = '';
                    }

                }
            }
        },
        // 监视
        watch: {
            firstName: function (newValue, oldValue) {
                this.fullName2 = newValue + ' ' + this.lastName;
            }
        },
        mounted() {
            // Vue的实例vm的watch方法，第一个参数就是监视的对象
            this.$watch('lastName', function (newValue, oldValue) {
                this.fullName2 = this.firstName + ' ' + newValue;
            })
        }

    }

</script>

<style scoped>

</style>