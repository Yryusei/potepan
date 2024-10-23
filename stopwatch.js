
class Stopwatch {

  constructor() {
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
  }

  show_time() {
    return ('0' + this.hour ).slice(-2) + ':' + ('0' + this.minute ).slice(-2) + ':' + ('0' + this.second ).slice(-2) + '.' + ('0' + this.millisecond ).slice(-2);
  }

  clear_time() {
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.millisecond = 0;
    return this.show_time();
  }

  update_time() {
    this.millisecond += 1;
    if (this.millisecond == 100) {
      this.millisecond = 0;
      this.second += 1;
    }
    if (this.second == 60){
      this.second = 0;
      this.minute += 1;
    }
    if (this.minute == 60){
      this.minite = 0;
      this.hour += 1;
    }
    if (this.hour == 24) return this.clear_time();

    return this.show_time(); 
  } 
}
