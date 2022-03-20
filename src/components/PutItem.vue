<template>
    
    <div class="card" id="put_form_object">
        <div class="card-header">Modificar Objeto de Ollivanders</div>
        <div class="card-body">
            <p id="item_id" style="visibility:hidden;">{{$route.params.id}}</p>
            <div class="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" name="name" id="name"/>
            </div>
            <div class="form-group">
                <label for="sell_in">Precio</label>
                <input type="text" class="form-control" name="sell_in" id="sell_in">
            </div>
            <div class="form-group">
                <label for="quality">Grado de calidad</label>
                <input type="text" class="form-control" name="quality" id="quality"/>
            </div>
            <button class="btn btn-sm btn-primary" @click="modify_item">Crear nuevo Objeto</button>
            <button class="btn btn-sm btn-warning ml-2" @click="clear_put_output">Clear</button>
            <br>
            <button v-if="put_result" class="alert alert-secondary mt-2" role="alert"><pre>{{put_result}}</pre></button>

        </div>
    </div>
</template>

<script>
export default {
    name: 'PutItem',
    data(){
        return{
            put_result: ''
        }
    },
    methods:{
        format_response(res){
            return JSON.stringify(res,null,2);
        },
        async modify_item(){
            this.put_result = '';
            const item_id = document.getElementById("item_id").textContent;
            const modify_item = {
                name: document.getElementById("name").value,
                sell_in:  document.getElementById("sell_in").value,
                quality:  document.getElementById("quality").value
            };
            if (typeof parseInt(modify_item.sell_in) != 'number' || typeof parseInt(modify_item.sell_in) == NaN  || modify_item.sell_in == '' || typeof parseInt(modify_item.quality) != 'number' || typeof parseInt(modify_item.quality) == NaN || modify_item.quality == ''){
                this.put_result += "los campos numéricos solo pueden ser numéricos\n";
            }
            if (modify_item.name == ''){
                this.put_result += "los campos no pueden estar vacíos\n"
            }
            if (this.put_result != ''){
                return this.put_result
            }
            try{
                const res = await fetch("http://localhost:5000/item/"+item_id,{
                    method: "PUT",
                    mode:"cors",
                    headers: {
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify(modify_item)
                });
                if (!res.ok){
                    const message = `Un error ha ocurrido: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }
                const data = await res.json();
                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: {
                        "Content-Type": res.headers.get("Content-Type"),
                        "Content-Length": res.headers.get("Content-Length"),
                    },
                    data:data
                };
                this.put_result = this.format_response(result);
            } catch (err){
                this.put_result = err.message;
            }
        },
        clear_put_output(){
            this.put_result = null;
        }
    }
}
</script>