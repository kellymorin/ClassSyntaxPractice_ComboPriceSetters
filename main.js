/*
Allow a restaurant to define the items in its combo meal, based on items from the menu (i.e. this.menu.breadsticks), using a setter. Then have your comboPrice getter use the combo property created by the setter instead of the hard-coded menu items to calculate the cost.

*/

class Restaurant {

  constructor (props) {
    this.comboDiscount = props.discount
    this.menu = props.menu
}

  set Combo (props) {
    props.forEach(prop => {
      this.combo += prop
    })
  }

  get comboPrice () {
    let total = 0;
    for(const item in this.combo){
      total += this.combo[item]
    }
    let discount = `${this.comboDiscount}`
    return `$${(total * discount).toFixed(2)}`
  }

}

const bobsBurgers = new Restaurant({
  discount: 0.85,
  menu: {
      fries: 1.29,
      burger: 3.69,
      milkshake: 1.97
  }
})
bobsBurgers

bobsBurgers.combo = [bobsBurgers.menu.fries, bobsBurgers.menu.milkshake]
