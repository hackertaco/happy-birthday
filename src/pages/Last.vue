<template>
<div style="background-color: #0e101b;" class=" w-screen h-screen text-white flex items-center justify-center flex-col">
    <img src="@/assets/lie.jpg" alt="">
    <div class="logo text-center">
        <span>애</span>
        <span>플</span>
        <span>은</span>
        <span>뻥</span>
        <span>이</span>
        <span>지</span>
        <span>만</span>
        <span>.</span>
        <span>.</span>
        <span>다른걸</span>
        <span>준비했따</span>
        <span class="blink">|</span>
        <br />
        <span class="rounded-2xl p-1 cursor-pointer text-xl" @click="giveInput">비밀코드 받기</span>
        <br />
        <form @submit.prevent="isRight" v-show="showInput" class="rounded-2xl p-1 text-black" type="text" placeholder="숭가리짱 입력">
            <input type="text" class="my-2" v-model="typing" placeholder="숭가리짱 입력">
            <button type="submit" class="text-white border rounded">누르기</button>
        </form>
        <br />
        <div style=" font-weight:100" class="text-xl secret" v-show="showCode">비밀코드 : 숭가리짱 <br />
            (카카오톡으로 비밀코드를 전해라 그럼안뇽)</div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showInput: false,
            typing: '',
            showCode: false,
            img: ''
        }
    },
    methods: {
        giveInput() {
            this.showInput = true
        },
        isRight() {
            if (this.typing === '숭가리짱') {
                this.showCode = true
            }
        },

    },
    created() {

    }
}
</script>

<style>
img {
    width: 10rem;
}

.logo {
    font-family: 'PT Sans Narrow', sans-serif;
    font-size: 48px;
}

.logo>* {

    font-weight: 500;
    display: inline-block;
    animation-name: appear;
    animation-duration: .01s;
    animation-fill-mode: both;
}

.logo>*:nth-of-type(1) {
    animation-delay: 1s
}

.logo>*:nth-of-type(2) {
    animation-delay: 1.4s
}

.logo>*:nth-of-type(3) {
    animation-delay: 1.7s
}

.logo>*:nth-of-type(4) {
    animation-delay: 2s
}

.logo>*:nth-of-type(5) {
    animation-delay: 2.3s
}

.logo>*:nth-of-type(6) {
    animation-delay: 2.6s
}

.logo>*:nth-of-type(7) {
    animation-delay: 3.0s
}

.logo>*:nth-of-type(8) {
    animation-delay: 3.3s
}

.logo>*:nth-of-type(9) {
    animation-delay: 3.4s
}

.logo>*:nth-of-type(10) {
    animation-delay: 3.7s
}

.logo>*:nth-of-type(11) {
    animation-delay: 4.0s
}

.logo>*:nth-of-type(13) {
    animation-delay: 4.4s;
    border: 1px white solid
}

@keyframes appear {
    from {
        font-size: 0em;
    }

    to {
        font-size: 1em;
    }
}

.blink {
    font-size: 1.5em;
    font-weight: 400;
    display: inline-block;
    visibility: visible;
    width: auto;
    animation-name: flash;
    animation-duration: .8s;
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
}

@keyframes flash {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    75% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>
