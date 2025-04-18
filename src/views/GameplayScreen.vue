<script setup>
import {useRouter} from 'vue-router';
import Card from 'primevue/card';
import { onMounted, onBeforeUnmount } from 'vue';

const router = useRouter();
const toGamesScreen = () => {router.push('/games')}

function keyHandler(event){
    const currentPath = router.currentRoute.value.path

    if (event.code === 'ArrowLeft' && currentPath === '/gameplay'){
        toGamesScreen();
    }
}

onMounted(() => {
    document.addEventListener('keyup', keyHandler)
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', keyHandler)
})

</script>

<template>
    <main>
        <div class="firstTextWrapper">
            <div class="gameTitleContainer">
                <h1>Game Title</h1>
            </div>
            <div class="authorContainer">
                <h2>Made by Developer</h2>
            </div>
            <div class="descriptContainer">
                <h2>
                    Game Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </h2>
            </div>
        </div>
        
        <div class="logoContainer">
            <Card class = "custom-card">
                <template #content>
                    <h2>Logo here</h2>
                </template>
            </Card>
        </div>
        
        <div class="gameplayContainer">
            <Card class = "custom-card2">
                <template #content>
                    <h2>Gameplay goes here</h2>
                </template>
            </Card>
        </div>
        <div class="startContainer">
            <h2>Press any button to start.</h2>
        </div>
    
    </main>
</template>

<style scoped>
    .firstTextWrapper {
        position: absolute;
        top: 50px;
        left: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 100vw;
    }

    .custom-card {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 30vw;
        height: 20vh;
        background-color: #ffffff24; 
        border: 2px solid #F9ED69;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .custom-card2 {
        width: 80vw;
        height: 40vh;
        background-color: #ffffff20;
        border: 2px solid #F9ED69;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 200px;
    }

    .gameTitleContainer h1{
        font-size: 2.5rem;
        color: #F9ED69;
        margin-bottom: -20px;
    }
    .authorContainer h2{
        font-size: 1.25rem;
        color: #f5f5f5;
        margin-bottom: 20px;
    }
    .logoContainer h2{
        font-size: 150%;
        border: red;
    }
    .gameplayContainer h2{
        border: red;
        font-size: 150%;
    }
    .descriptContainer h2{
        width: 40vw;
        font-size: .5rem;
        color: #F08A5D;
        text-align: left;
    }
    .startContainer h2{
        text-align: center;
        font-size: 175%;
        color: #F9ED69;
        margin-top: 100px;
    }

    .button {
        position: absolute;
        bottom: 50px;
        left: 50px;
    }

</style>