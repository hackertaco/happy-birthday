<template>
<div class="rounded-full bg-yellow-500 z-10 w-10 h-10 absolute m-4 items-center justify-center flex cursor-pointer z-20">
    <svg v-if="sound" class="w-6 z-20 absolute  cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" @click="noMoreSound">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
    <svg v-else class="w-6 z-20 absolute m-3 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke="black" @click="moreSound">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
</div>
<div v-if="!isPlaying" class="text-center w-screen h-screen absolute flex flex-col content-center items-center justify-center z-20" style="font-family:SpaceMono">
    <button class="inline align-middle p-1 w-20 h-1/6 shadow-md rounded-2xl cursor-pointer bg-gradient-to-r from-orange-400 via-yellow-500 to-yellow-400" @click="toggleAnimation">▶️▶️▶️</button>
    <div class="text-yellow-400 my-2">📣 소리주의 📣 <br />화면 누르면 멈춤</div>
</div>
<div class="letter-container bg-black w-screen h-screen flex justify-center align-middle items-center" @click="toggleAnimation">
    <span class="text-yellow-400 w-15 absolute right-0 bottom-0 my-16 mx-3 animate-pulse text-sm">다음장 ⬇️</span>
    <button class="rounded-full inline flex justify-center items-center text-white p-1 m-3 w-10 h-10 absolute right-0 bottom-0 shadow-md  cursor-pointer bg-yellow-500 z-10" @click="nextPage">
        <svg class="w-6 z-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>

    </button>
    <div v-for="(star,index) in stars" :key="index" class="star-style" :style="star"></div>
    <section class="intro flex justify-center" :style="animationPlay_intro">
        A long time ago, in a galaxy far,<br> far away...
    </section>

    <section class="starwars-logo flex w-screen h-screen justify-center items-center align-middle" style="font-face" :style="animationPlay_logo">
        <img src="@/assets/img/logo.svg" alt="">
    </section>

    <div id="board" class="flex justify-center">
        <div id="content" :style="animationPlay_content">
            <p id="title">Episode I</p>
            <p id="subtitle">{{name}}생일</p>
            <br>
            <p v-for="(line,index) in p.split('\n')" :key="index">{{line}}</p>
        </div>
        <div class="end w-full" :style="animationPlay_end">move on to the next page</div>

    </div>

</div>

<audio id="audio" ref="soundRef" autoplay :muted="!sound">
    <source src="@/assets/starwarsMusic.mp3">
</audio>
</template>

<script>
import router from '../router.js'

export default {
    data() {
        return {
            numStars: 100,
            stars: [],
            name: '승아',
            p: `안녕 승아야 잘 지내고있니?
            나는 잘 지내고 있단다
            배가고프네
            ㅎㅎㅎㅎ`,
            animationPlay_intro: {
                animation: 'paused'
            },
            animationPlay_logo: {
                animation: 'paused'
            },
            animationPlay_content: {
                animation: 'paused'
            },
            animationPlay_end: {
                animation: 'paused'
            },
            isPlaying: false,
            // isEnded: false,
            sound: false,

        }
    },
    beforeMount() {
        for (let i = 0; i < this.numStars; i++) {
            let location = this.getRandomPosition();

            this.stars.push({
                top: location[0],
                left: location[1]
            })
        }

    },
    methods: {
        getRandomPosition() {
            let y = window.innerWidth;
            let x = window.innerHeight;
            let randomX = Math.floor(Math.random() * x);
            let randomY = Math.floor(Math.random() * y);
            let xy = [randomX, randomY];
            let top = xy[0] + 'px';
            let left = xy[1] + 'px';
            return [top, left]
        },
        toggleAnimation() {
            if (this.isPlaying === false) {
                this.$refs.soundRef.play();
                this.sound = true;
                this.animationPlay_intro = {
                    animation: 'intro 5s ease-out 1s running'
                }
                this.animationPlay_logo = {
                    animation: 'starwars-logo 9s ease-out 9s running'
                }
                this.animationPlay_content = {
                    animation: 'scroll 100s linear 18s running'
                }
                this.animationPlay_end = {
                    animation: 'end 5s ease-out 50s infinite running'
                }
                this.isEnded = false;
                this.isPlaying = true;
            } else {
                this.$refs.soundRef.pause();
                this.sound = false;
                this.animationPlay_intro = {
                        animation: 'intro 5s ease-out 1s paused'
                    },
                    this.animationPlay_logo = {
                        animation: 'starwars-logo 9s ease-out 9s paused'
                    },
                    this.animationPlay_content = {
                        animation: 'scroll 100s linear 18s paused'
                    }
                this.animationPlay_end = {
                    animation: 'end 5s ease-out 50s infinite paused'
                }
                this.isPlaying = false
            }

        },

        noMoreSound() {
            this.sound = false;
            this.$refs.soundRef.pause();
        },
        moreSound() {
            this.sound = true;
            this.$refs.soundRef.play();
        },
        nextPage() {
            router.replace('/present')
        }

    },

}
</script>

<style>
.letter-container {
    background-color: black;
    margin: 0
}

.star-style {
    position: absolute;
    width: 1px;
    height: 1px;
    background-color: white;
}

.intro {
    position: absolute;

    z-index: 10;
    animation: intro 5s ease-out 1s;
    color: rgb(75, 213, 238);
    font-weight: 400;
    font-size: 300%;
    opacity: 0;
}

@keyframes intro {
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.starwars-logo {

    z-index: 10;
    margin: auto;
    animation: starwars-logo 9s ease-out 9s;
    opacity: 0;
}

.starwars-logo img {
    width: inherit;
}

/* Scale the logo down and maintain it centered */
@keyframes starwars-logo {
    0% {
        width: 18em;
        transform: scale(2.75);
        opacity: 1;
    }

    50% {
        opacity: 1;
        width: 18em;
    }

    100% {
        opacity: 0;
        transform: scale(0.1);
        width: 18em;
    }
}

p {
    color: #FFFF82;
}

/* Set the font, lean the board, position it */
#board {
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    transform: perspective(300px) rotateX(25deg);
    transform-origin: 50% 100%;
    text-align: justify;
    position: absolute;
    margin-left: -9em;
    font-weight: bold;
    overflow: hidden;
    font-size: 350%;
    height: 50em;
    width: 18em;
    bottom: 0;
    left: 50%;
}

#board:after {
    position: absolute;
    content: ' ';
    bottom: 60%;
    left: 0;
    right: 0;
    top: 0;
}

/* Set the scrolling animation and position it */
#content {
    animation: scroll 100s linear 18s;
    position: absolute;
    top: 100%;
    text-align: center;
    z-index: 10;
}

#title,
#subtitle {
    text-align: center;
}

@keyframes scroll {
    0% {
        top: 100%;
    }

    100% {
        top: -170%;
    }
}

.end {
    position: absolute;
    text-align: center;

    top: 60%;
    z-index: 10;
    animation: end 5s ease-out 50s infinite;
    color: #FFFF82;
    font-weight: 500;
    font-size: 300%;
    opacity: 0;
    font-size: 7rem;
}

@keyframes end {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>
