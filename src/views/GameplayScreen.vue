<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';

const router = useRouter();
const toTitleScreen = () => {router.push('/')}
</script>

<template>
    <main>
        <div>
            <h1>Gameplay Page</h1>
        </div>

        <div>
            <Button 
            label="To Title Screen"
            @click="toTitleScreen"
            />
        </div>
    </main>
</template>