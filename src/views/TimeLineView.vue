<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-timeline align="start">
          <v-timeline-item v-for="(exp, index) in timeline" :key="index" dot-color="pink">
            <template v-slot:opposite>
              <strong>{{ exp.year }}</strong>
            </template>
            <div>
              <div class="text-h6">{{ exp.company }}</div>
              <v-list v-if="exp.skills" density="compact">
                <v-list-item v-for="(skill, index) in exp.skills" :key="index" :title="skill.title" lines="2">
                  <v-list-item-subtitle>
                    <p>{{ skill.details }}</p>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import timeline from '@/assets/timeline.json'
export default {
  name: 'TimeLineView',
  data: () => ({
    timeline: timeline.expiriences
  })
}
</script>
