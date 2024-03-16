import { createStore } from "vuex";
import projectDetails from "./modules/projectDetails";
import project from "./modules/project";

export default createStore ({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        projectDetails,
        project,
    }
})