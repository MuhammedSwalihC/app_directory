export class Validator {
  initializer: any;
  errorinitalizer: any;
  constructor(validationSchema: Object) {
    this.initializer = validationSchema;
    this.errorinitalizer = this.getErrors();
  }

  validate(name: string, value: any) {
    const validations = this.initializer[name];
    if (validations && validations.required && value.toString().length < 1) {
      return "required";
    }
    if (
      validations &&
      validations.pattern &&
      validations.pattern.regex.test(value) === false
    ) {
      return `invalid ${name.replace(/_/g, " ")}`;
    }
    if (
      validations &&
      validations.minLength &&
      validations.minLength > value.toString().length
    ) {
      return `minimum ${validations.minLength} characters required`;
    }
    if (
      validations &&
      validations.maxLength &&
      validations.maxLength < value.toString().length
    ) {
      return `should not be more than ${validations.maxLength} characters`;
    }
    if (
      validations &&
      validations.minNum &&
      validations.minNum > parseInt(value)
    ) {
      return `should not be less than ${validations.maxNum}`;
    }
    if (
      validations &&
      validations.maxNum &&
      validations.maxNum < parseInt(value)
    ) {
      return `should not be more than ${validations.maxNum}`;
    }

    return null;
  }

  getErrors() {
    const values = Object.keys(this.initializer);
    let data: any = {};
    values.map((value: string, index) => {
      if (value in this.initializer) {
        if (this.initializer[value].required) {
          data[value] = "required";
          return null;
        }
        if (this.initializer[value].minLength) {
          data[
            value
          ] = `minimum ${this.initializer[value]["minLength"]} characters required`;
          return null;
        }
      }
      return null;
    });

    return data;
  }
}
