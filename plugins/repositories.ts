import createRepositories from "~/repositories";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            repositories: createRepositories()
        }
    }
})