import {ref, onMounted, onUnmounted} from "vue"                //1
function useDocumentScroll(){
    const y=ref(window.scrollY)                                //2
    function update(){y.value=window.scrollY}
    onMounted(()=>{
        document.addEventListener('scroll', update)})          //3
    onUnmounted (()=>{
        document.removeEventListener('scroll', update)})       //4
    return {y}                                                 //5
}
export {useDocumentScroll};                                    //6
