<script setup>
import {useRouter} from 'vue-router';
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

        if (event.code === 'Space' || event.code === 'ArrowRight'){
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
        <div class="title">
            <h1 class="title-text">Games Page</h1>
            <p class="controls-text">(Use the arrow keys as your controller)</p>
        </div>
        <div class="main">
            <Wheel class="mahWheel" ref="wheelRef"/>
        </div>
        <Card class = "card" style="width: 60vw; height: 75vh; overflow: hidden">
            <template #header>
                <div class = "header"> Gameplay </div>
            </template>

            <template #title>
                <h4 class="card-title">Game Title</h4>
            </template>

            <template #subtitle>
                <h4 class="card-title">Author: John Doe</h4>
            </template>
            <template #content>
                <p class="m-0">
                    Game description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <div class="footer">
                    <div class="footer-text">2 Players</div>
                    <div class="footer-text">30 min</div>
                </div>
            </template>
        </Card>
        <div class="button-container">
            <Button class = "space">[space] = select</Button>
            <Button icon="pi pi-chevron-up" label = "= roll up" class = "up"></Button>
            <Button icon="pi pi-chevron-down" label = "= roll down" class = "down"></Button>
        </div>
        
    </main>
</template>

<style scoped>

.mahWheel{
    position: absolute;
    left: -35vh;
    top: 10vh;
}

.main{
    width: 100vw;
}

.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title-text{
    font-family: 'Press Start 2P', sans-serif;
    font-size: 6vh;
    color: #F9ED69;
    margin-top: 3rem;
    margin-bottom: 0;
    padding: 0;
    line-height: 0;
}

.controls-text{
    font-size: .6rem;
    font-family: 'Press Start 2P', sans-serif;
    margin-top: 0;
    margin-bottom: 2.5rem;
    line-height: 0;
}


.card {
    font-size: 100%;
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
    padding-top: 5vh;
    padding-bottom: 1vh;
    font-family: 'Press Start 2P', sans-serif;
}

.m-0 {
    font-size: smaller;
    font-family: 'Press Start 2P', sans-serif;
}

.card-title{
    font-family: 'Press Start 2P', sans-serif;
}
.button-container {
    margin-left: -65vw;
    margin-top: -10vh;
}
.space, .up, .down {
    background-color: #ffffff24; 
    border: 2px solid #F9ED69;
    margin-left: 15px;
}

.footer {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
}

.footer-text{
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-family: 'Press Start 2P', sans-serif;
    font-size: 0.55rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

</style>