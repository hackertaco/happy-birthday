<template>
<div v-if="!isPlaying" class="text-center w-screen h-screen absolute flex flex-col content-center items-center justify-center z-10" style="font-family:SpaceMono">
    <button class="inline align-middle p-1 w-20 h-1/6 shadow-md rounded-2xl cursor-pointer bg-gradient-to-r from-orange-400 via-yellow-500 to-yellow-400 z-10" @click="playVideo">▶️▶️▶️</button>
    <div class="text-yellow-400 my-2 font-semibold">📣 소리주의 📣 <br />화면 누르면 멈춤</div>
</div>
<div v-else class="w-screen h-screen absolute z-10" @click="pauseVideo">
    <span class="text-yellow-400 w-15 absolute right-0 bottom-0 my-16 mx-3 animate-pulse text-sm">다음장 ⬇️</span>
    <button class="rounded-full inline flex justify-center items-center text-white p-1 m-3 w-10 h-10 absolute right-0 bottom-0 shadow-md  cursor-pointer bg-yellow-500 z-10" @click="nextPage">
        <svg class="w-6 z-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>

    </button>

</div>
<div class="rounded-full bg-yellow-500 z-10 w-10 h-10 absolute m-4 items-center justify-center flex">
    <svg v-if="!noSound" class="w-6 z-20 absolute  cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" @click="noMoreSound">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
    <svg v-else class="w-6 z-20 absolute m-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" @click="moreSound">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
</div>

<video ref="videoRef" class="min-h-screen inline object-fill " src="../assets/STARWARS.mp4" :muted="noSound">
</video>
<audio id="audio" ref="soundRef">
    <source src="@/assets/starwarsMusic.mp3">
</audio>
</template>

<script>
import router from '../router.js'
export default {
    data() {
        return {
            isPlaying: false,
            isEnded: false,
            noSound: false
        }
    },
    methods: {
        playVideo() {
            this.$refs.videoRef.play();
            this.isPlaying = true
            this.isEnded = false
        },
        pauseVideo() {
            this.$refs.videoRef.pause();
            this.isPlaying = false
        },
        noMoreSound() {
            this.noSound = true
        },
        moreSound() {
            this.noSound = false
        },
        nextPage() {
            router.replace('/present')
        }

    },

}
</script>

<style>

</style>
