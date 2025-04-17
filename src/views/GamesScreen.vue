<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';
import Wheel from './Wheel.vue';
import Card from 'primevue/card';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const router = useRouter();
const toTitleScreen = () => {router.push('/')}
const toGameplay = () => {router.push('/gameplay')}
const wheelRef = ref(null)

function keyHandler(event){
    const currentPath = router.currentRoute.value.path

    if (currentPath === '/games'){
        if (event.code == 'ArrowDown'){
            wheelRef.value?.spinWheel();
        }

        if (event.code == 'ArrowUp'){
            wheelRef.value?.revSpinWheel();
        }

        if (event.code === 'Space' ){
            toGameplay();
        }

        if (event.code === 'ArrowLeft' ){
            toTitleScreen();
        }
    }

}

onMounted(() => {
    document.addEventListener('keyup', keyHandler)
})

onBeforeUnmount(() => {
    document.addEventListener('keyup', keyHandler)
})

</script>

<template>
    <main>
        <div>
            <h1 class="title">Games Page</h1>
        </div>
        <div class="main">
            <Wheel class="mahWheel" ref="wheelRef"/>
        </div>
        <Card class = "card" style="width: 40rem; overflow: hidden">
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
        
    </main>
</template>

<style scoped>

.mahWheel{
    position: absolute;
    left: -40vh;
    top: 9vh;
}

.main{
    width: 100vw;
}

.title{
    font-family: 'Press Start 2P', sans-serif;
    font-size: 6vh;
    color: #F9ED69;
    margin: 5vh 20vw 0 20vw;
    align-items: center;
}

.card {
    font-size: 100%;
    align-items: center;
    margin: 0 0 15vh 30vw;
    background-color: #ffffff24; 
    border: 2px solid #F9ED69;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header {
    font-size: 200%;
    text-align: center;
    padding-bottom: 10vh;
    font-family: 'Press Start 2P', sans-serif;
}


</style>