<template>
    <div class="mt-3">
        <div>Edit Profile</div>
        
        <form>
            <div class="custom-file">
                <input type="file" @change="onFileSelected" class="custom-file-input"  id="validatedCustomFile">
                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                <div class="invalid-feedback">Example invalid custom file feedback</div>
            </div>
        </form>
        <br>
        <button @click="upload" class="btn btn-primary"> submit </button>
    </div>
</template>

<script>
export default {
    layout: 'navbar',
    data() {
        return {
            selectedFile: null
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        upload() {
            const fd = new FormData();
            fd.append('image', this.selectedFile, this.selectedFile.name)
            axios.post('http://localhost:4000/uploadimg', fd)
                .then(response => {
                console.log(response)
                })
                .catch(error => {
                console.log(error);
                });
        }
    }
}
</script>
