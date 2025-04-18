<script setup>
import {useRouter} from 'vue-router';
import { onMounted, onBeforeUnmount } from 'vue';

const router = useRouter();
const toGamesScreen = () => {router.push('/games')}

function toNextScreen(event){
    const currentPath = router.currentRoute.value.path

    if (event.code === 'Space' && currentPath === '/'){
        toGamesScreen();
    }

    if (event.code === 'ArrowRight' && currentPath === '/'){
        toGamesScreen();
    }
}

onMounted(() => {
    document.addEventListener('keyup', toNextScreen)
})

onBeforeUnmount(() => {
    document.removeEventListener('keyup', toNextScreen);
});

</script>

<template>
    <main class="title-screen">
        <div>
            <h1 class="title">Indy Indies</h1>
            <h2>Press Space or ">" To Start</h2>
        </div>
    </main>


</template>

<style scoped>

.title{
    font-family: 'Press Start 2P', sans-serif;
    font-size: 14vh;
    color: #F9ED69;
    margin: auto;
}
</style>