//Routing Rules//

import {createRouter, createWebHistory} from "vue-router";
import TitleScreen from "../views/TitleScreen.vue";
import GamesScreen from "../views/GamesScreen.vue";
import GameplayScreen from "../views/GameplayScreen.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "title",
            component: TitleScreen
        },

        {
            path: "/games",
            name: "games",
            component: GamesScreen
        },
        {
            path: "/gameplay",
            name: "gameplay",
            component: GameplayScreen
        }

    ]
})

export default router