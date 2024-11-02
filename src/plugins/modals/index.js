//src/plugins/modals/index.js 
import { reactive } from "vue"                     //1 by importing the reactive constructor from Vue, and a Modal component
import Modal from "./Modal.vue"
const
    _current = reactive({}),                       //2, we create an internal state property, _current, and in

    api = {},                                      //3, an object that will be our API. For now, these are just placeholders. The important section is in line
    plugin = {
        install(App, options) {                    //4, where we define the install() function. This function receives two parameters
            App.component("Modal", Modal)          // With the application instance, we register Modal as a global component and 

            App.provide("$modals", api)            // provide the API as an injectable resource
        }
    }
export default plugin