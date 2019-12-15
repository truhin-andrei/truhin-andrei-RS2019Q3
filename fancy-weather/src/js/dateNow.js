export default class DateNow {
  constructor(now1) {
    this.now1 = now1;
  }

  getDate(timeZone = 0) {
    const now = new Date();
    const UTCStamp = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    this.now1 = new Date(UTCStamp + timeZone * 1000);
    const formatter = new Intl.DateTimeFormat('en', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
    return formatter.format(this.now1);
  }

  render(timeZone) {
    const dateEl = document.getElementById('date');
    dateEl.innerHTML = this.getDate(timeZone);
    this.renderForecastDay();
  }

  renderForecastDay() {
    const forecast = document.querySelectorAll('.nextDay');
    const formatDay = new Intl.DateTimeFormat('en', {
      weekday: 'long',
    });

    for (let i = 0; i < forecast.length; i += 1) {
      const time = new Date(`${this.now1.getFullYear()},${this.now1.getMonth() + 1}, ${this.now1.getDate() + 1 + i}`);
      forecast[i].innerText = formatDay.format(time);
    }
  }
}
