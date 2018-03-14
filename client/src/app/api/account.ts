import { ApiModule } from "../lib/api-module/api-module";








export class AccountApi extends ApiModule {
	/**
	 * Login into account
	 */
	public login = (email: string, password: string) => this.request('/account/login', { email, password });
	/**
	 * Register account
	 */
	public register = (email: string, password: string) => this.request('/account/register', { email, password });
	/**
	 * Send forgot password email
	 */
	public forgotPassword = (email: string) => this.request('/account/forgot-password', { email });
	/**
	 * Set new password for account
	 */
	public resetPassword = (password: string, token: string) => this.request('/account/reset-password', { password, token });
	/**
	 * Save account settings 
	 */
	public settings = (settings) => this.request('/account/settings', { ...settings });
	/**
	 * Upload avatar
	 */
	public uploadAvatar = (avatar) => this.request('/account/settings/avatar', { avatar }, {useFormData: true, method: 'POST'});
	/**
	 * Get user profile by id
	 * Empty id -> Get own profile
	 */
	public profile = (id: string = '') => this.request('/account/profile', { id });
	/**
	 * 
	 * @memberof AccountApi
	 */
	public changePassword = (oldPassword: string, newPassword: string) => this.request('/account/change-password', {oldPassword, newPassword});
}