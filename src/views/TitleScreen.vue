<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';

const router = useRouter();
const toGamesScreen = () => {router.push('/games')}
</script>

<template>
    <main>
        <div>
            <h1>Title Page</h1>
        </div>

        <div>
            <Button 
            label="To Games Screen"
            @click="toGamesScreen"
            />
        </div>
    </main>


</template>