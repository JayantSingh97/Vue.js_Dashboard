<template>
    <div id="ProductTable">
        <v-data-table :headers="headers"
                      :items="desserts"
                      sort-by="calories"
                      class="elevation-1">

            <template v-slot:top>
                <v-container>
                    <v-text-field v-model="search"
                                  append-icon="search"
                                  label="Search"
                                  single-line
                                  hide-details>
                    </v-text-field>
                </v-container>
                <v-toolbar flat>
                    <v-avatar size="38px" color="white">
                        <img src="/Apple.JPG" alt="">
                    </v-avatar>
                    <v-toolbar-title>
                        Best Selling Products
                    </v-toolbar-title>
                    <v-divider class="mx-4"
                               inset
                               vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="1000px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on"> <v-icon>laptop</v-icon> Add Product</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.ProductName" label="Product Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.Price" label="Price"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.InStock" label="Color"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.Price" label="Disscount"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.Disscount" label="Disscount"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.ImgUrl" label="ImgUrl"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:item.action="{ item }">

                <v-icon small
                        class="mr-2"
                        @click="editItem(item)">
                    edit
                </v-icon>
                <v-icon small
                        @click="deleteItem(item)">
                    delete
                </v-icon>
            </template>
            <template v-slot:item.ImgUrl="{ item }">
                <v-list-item-avatar tile
                                    size="50"
                                    color="grey">
                    <img style="border-radius: 40px;" :src="item.ImgUrl" alt="">
                </v-list-item-avatar>
            </template>
            <template v-slot:item.ProductName="{ item }">
                {{item.ProductName}}
            </template>
            <template v-slot:item.Price="{ item }">
                {{item.Price}}
            </template>
            <template v-slot:item.Color="{ item }">
                {{item.Color}}
            </template>
            <template v-slot:item.Disscount="{ item }">
                {{item.Disscount}}
            </template>

            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>

        </v-data-table>

    </div>
</template>
<script>
    export default {

        data: () => ({
            dialog: false,
            search: '',
            headers: [
                { text: 'ImgUrl', value: 'ImgUrl' },
                {
                    text: 'ProductName',
                    align: 'left',
                    sortable: false,
                    value: 'ProductName',
                },
                { text: 'Price', value: 'Price' },
                { text: 'Color', value: 'Color' },
                { text: 'Disscount', value: 'Disscount' },

                { text: 'Actions', value: 'action', sortable: false },

            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                ProductName: '',
                Price: 0,
                InStock: false,
                Color: '',
                Disscount: '',
                ImgUrl: ''
            },
            defaultItem: {
                ProductName: '',
                Price: 0,
                InStock: false,
                Color: '',
                Disscount: '',
                ImgUrl: ''
            },

        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? 'Add Product' : 'Edit Product'
            },
        },

        watch: {
            dialog(val) {
                val || this.close()
            },
        },

        created() {
            this.initialize()
        },

        methods: {
            initialize() {

                this.desserts = [
                    { ImgUrl: "/Iphonex.JPG", ProductName: 'Iphone x', Price: 369, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Mac Book', Price: 659, InStock: true, Color: "Black", Disscount: "10%" },
                    { ImgUrl: "/Ipad.JPG", ProductName: 'Ipad', Price: 259, InStock: false, Color: "White", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Iphone x', Price: 479, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Iphonex.JPG", ProductName: 'Iphone x', Price: 369, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Ipad.JPG", ProductName: 'Ipad', Price: 259, InStock: false, Color: "White", Disscount: "4%" },
                    { ImgUrl: "/Iphonex.JPG", ProductName: 'Iphone x', Price: 369, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Earpod.JPG", ProductName: 'Earpod', Price: 349, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Iphonex.JPG", ProductName: 'Iphone x', Price: 369, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Mac Book', Price: 359, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Iphonex.JPG", ProductName: 'Iphone x', Price: 369, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Iphone x', Price: 49, InStock: false, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Iphone x', Price: 429, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Iphonex.JPG", ProductName: 'Iphone x', Price: 369, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Iphone x', Price: 469, InStock: true, Color: "Black", Disscount: "4%" },
                    { ImgUrl: "/Mac.JPG", ProductName: 'Mac Book', Price: 859, InStock: true, Color: "Black", Disscount: "4%" },
                ]
            },

            editItem(item) {
                this.editedIndex = this.desserts.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },


            deleteItem(item) {

                const index = this.desserts.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
                this.$awn.alert('Product deleted Successfully!')
            },

            close() {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },



            save() {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                    this.$awn.info("Product Updated Successfully!.")
                } else {
                    this.desserts.push(this.editedItem)
                    this.$awn.info("Product Created Successfully!.")
                }
                this.close()
            },
        },
    }
</script>

<style>
    .icon {
        font-size: 20px;
    }

    .logo {
        width: 60px;
        height: 50px;
        border-radius: 40px;
    }
</style>