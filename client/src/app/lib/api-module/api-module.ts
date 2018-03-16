import { API_URL } from "../../constants";
import axios from 'axios';
import { routingService } from '../../services/routing/routing';
export class ApiModule {
	/**
	 * @protected
	 * @memberof ApiModule
	 */
	protected baseUrl = API_URL;


	/**
	 * Encode object ot URI
	 */
	public static encodeToURI = (target) => Object.keys(target)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(target[key]))
		.join('&');

	/**
	 * Check is authorized and redirect if not
	 */
	protected checkIsAutorized(response) {
		if (response.status == 401) {
			routingService.push('/auth/login');
		}
	}

	/**
	 * Boostrap form data from object
	 */
	protected bootstrapBody(params: object) {
		const body = new FormData();
		Object.keys(params).map(key => body.append(key, params[key]));
		return body;
	}
	/**
	 * Send request with params
	 * @memberof ApiModule
	 */
	protected request = async (url: string, params = {}, options = { method: 'post', useFormData: false }): Promise<any> => {

		const TOKEN = localStorage.getItem('authToken') || '';
		const data = options.useFormData ? this.bootstrapBody(params) : ApiModule.encodeToURI(params);
		const config : any = {
			url: this.baseUrl + url,
			method: options.method || 'post',
			data,
			headers: {
				'Content-Type': options.useFormData ? 'multipart/form-data' : 'application/x-www-form-urlencoded;charset=UTF-8',
			},
		};
		if (TOKEN) {
			config.headers.Authorization = 'Bearer ' + TOKEN;
		}

		return new Promise((resolve, reject) => {

			return axios(config).then(async response => {
				this.checkIsAutorized(response);
				const res = await response.data;
				if (res.success) return resolve(res);
				reject(res)
			}).catch(async response => {
				this.checkIsAutorized(response);
				reject({
					success: false,
					content: {},
					message: response.message
				});
			});
		});
	}

}




