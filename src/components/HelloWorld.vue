<template>
    <div>
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer"
                                 :clipped="$vuetify.breakpoint.lgAndUp"
                                 app>
                <v-list dense height="100%">
                    <template v-for="item in items">
                        <v-layout v-if="item.heading"
                                  :key="item.heading"
                                  row
                                  align-center>
                            <v-flex xs6>
                                <v-subheader v-if="item.heading">
                                    {{ item.heading }}
                                </v-subheader>
                            </v-flex>
                            <v-flex xs6
                                    class="text-xs-center">
                                <a href="#!"
                                   class="body-2 black--text">EDIT</a>
                            </v-flex>
                        </v-layout>

                        <v-list-item v-else
                                     :key="item.text"
                                     v:on-click="">
                            <v-list-item-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.text }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp"
                       app
                       color="blue darken-3"
                       dark>
                <v-toolbar-title style="width: 300px"
                                 class="ml-0 pl-3">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-avatar size="38px" color="white">
                        <img src="/Apple.JPG" alt="">
                    </v-avatar>

                    <span class="hidden-sm-and-down"> <strong> Apple Console</strong></span>
                </v-toolbar-title>
                <v-text-field flat
                              solo-inverted
                              hide-details
                              prepend-inner-icon="search"
                              label="Search"
                              class="hidden-sm-and-down"></v-text-field>
                <v-spacer></v-spacer>

                <template>

                    <v-btn icon>
                        <v-icon>apps</v-icon>
                    </v-btn>
                    <v-btn icon v-on:click="ActivatedDarkmode()">
                        <v-icon>brightness_medium</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>notifications</v-icon>
                    </v-btn>
                    <div class="text-center">
                        <v-menu transition="scale-transition">
                            <template v-slot:activator="{ on }">
                                <v-btn icon
                                       v-on="on" large>
                                    <v-avatar size="38px" color="white">
                                        <img src="https://avatars0.githubusercontent.com/u/51473212?s=460&v=4" alt="">
                                    </v-avatar>
                                </v-btn>
                            </template>
                            <v-list style="margin-top:45px">
                                <v-list-item v-on:click="alert()">
                                    <v-list-item-action>
                                        <v-icon>account_circle</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            Welcome: User
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item v-on:click="alert()">
                                    <v-list-item-action>
                                        <v-icon>settings_applications</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            Settings
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <v-list-item v-on:click="alert()">
                                    <v-list-item-action>
                                        <v-icon>power_settings_new</v-icon>
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            Logout
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                            </v-list>
                        </v-menu>
                    </div>
                </template>


            </v-app-bar>



            <v-container class="">

                <v-banner :sticky="sticky"
                          :single-line="singleLine"
                          :icon="icon"
                          :color="color"
                          :icon-color="iconColor"
                          :elevation="elevation"
                          class="mx-auto v-card v-card--outlined v-sheet theme--light">
                    <h4> Apple Global Dashboard</h4>
                    <template v-slot:actions>

                        <v-btn to="/Dashboard" v-on:click="Refersh()"
                               outlined
                               :loading="loading2"
                               :disabled="loading2"
                               color="primary"
                               @click="loader = 'loading2'">
                            <v-icon>refresh</v-icon> Refresh Board
                            <template v-slot:loader>
                                <span>Loading...</span>
                            </template>
                        </v-btn>


                    </template>
                </v-banner>


                <v-row>
                    <v-col cols="12"
                           sm="3">
                        <template>
                            <v-card class="mx-auto"
                                    outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="overline mb-4">Mack Book</div>
                                        <v-list-item-title class="headline mb-1">$12000</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <v-sparkline :fill="fill"
                                                         :gradient="gradient"
                                                         :line-width="width"
                                                         :padding="padding"
                                                         :smooth="radius || false"
                                                         :value="value"
                                                         auto-draw></v-sparkline>
                                            Updating Live...
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile
                                                        size="80"
                                                        color="grey">
                                        <img style="border-radius: 40px;" src="/mac.jpg" alt="">
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text> <v-icon>visibility</v-icon> View</v-btn>
                                    <v-btn text> <v-icon>fullscreen</v-icon> Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>


                    </v-col>
                    <v-col cols="12"
                           sm="3">
                        <template>
                            <v-card class="mx-auto"
                                    outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="overline mb-4">Iphone X</div>
                                        <v-list-item-title class="headline mb-1">$15000</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <v-sparkline :fill="fill"
                                                         :gradient="gradient"
                                                         :line-width="width"
                                                         :padding="padding"
                                                         :smooth="radius || false"
                                                         :value="value"
                                                         auto-draw></v-sparkline>
                                            Updating Live...
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile
                                                        size="80"
                                                        color="grey">
                                        <img style="border-radius: 40px;" src="/Iphonex.jpg" alt="">
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text> <v-icon>visibility</v-icon> View</v-btn>
                                    <v-btn text> <v-icon>fullscreen</v-icon> Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>


                    </v-col>

                    <v-col cols="12"
                           sm="3">
                        <template>
                            <v-card class="mx-auto"
                                    outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="overline mb-4">Ipad</div>
                                        <v-list-item-title class="headline mb-1">$12000</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <v-sparkline :fill="fill"
                                                         :gradient="gradient"
                                                         :line-width="width"
                                                         :padding="padding"
                                                         :smooth="radius || false"
                                                         :value="value"
                                                         auto-draw></v-sparkline>
                                            Updating Live...
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile
                                                        size="80"
                                                        color="grey">

                                        <img style="border-radius: 40px;" src="/Ipad.jpg" alt="">
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text> <v-icon>visibility</v-icon> View</v-btn>
                                    <v-btn text> <v-icon>fullscreen</v-icon> Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>


                    </v-col>

                    <v-col cols="12"
                           sm="3">
                        <template>
                            <v-card class="mx-auto"
                                    outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>

                                        <div class="overline mb-4">Airpods</div>
                                        <v-list-item-title class="headline mb-1">$32000</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <v-sparkline :fill="fill"
                                                         :gradient="gradient"
                                                         :line-width="width"
                                                         :padding="padding"
                                                         :smooth="radius || false"
                                                         :value="value"
                                                         auto-draw></v-sparkline>
                                            Updating Live...
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile
                                                        size="80"
                                                        color="grey">
                                        <img style="border-radius: 40px;" src="/earpod.jpg" alt="">
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text> <v-icon>visibility</v-icon> View</v-btn>
                                    <v-btn text> <v-icon>fullscreen</v-icon> Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>


                    </v-col>

                </v-row>

                <v-row>

                    <v-col cols="12"
                           sm="6">
                        <template>
                            <v-card class="mx-auto"
                                    outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="overline mb-4">Indian Market Report</div>
                                        <v-list-item-title class="headline mb-1">$33343432</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <Country />
                                            Updating Live...
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile
                                                        size="80"
                                                        color="grey">
                                        <img style="border-radius: 40px;" src="/india.JPG" alt="" />
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text> <v-icon>visibility</v-icon> View</v-btn>
                                    <v-btn text> <v-icon>fullscreen</v-icon> Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>


                    </v-col>
                    <v-col cols="12"
                           sm="6">
                        <template>
                            <v-card class="mx-auto"
                                    outlined>
                                <v-list-item three-line>
                                    <v-list-item-content>
                                        <div class="overline mb-4">US Maerket Report</div>
                                        <v-list-item-title class="headline mb-1">$23343432</v-list-item-title>
                                        <v-list-item-subtitle>
                                            <Country />
                                            Updating Live...
                                        </v-list-item-subtitle>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile
                                                        size="80"
                                                        color="grey">
                                        <img style="border-radius: 40px;" src="/Us.JPG" alt="">
                                    </v-list-item-avatar>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn text> <v-icon>visibility</v-icon> View</v-btn>
                                    <v-btn text> <v-icon>fullscreen</v-icon> Expand</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>


                    </v-col>
                </v-row>

                <VueTable />
            </v-container>

            <v-btn bottom
                   color="pink"
                   dark
                   fab
                   fixed
                   right
                   @click="dialog = !dialog">
                <v-icon>add</v-icon>
            </v-btn>
            <div id="awn-popup-wrapper" v-if="isloading" style="animation-duration: 0.3s;"><div class="awn-popup-body awn-popup-async-block">Loading<div class="awn-popup-loading-dots"></div></div></div>
        </v-app>
    </div>
</template>

<script>
    import VueTable from './VueTable';
    import Country from './Country';

    const gradients = [
        ['#222'],
        ['#42b3f4'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea'],
    ]

    export default {

        components: {
            VueTable,
            Country
        },
        data: () => ({
            fill: true,
            gradient: gradients[4],
            gradients,
            padding: 8,
            radius: 10,
            value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
            width: 2,
            sticky: false,
            singleLine: true,
            icon: 'dashboard',
            color: undefined,
            iconColor: undefined,
            loader: null,
            loading: false,
            loading2: false,
            loading3: false,
            loading4: false,
            loading5: false,
            colors: ['red', 'blue', 'teal lighten-2', 'warning lighten-1', 'orange'],
            icons: ['mdi-access-point-network', 'mdi-plus', 'mdi-minus', 'mdi-network-strength-2-alert', 'mdi-earth'],
            dialog: false,
            drawer: null,
            isloading: false,
            items: [
                { icon: 'dashboard', text: 'Dashboard' },
                { icon: 'history', text: 'Daily Summary' },
                { icon: 'card_travel', text: 'Report' },
                { icon: 'settings', text: 'Stock Market' },
                { icon: 'chat_bubble', text: 'Users Feedback' },
                { icon: 'help', text: 'SOS' },
                { icon: 'credit_card', text: 'Transactions' },
                { icon: 'phonelink', text: 'Products Information' },
                { icon: 'brightness_medium', text: 'Dark Mode' },
                { icon: 'power_settings_new', text: 'Logout' },
            ],
            isdarkmodeactivated: false,

        }),
        methods: {
            alert() {
                this.$awn.success("Action Done.")
            },

            Refersh() {
                this.isloading = !this.isloading;
                setTimeout(() => {
                    this.isloading = !this.isloading;
                }, 2000);

            },

            ActivatedDarkmode: function () {
                this.isdarkmodeactivated = !this.isdarkmodeactivated;
                this.$vuetify.theme.dark = this.isdarkmodeactivated;
                if (this.isdarkmodeactivated)
                    this.$awn.success("Dark mode activated !.")
                else
                    this.$awn.info('Dark mode Deactivated')


            }
        },

        watch: {
            loader() {
                const l = this.loader
                this[l] = !this[l]

                setTimeout(() => (this[l] = false), 3000)

                this.loader = null
            },
        },

    };
</script>

<style scope>

    nav {
        height: 100vh;
        top: 67px;
        max-height: calc(100% - 128px);
        transform: translateX(0%);
        width: 256px;
    }

    .product-img {
        border-radius: 40px;
    }

    .logo {
        margin-top: 12px;
    }

    .awn-toast, .awn-toast-warning, .awn-toast-wrapper {
        border-color: black;
    }
</style>
