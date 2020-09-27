import { IdCardFactory } from "./idCardFactory";
import { Factory } from "./factory";
import { Product } from "./product";

const factory: Factory = new IdCardFactory();

const card1: Product = factory.create("やまだ");
const card2: Product = factory.create("すずき");
const card3: Product = factory.create("さとう");

card1.use();
card2.use();
card3.use();
