<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';
import Wheel from './Wheel.vue';

const router = useRouter();
const toTitleScreen = () => {router.push('/')}
const toGameplay = () => {router.push('/gameplay')}
</script>

<template>
    <main class="main">
        <div>
            <h1>Games Page</h1>
        </div>
        <div>
            <Wheel class="mahWheel"/>
        </div>
        <div>
            <Button 
            label="To Title Screen"
            @click="toTitleScreen"
            />

            <Button 
            label="To Gameplay"
            @click="toGameplay"
            />
        </div>
    </main>
</template>

<style scoped>

.mahWheel{
    position: relative;
    left: -130%;
}

.main{
    width: 100vw;
    height: 100vh;
}

</style>