<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';

const router = useRouter();
const toGamesScreen = () => {router.push('/games')}
</script>

<template>
    <main class="title-screen">
        <div>
            <h1 class="title">Indy Indies</h1>
            <h2>Press Any Key To Start</h2>
        </div>

        <div>
            <Button 
            label="To Games Screen"
            @click="toGamesScreen"
            />
        </div>
    </main>


</template>

<style scoped>

.title{
    font-family: 'Press Start 2P', sans-serif;
    font-size: 100px;
    margin: auto;
}
</style>