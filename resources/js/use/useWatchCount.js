import { watch } from 'vue'
export function useWatchCount(valueToWatch,maxCount=20){
/** WATCH */
    watch(valueToWatch,(newValue)=>{
        if(newValue == maxCount){
            console.log(`Max ${maxCount} reached`);
        }
    })
}