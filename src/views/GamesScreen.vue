<script setup>
import {useRouter} from 'vue-router';
import { Button } from 'primevue';

const router = useRouter();
const toTitleScreen = () => {router.push('/')}
const toGameplay = () => {router.push('/gameplay')}
</script>

<template>
    <main>
        <div>
            <h1>Games Page</h1>
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