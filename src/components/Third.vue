<template>
        <div id="data">
        Имя героя: {{ name }} 
        </div>
    


</template>
<script setup>
    import { ref, onMounted } from 'vue'
    const name = ref('Загрузка...')
    onMounted(async () => {
        const response = await fetch('https://swapi.py4e.com/api/people/1/')
    
        const data = await response.json()
        console.log(data)
        name.value = data.name
    })
    
        

</script>
<style scoped>
    div{
        background-color: rgb(14, 14, 156);
        color: whitesmoke;
        text-align: center;
        border-radius: 10px;
        border-width: 20px;
        border: 6px solid rgb(23, 23, 32);
        font-size: 36px;
        min-height: 12px;
    }
</style>