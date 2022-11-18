import { watch } from 'vue'
export function useWatchCount(valueToWatch,maxCount=20){
/** WATCH */
    watch(valueToWatch,(newValue)=>{
        if(newValue == maxCount){
            alert(`Only ${maxCount} characters allowed wtf`)
        }
    })
}