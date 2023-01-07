<template>
    <v-app-bar app flat>
        <v-row justify="space-between" align="center" class="pa-6">
            <v-col class="d-flex justify-center">
                <h3>Mohamed AL NOSSIRAT</h3>
            </v-col>
            <v-col class="d-flex justify-center">
               <v-toolbar-items>
                <v-btn variant="plain">Home</v-btn>
                <v-btn variant="plain">Blog</v-btn>
                <v-btn variant="plain">Projects</v-btn>
                <v-btn variant="plain">gallery</v-btn>
               </v-toolbar-items>
            </v-col>
            <v-col class="d-flex justify-end">
                    <v-btn variant="plain" icon>
                        <v-icon>
                            mdi-white-balance-sunny
                        </v-icon>
                    </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>
</template>
<script>
export default {
    name:'TheAppBar'
}
</script>