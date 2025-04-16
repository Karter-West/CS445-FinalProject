<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';
import Wheel from './Wheel.vue';
import Card from 'primevue/card';

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
        <Card class = "card" style="width: 25rem; overflow: hidden">
            <template #header>
                <div class = "header"> gameplay </div>
            </template>
            <template #title>Game Title</template>
            <template #subtitle>Author: Jane Doe</template>
            <template #content>
                <p class="m-0">
                    Game description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <div class="flex gap-4 mt-1">
                    <Button label="2 p" />
                    <Button style = "margin-left: 15px;" label="10 min"/>
                </div>
            </template>
        </Card>
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
    left: -25vh;
    top: 9vh;
}

.main{
    width: 100vw;
}

.title{
    font-family: 'Press Start 2P', sans-serif;
    font-size: 3vh;
    margin: 0vh 20vw 0 20vw;
    align-items: center;
}

.card {
    font-size: 100%;
    align-items: center;
    margin: 5vh 0 15vh 25vw;
}

.header {
    font-size: 200%;
    text-align: center;
    padding-bottom: 10vh;
    font-family: 'Press Start 2P', sans-serif;
    background-color: aqua;
}


</style>