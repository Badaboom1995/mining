import { AccountService } from "../../services/account/account.service";
import { ProfileService } from "../../services/profile/profile.service";
import { ValidationService } from '../../services/validation/validation.service';


export interface IAccountSettingsProps {
  profile? : ProfileService;
  validation? : ValidationService;
}
