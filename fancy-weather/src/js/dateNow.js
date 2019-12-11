export class DateNow{
  getDate(){
    let now = new Date();
   let now1 = new Date(10800);
   console.log(now1);
    let formatter = new Intl.DateTimeFormat("en", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(now);
  }

  render(){
    const dateEl = document.getElementById('date');
    dateEl.innerHTML = this.getDate();
  }
}