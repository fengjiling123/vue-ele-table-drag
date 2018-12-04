<template>
  <div>
    <!--
      <el-button type="primary" @click="dialogTableVisible = !dialogTableVisible;"
        >点我点我</el-button
      >
      <div>{{ dialogTableVisible }}</div>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <div>我是弹窗</div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableVisible = false;">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </span>
      </el-dialog>

      <div>
        <custom-input
          v-model="searchText"
          placeholder="Enter your username"
        ></custom-input
        >{{ searchText }}
      </div>
      <component v-bind:is="currentTabComponent"></component>
      <button @click="changeCom">切换组件</button>

      <div style="marginTop:20px;color:red">
        <BaseCheckbox v-model="checked"></BaseCheckbox> {{ checked }}
      </div>

        <div>
          <input type="checkbox" value="aaa" v-model="aaa" />
          <input type="checkbox" value="bbb" v-model="aaa" />
          <input type="checkbox" value="ccc" v-model="aaa" /> {{ aaa }}
        </div>
        <div>
          <input type="radio" value="男" v-model="bbb" /> {{ bbb }}
          <input type="radio" value="女" v-model="bbb" />
        </div>
    -->
    <div class="change-operation">
      <span @click="increment(num);">+增加</span
      ><span @click="incrementB">B+</span>
    </div>
    <div>{{ count }}</div>
    <div>{{ countB }}</div>

    <div>
      <el-table :data="tableData" border row-key="id" align="left">
        <el-table-column
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="dropCol[index].prop"
          :label="item.label"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Child from "./child";
import CustomInput from "./customeInput";
import BaseCheckbox from "./Modal";
import { mapState, mapMutations } from "vuex";
import Sortable from "sortablejs";
export default {
  name: "HelloWorld",
  mounted() {
    this.rowDrop();
    this.columnDrop();
  },
  data() {
    return {
      aaa: [],
      bbb: "",
      dialogTableVisible: false,
      gridData: "",
      num: 5,
      searchText: "111",
      currentTabComponent: "Child",
      checked: true,
      col: [
        {
          label: "日期",
          prop: "date"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "地址",
          prop: "address"
        }
      ],
      dropCol: [
        {
          label: "日期",
          prop: "date"
        },
        {
          label: "姓名",
          prop: "name"
        },
        {
          label: "地址",
          prop: "address"
        }
      ],
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 100 弄"
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 200 弄"
        },
        {
          id: "3",
          date: "2016-05-01",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 300 弄"
        },
        {
          id: "4",
          date: "2016-05-03",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 400 弄"
        }
      ]
    };
  },
  components: {
    Child,
    CustomInput,
    BaseCheckbox
  },
  computed: {
    ...mapState("moduleA", {
      count: state => state.count
    }),
    ...mapState("moduleB", {
      countB: state => state.count
    })
    // count() {
    //   return this.$store.state.moduleA.count;
    // }
  },
  methods: {
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        }
      });
    },
    //列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: evt => {
          const oldItem = this.dropCol[evt.oldIndex];
          this.dropCol.splice(evt.oldIndex, 1);
          this.dropCol.splice(evt.newIndex, 0, oldItem);
        }
      });
    },

    ...mapMutations("moduleA", ["increment"]),
    ...mapMutations("moduleB", ["incrementB"]),
    changeCom() {
      if (this.currentTabComponent === "CustomInput") {
        this.currentTabComponent = "";
      } else {
        this.currentTabComponent = "CustomInput";
      }
    },
    changeNum() {
      this.num += 1;
    },
    changeVisible() {
      this.dialogTableVisible = !this.dialogTableVisible;
    },
    save() {
      return setTimeout(() => {
        this.dialogTableVisible = false;
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.change-operation {
  span {
    dispplay: block;
    background: #ccc;
    height: 30px;
    width: 30px;
    margin: 0 20px;
    cursor: pointer;
  }
}
div {
  padding: 0;
}
</style>
