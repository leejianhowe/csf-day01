import { EventEmitter, Injectable, Output } from '@angular/core';
import { Fruit } from './fruits.model';
@Injectable()
export class FruitsService {
  test: Fruit[] = [{ name: 'apple', desc: 'test desc' }];
  fruits: string[] = ['apple', 'pear', 'watermelon', 'orange', 'kiwi'];
  fruitDesc: string[] = [
    'An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.',
    'Pears are popular fruits consumed and produced around the world, growing on a tree and harvested in late Summer into October. The pear tree and shrub are a species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pears are valued for their edible fruit and juices, while others are cultivated as trees.',
    'Watermelon (Citrullus lanatus) is a plant species in the family Cucurbitaceae, a vine-like flowering plant originally domesticated in Africa. It is a highly cultivated fruit worldwide, having more than 1,000 varieties.',
    'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis,[1] which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.',
    "Kiwifruit (often shortened to kiwi outside Australia and New Zealand) or Chinese gooseberry is the edible berry of several species of woody vines in the genus Actinidia.[1][2] The most common cultivar group of kiwifruit (Actinidia deliciosa 'Hayward')[3] is oval, about the size of a large hen's egg: 5–8 centimetres (2–3 inches) in length and 4.5–5.5 cm (1 3⁄4–2 1⁄4 in) in diameter. It has a thin, fuzzy, fibrous, tart but edible light brown skin and light green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture with a sweet and unique flavour. In 2018, China produced half of the world total of kiwifruit.",
  ];
  randomFruit() {
    return this.fruits[Math.floor(Math.random() * 5)];
  }
  getFruits() {
    return this.fruits.slice();
  }
    @Output() selectFruit = new EventEmitter<string >();
}
