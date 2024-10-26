<script setup>
import { ref, computed } from "vue"                        //1
const                                                      //2
    _todo_text = ref(""),
    _todo_list = ref([]),
    _pending = computed(() => {                            //3
         return _todo_list.value.filter(item =>
                                        !item.checked)
         }),
    _done = computed(() => {                               //4
         return _todo_list.value.filter(item =>
                                        item.checked)
     })
function clearToDo() {_todo_text.value = ""}               //5
function addToDo() {                                       //6
    if (_todo_text.value && _todo_text.value !== "") {
        _todo_list.value.push({id:  new Date().valueOf(),
        text: _todo_text.value, checked: false})
        clearToDo()
    }
}
</script>
<template>
</template>