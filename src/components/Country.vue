<template>
    <div id="CountryReport">
        <v-container fluid>
            <v-sparkline :value="value"
                         :gradient="gradient"
                         :smooth="radius || false"
                         :padding="padding"
                         :line-width="lineWidth"
                         :stroke-linecap="lineCap"
                         :gradient-direction="gradientDirection"
                         :fill="fill"
                         :type="type"
                         :auto-line-width="autoLineWidth"
                         auto-draw
                         :show-labels="showLabels"
                         :label-size="labelSize"></v-sparkline>

            <v-divider></v-divider> 
        </v-container>
    </div>
</template>
<script>

    const gradients = [
        ['#222'],
        ['#42b3f4'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea'],
    ]

    export default {

        data: () => ({
            showLabels: true,
            lineWidth: 2,
            labelSize: 7,
            radius: 10,
            padding: 8,
            lineCap: 'round',
            gradient: gradients[3],
            value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
            gradientDirection: 'top',
            gradients,
            fill: true,
            type: 'trend',
            autoLineWidth: true,
        }),
    }

</script>