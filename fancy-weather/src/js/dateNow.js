export class DateNow{
  getDate(timeZone=0){
    let now = new Date();
    let UTCStamp = now.getTime() + now.getTimezoneOffset()*60*1000;
   let now1 = new Date(UTCStamp + timeZone*1000);
    let formatter = new Intl.DateTimeFormat("en", {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
    return formatter.format(now1);
  }

  render(timeZone){
    const dateEl = document.getElementById('date');
    dateEl.innerHTML = this.getDate(timeZone);
  }
}