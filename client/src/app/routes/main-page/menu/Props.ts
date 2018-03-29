import { AuthService } from '../../../services/auth/auth.service';
import { AccountService } from '../../../services/account/account.service';



export interface IMenuProps {
	auth? : AuthService;	
	account? : AccountService;
}