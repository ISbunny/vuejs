<template>
    <div>
        <div v-for="item in inputs" :key="item.id">
            <button class="btn btn-primary my-2" @click="changeText(item)"> {{ item.btnText }}</button>
        </div>
        <button class="btn btn-secondary" @click="addText">Add Text</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            inputs : [
                {id: 0,collapsed: true,btnText: `It's True`}
            ]
        }
    },
    methods: {
        changeText(item){
            item.collapsed = !item.collapsed;
            if(item.collapsed){
                item.btnText = `It's True`
            }else{
                item.btnText = `Its False`
            }
        },
        addText(){
            this.inputs.push({
                id: this.inputs.length,
                collapsed: true,
                btnText:`It's True`
            })
        }
    }
}


</script>
