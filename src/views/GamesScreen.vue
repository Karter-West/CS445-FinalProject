<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';
import Wheel from './Wheel.vue';

const router = useRouter();
const toTitleScreen = () => {router.push('/')}
const toGameplay = () => {router.push('/gameplay')}
</script>

<template>
    <main>
        <div>
            <h1 class="title">Games Page</h1>
        </div>
        <div class="main">
            <Wheel class="mahWheel"/>
        </div>
        <div>
            <Button 
            label="To Title Screen"
            @click="toTitleScreen"
            />

            <Button style="margin-left: 15px;" 
            label="To Gameplay"
            @click="toGameplay"
            />
        </div>
    </main>
</template>

<style scoped>

.mahWheel{
    position: absolute;
    left: -30vh;
    top: 9vh;
}

.main{
    width: 100vw;
}

.title{
    font-family: 'Press Start 2P', sans-serif;
    font-size: 7vh;
    margin: -40vh 20vw 0 20vw;
    color: #F9ED69;
}

</style>