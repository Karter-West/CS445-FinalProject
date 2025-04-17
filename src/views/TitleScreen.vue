<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';
import { onMounted, onBeforeUnmount } from 'vue';

const router = useRouter();
const toGamesScreen = () => {router.push('/games')}

function toNextScreen(event){
    if (event.code === 'Space' && router.currentRoute.value.path === '/'){
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
            <h2>Press Any Key To Start</h2>
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