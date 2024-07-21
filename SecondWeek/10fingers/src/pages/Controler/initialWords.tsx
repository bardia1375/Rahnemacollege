import { Word, AcceptStatus } from "../Types/Types";

const initialText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, et dictum quam condimentum. Etiam non elit eu nisi sodales feugiat a ac mauris. Integer et dictum dolor. Ut vel purus ac dolor bibendum vestibulum. Nullam a est et sem suscipit gravida. Nullam vitae purus dolor. Suspendisse et magna vitae ligula pharetra sagittis in nec orci. Duis vitae erat magna. Suspendisse quis nisl nec nisi aliquet vehicula. Vivamus vulputate ligula nec turpis congue, vel egestas orci tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan tortor. Cras vehicula turpis a orci luctus, non bibendum metus pulvinar. Nulla malesuada lacus eget nunc laoreet, sed convallis risus eleifend. Fusce vitae ex urna. Morbi euismod orci vel urna pretium, et dictum quam condimentum. Etiam non elit eu nisi sodales feugiat a ac mauris. Integer et dictum dolor. Ut vel purus ac dolor bibendum vestibulum. Nullam a est et sem suscipit gravida. Nullam vitae purus dolor. Suspendisse et magna vitae ligula pharetra sagittis in nec orci. Duis vitae erat magna. Suspendisse quis nisl nec nisi aliquet vehicula. Vivamus vulputate ligula nec turpis congue, vel egestas orci tincidunt.`;

export const initialWords: Word[] = initialText
  .split(" ")
  .map((word, index) => ({
    id: index + 1,
    value: word,
    accept: "" as AcceptStatus,
  }));
