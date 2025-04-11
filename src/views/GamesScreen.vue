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
            <h1>Games Page</h1>
        </div>
        <div class="main">
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
    position: absolute;
    left: -20vh;
    top: 32vh;
}

.main{
    width: 100vw;
}

</style>