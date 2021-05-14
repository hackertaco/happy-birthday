<template>
<div class="tracking-tight w-screen h-screen bg-red-700 m-auto fixed" style="font-family:SpaceMono">
    <img class="w-full h-4" src="../assets/img/cautionLine.jpg" />
    <div class="text-white m-auto justify-center h-full flex items-center flex-col ">
        <div class=" m-auto flex justify-center flex-col items-center align-middle text-center w-full" style="position: relative;bottom: 3rem">
            <svg class="w-1/12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h1 class="text-2xl my-4">사이트 접속이 차단되었습니다.</h1>
            <span class="text-yellow-500">오직 해홍이만 들어올 수 있음을 알려드립니다.</span>
            <span>다만 해홍이도 로그인해야합니다.</span>
            <form class="shadow-2xl shadow-inner text-gray-600 bg-white my-6 w-2/5 flex items-center flex-col rounded-3xl" @submit.prevent="submit">
                <div class="w-5/6">
                    <div class="my-3 w-full flex flex-col text-left" style="margin-top: 1.5rem">
                        <label>ID</label>
                        <input v-model="email" class=" border-b border-gray-300 focus:border-red-600 text-black p-1 w-full" type="text" style="font-size: 0.8rem" placeholder="홍해인의 지메일" />
                    </div>
                    <div class="my-4 w-full flex flex-col text-left" style="margin-bottom: 2rem">
                        <label for="">Password</label>
                        <input v-model="password" class="border-b border-gray-300 focus:border-red-600 p-1 w-full text-black" style="font-size: 0.8rem" type="password" placeholder="홍해인의 생년월일 8 숫자" />
                    </div>

                </div>
                <div class="w-full absolute text-center" style="bottom: -10%">
                    <button v-if="!isLoading" type="submit" class="cursor-pointer bg-white hover:bg-yellow-500 text-black rounded-lg shadow-md border text-center" style="font-size: 1rem; padding:0.5rem; width: 6rem ">Login</button>
                    <button v-else type="submit" class="cursor-pointer  bg-yellow-500 text-black rounded-lg shadow-md border text-center" style="font-size: 1rem; padding: 0.5rem; width: 6rem ">loading</button>

                </div>
            </form>
        </div>
    </div>
    <footer class="bottom-0 right-0 absolute text-white text-xs">@copyright tacos_chocos</footer>

</div>
</template>

<script>
import router from '../router.js'
import firebase from '../util/firebase'
export default {
    data() {
        return {
            email: '',
            password: '',
            isLoading: false,
        }
    },

    methods: {
        submit() {
            this.isLoading = true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.email = '';
                this.password = '';
                this.isLoading = false;
                router.replace('/letter')
            }).catch(e => {
                console.log(e)
            })
        }
    }

}
</script>

<style scoped>

</style>
