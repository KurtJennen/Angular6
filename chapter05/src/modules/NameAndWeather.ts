export class Name {
    // first: string;
    // second: string;

    // constructor(first: string, second: string) {
    //     this.first = first;
    //     this.second = second;
    // }
    
    constructor(private first: string, private second: string) {}
  
    get nameMessage() : string {
        return `Hello ${this.first} ${this.second}`;
    }
  }
    
  
export class WeatherLocation {
    // weather: string;
    // city: string;
    
    // constructor(weather: string, city: string) {
    //     this.weather = weather;
    //     this.city = city;
    // }
  
    constructor(private weather: string, private city: string) {}

    get weatherMessage(): string {
        return `It is ${this.weather} in ${this.city}`;
    }
  }