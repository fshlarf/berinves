<template>
    <div class="container mt-3">
        <h4>
            Isi Ide kamu
        </h4>
        <form>
            <div class="form-group row">
            <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Judul usaha: </label>
            <div class="col-sm-7">
                <input type="text" class="form-control" placeholder="Ingin Bikin Usaha Cafe Kekinian">
            </div>
            </div>

            <div class="form-group row">
            <label for="staticEmail" class="col-sm-4 col-form-label" align="left">Deskripsi usaha : </label>
            <div class="col-sm-7">
                <textarea class="form-control" placeholder="Deskripsi ide usaha kamu"></textarea>
            </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    layout: 'navbar'
};
</script>

