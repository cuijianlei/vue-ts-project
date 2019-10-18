import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import CountUp from 'countup';

@Component({
  name: 'CountTo',
})
export default class CountTo extends Vue {
  public counter!: CountUp;
  @Prop({type: Number, default: 0}) public readonly start!: number;
  @Prop(Number) public readonly end!: number;
  @Emit('on-click')
  public click(event) {
    return event;
  }

  public get eleId() {
    return `count_to_${(this as any)._uid}`;
  }

  public update(endVal: number): void {
    this.counter.update(endVal);
  }

  protected render() {
    return (
      <div class='count-up-wrap' on-click={this.click}>
        <span id={this.eleId}></span>
      </div>
    );
  }

  protected mounted() {
    this.counter = new CountUp(this.eleId, this.start, this.end, 0, 1, {});
    this.counter.start();
  }
}
