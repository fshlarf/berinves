<template>
    <div class="cont-createIdea mt-4" >
        <div class="card col-md-6">
            <div class="card-body">
                <h5>
                    Isi Ide kamu
                </h5>
                <br>
                <form>
                    <div class="form-group row">
                    <label for="staticEmail" class="col-md-4 col-form-label" align="left">Judul usaha</label>
                    <div class="col-md-8">
                        <input type="text" class="form-control" placeholder="Judul ringkas usaha" v-model="form.title">
                    </div>
                    </div>
                    
                    <div class="form-group row">
                    <label for="staticEmail" class="col-md-4 col-form-label" align="left" >Deskripsi usaha </label>
                    <div class="col-md-8">
                        <textarea class="form-control" placeholder="Deskripsi usaha" v-model="form.idea"></textarea>
                    </div>
                    </div>
                </form>
                <div class="col-md-12 row justify-content-end">
                    <button class="btn btn-primary btn-sm btn-createIdea" @click="updateIdea">Submit</button>
                </div>
                <br>
            </div>
        </div>    
    </div>
</template>

<script>
import axios from "axios";

export default {
    layout: 'navbar',
    data() {
        return {
            users: [],
            form: {
                title:"",
                idea:""
            }
        }
    },

    methods: {
        updateIdea(id, users, form) {
            var updateData = {
                title : this.form.title,
                idea : this.form.idea
            }

            axios.put('http://localhost:4000/update' + id, this.form)
            .then(response => {
                console.log(response);
                response.data = form
            })
            .catch(error => {
                console.log(error);
            });
        }

    }

}   
</script>

<style>
.container .cont-createIdea {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn-createIdea {
    padding-right: 15px;
    padding-left: 15px;
}

</style>

