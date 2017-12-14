<template>
    <hui-card>
        <div name="header">{{title}}</div>
        <div name="content">
            <div class="image-list">
                <div class="image" v-if="multiple == true" v-for="(image, index) in uploadImages">
                    <img :src="image">
                    <span class="vmc-badge" @click="_sliceImages(index)">x</span>
                </div>
                <div class="image" v-if="(multiple == false) && !empty(uploadImages)">
                    <img :src="uploadImages">
                    <span class="vmc-badge" @click="_sliceImages">x</span>
                </div>
                <div class="vmc-upload" v-if="!input" v-show="(multiple == false && empty(uploadImages)) || multiple" @click="_upload">
                    <slot>
                        <div class="vmc-upload-button">
                            <i class="icono-plus"></i>
                        </div>
                    </slot>
                </div>
                <div class="vmc-upload" v-if="input" v-show="(multiple == false && empty(uploadImages)) || multiple">
                    <slot>
                        <div class="vmc-upload-button">
                            <i class="icono-plus"></i>
                        </div>
                    </slot>
                    <input v-if="input" type="file" class="fileInput" :name="name" :accept="accept" :multiple="multiple" @change="_onChange">
                </div>
            </div>
        </div>
    </hui-card>
</template>
<script>
import Card from '../../card/src/card.vue';
import is from 'is'
export default {
    name: 'hui-upload',
    extends: Card,
    props: {
        title: {
            default: '请上传图片'
        },
        upload: {
            type: Function,
            default: function() {
                console.log('未传入函数');
            }
        },
        images: {
            default: []
        },
        name: {
            type: String
        },
        accept: {
            type: String,
            default: 'image/*'
        },
        body: {
            type: Object,
            default: () => {}
        },
        multiple: {
            type: Boolean,
            default: false
        },
        validator: Function,
        input: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            uploadImages: this.images
        }
    },
    watch: {
        images(val) {
            this.uploadImages = val;
        }
    },
    methods: {
        empty(data){
            return is.empty(data);
        },
        _upload() {
            this.upload();
        },
        _sliceImages(index) {
            if (this.multiple) {
                this.uploadImages.splice(index, 1);
            } else {
                this.uploadImages = '';
            }
            this.$emit('on-slice', this.uploadImages);
        },
        _onChange() {
            var files = this.$el.querySelector('input[type=file]').files;
            if (!files.length) return;

            this._uploadFile(files);
        },
        _uploadFile(files) {
            var _self = this;

            Promise.resolve().then(function() {
                for (let i = 0, len = files.length; i < len; i++) {
                    let file = files[i];
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function(e) {
                        _self.upload(e.target.result);
                    }
                }
            }).then(function() {
                _self._clearInputFile();
            }).catch(function(err) {
                console(err);
            });
        },
        _clearInputFile() {
            var fileInput = this.$el.querySelector('input[type=file]');
            if (fileInput.value) {
                try {
                    fileInput.value = '';
                } catch (e) {}

                if (fileInput.value) {
                    var form = document.createElement('form'),
                        brother = fileInput.nextSibling,
                        parent = fileInput.parentNode;

                    form.appendChild(fileInput);
                    form.reset();
                    parent.insertBefore(fileInput, brother);
                }
            }
        }
    }
}
</script>
<style lang="less">
@import '../../../styles/components/upload.less';
</style>
