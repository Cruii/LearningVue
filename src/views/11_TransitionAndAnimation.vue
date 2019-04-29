<template>
    <div>
        <div id="1">
            <button @click="isShow = !isShow">切换显示</button>
            <transition name="fade">
                <p v-show="isShow">Chen Rui</p>
            </transition>
        </div>

        <div id="2">
            <button @click="isShow2 = !isShow2">切换显示</button>
            <transition name="move">
                <p v-show="isShow2">Chen Rui</p>
            </transition>
        </div>

        <div id="3">
            <button @click="isShow3 = !isShow3">切换显示</button>
            <transition name="bounce">
                <p v-if="isShow3">Chen Rui</p>
            </transition>
        </div>
    </div>

</template>

<script>
    export default {
        name: "TransitionAndAnimation",
        data() {
            return {
                isShow: true,
                isShow2: true,
                isShow3: true
            }
        }
    }
</script>

<style scoped lang="stylus">
    // 显示/隐藏的过渡效果
    .fade-enter-active, .fade-leave-active {
        transition opacity 1s
    }

    // 隐藏时的样式
    .fade-enter, .fade-enter-to {
        opacity 0
    }

    // 显示的效果
    .move-enter-active {
        transition all 1s;
    }

    // 隐藏的效果
    .move-leave-active {
        transition all 3s;
    }

    // 隐藏时的样式
    .move-enter, .move-leave-to {
        opacity 0
        transform translateX(20px)
    }

    // 进入时的样式
    .bounce-enter-active {
        animation bounce-in .5s;
    }

    // 离开时的样式
    .bounce-leave-active {
        animation bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform scale(0);
        }
        50% {
            transform scale(1.5);
        }
        100% {
            transform scale(1);
        }
    }
</style>