const total_bill = document.getElementById('total-bill')
const total_tip = document.getElementById('total-tip')
const total_people = document.getElementById('number-of-people')
const total_amount = document.getElementById('total-amount')

let people = Number.parseInt(total_people.innerText)

function calculateBill(){
    let bill = Number.parseInt(total_bill.value)
    let tip_percentage = Number.parseInt(total_tip.value)/100
    let tip_value = bill*tip_percentage
    let bill_value = tip_value + bill
    let final_amount = bill_value/people
    total_amount.innerText = final_amount.toFixed(2)
}

function increase() {
    people += 1
    total_people.innerText = people
    calculateBill()
  }
  function decrease() {
    if (people <= 1) {
      return alert("cant decrease less than 1")
    }
    people -= 1
    total_people.innerText = people
    calculateBill()
  }