import { FormGroup } from '@angular/forms';

export class CindyEqualPasswordsValidator {

    public static validate(firstField, secondField) {

        return (c: FormGroup) => {

            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        }
    }
}
