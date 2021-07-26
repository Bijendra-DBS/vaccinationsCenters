export class RegexConstant {
    public static get PASSWORD_REGEX() : any { return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; };
    public static get ONLY_NUMBER() : any {return /^[0-9]{10}$/};
    public static get ONLY_DIGITS() : any {return /^[0-9]*$/};
    public static get EMAIL_REGEX() : any { return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
    public static get TWINTYFOUR_HOURS_REGEX() : any { return /^([0-1]{1}[0-9]|2[0-3]):[0-5][0-9]$/}


  }
