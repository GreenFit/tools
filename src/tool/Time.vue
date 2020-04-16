<template>
  <div>
    <div class="row">
      <div class="col">
        <span>现在时间:</span>
      </div>
      <div class="col">
        <span class="nowTime" v-html="nowTime">2019-05-10 20:01:48</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span>时间戳:</span>
      </div>
      <div class="col">
        <span class="nowTimestamp">111111</span>
      </div>
    </div>
    <div class="row">
      <div class="datetime">现在时间:</div>
    </div>
    <div class="row">
      <div class="info">现在时间:</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "时间工具",
  computed: {
    nowTime() {
      return moment.now();
    }
  }
};
</script>
