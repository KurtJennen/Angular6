import { FormControl } from '@angular/forms';

export class LimitValidator {
    static Limit(limit: number) {
        return (control: FormControl): {[key: string]: any} => {
            let val = Number(control.value);
            if (val != NaN && val > limit) {
                return {"limit": {"limit": limit, "acualValue": val}}
            } else {
                return null;
            }
        }
    }
}